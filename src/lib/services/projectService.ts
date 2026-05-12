import connectDB from '@/lib/db';
import PortfolioProject, { IPortfolioProject } from '@/models/PortfolioProject';
import { sanitizeText, generateSlug } from '@/lib/validations/shared';
import type { ProjectInput } from '@/lib/validations/project';
import type { PaginatedResult } from './sliderService';
import mongoose from 'mongoose';

export interface ProjectListOptions {
  page: number;
  limit: number;
  search?: string;
  status?: 'active' | 'inactive' | 'all';
  categoryId?: string;
  featured?: boolean;
}

export async function listProjects(
  opts: ProjectListOptions
): Promise<PaginatedResult<IPortfolioProject>> {
  await connectDB();

  const { page, limit, search, status, categoryId, featured } = opts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};

  if (status === 'active') filter.isActive = true;
  else if (status === 'inactive') filter.isActive = false;

  if (categoryId) filter.categoryId = new mongoose.Types.ObjectId(categoryId);
  if (featured !== undefined) filter.isFeatured = featured;

  if (search?.trim()) {
    const regex = new RegExp(search.trim(), 'i');
    filter.$or = [{ title: regex }, { slug: regex }, { description: regex }];
  }

  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    PortfolioProject.find(filter)
      .populate('categoryId', 'name slug')
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    PortfolioProject.countDocuments(filter),
  ]);

  return { data: data as IPortfolioProject[], total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getProjectById(id: string): Promise<IPortfolioProject | null> {
  await connectDB();
  return PortfolioProject.findById(id).populate('categoryId', 'name slug').lean() as Promise<IPortfolioProject | null>;
}

export async function projectSlugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = { slug };
  if (excludeId) query._id = { $ne: excludeId };
  const found = await PortfolioProject.findOne(query).select('_id').lean();
  return !!found;
}

export async function createProject(input: ProjectInput): Promise<IPortfolioProject> {
  await connectDB();

  const title = sanitizeText(input.title);
  let slug = input.slug?.trim() ? input.slug.trim().toLowerCase() : generateSlug(title);

  // Ensure slug uniqueness
  let suffix = 0;
  const baseSlug = slug;
  while (await projectSlugExists(slug)) {
    suffix++;
    slug = `${baseSlug}-${suffix}`;
  }

  const last = await PortfolioProject.findOne().sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);

  const buttons = (input.buttons ?? []).map((b, i) => ({
    label: sanitizeText(b.label),
    url: b.url.trim(),
    openInNewTab: b.openInNewTab ?? true,
    isActive: b.isActive ?? true,
    order: b.order ?? i,
  }));

  const project = await PortfolioProject.create({
    categoryId: input.categoryId || null,
    title,
    slug,
    description: sanitizeText(input.description ?? ''),
    thumbnail: input.thumbnail,
    technologies: (input.technologies ?? []).map((t) => sanitizeText(t)).filter(Boolean),
    buttons,
    isFeatured: input.isFeatured ?? false,
    isActive: input.isActive ?? true,
    order,
  });

  return project.toObject() as IPortfolioProject;
}

export async function updateProject(
  id: string,
  input: Partial<ProjectInput>
): Promise<IPortfolioProject | null> {
  await connectDB();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updates: Record<string, any> = {};

  if (input.title !== undefined) updates.title = sanitizeText(input.title);
  if (input.slug !== undefined) {
    const slug = input.slug.trim().toLowerCase();
    if (await projectSlugExists(slug, id)) throw new Error('Slug already in use by another project');
    updates.slug = slug;
  }
  if (input.categoryId !== undefined) updates.categoryId = input.categoryId || null;
  if (input.description !== undefined) updates.description = sanitizeText(input.description);
  if (input.thumbnail !== undefined) updates.thumbnail = input.thumbnail;
  if (input.technologies !== undefined)
    updates.technologies = input.technologies.map((t) => sanitizeText(t)).filter(Boolean);
  if (input.buttons !== undefined)
    updates.buttons = input.buttons.map((b, i) => ({
      label: sanitizeText(b.label),
      url: b.url.trim(),
      openInNewTab: b.openInNewTab ?? true,
      isActive: b.isActive ?? true,
      order: b.order ?? i,
    }));
  if (input.isFeatured !== undefined) updates.isFeatured = input.isFeatured;
  if (input.isActive !== undefined) updates.isActive = input.isActive;
  if (input.order !== undefined) updates.order = input.order;

  return PortfolioProject.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true })
    .populate('categoryId', 'name slug')
    .lean() as Promise<IPortfolioProject | null>;
}

export async function deleteProject(id: string): Promise<boolean> {
  await connectDB();
  const res = await PortfolioProject.findByIdAndDelete(id);
  return !!res;
}
