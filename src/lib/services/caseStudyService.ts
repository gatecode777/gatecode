import connectDB from '@/lib/db';
import CaseStudy, { ICaseStudy } from '@/models/CaseStudy';
import { sanitizeText, generateSlug } from '@/lib/validations/shared';
import type { CaseStudyInput } from '@/lib/validations/caseStudy';
import type { PaginatedResult } from './sliderService';

export interface CaseStudyListOptions {
  page: number; limit: number;
  search?: string; status?: 'active'|'inactive'|'all'; featured?: boolean;
}

// Listing — only listing-safe fields (no contentBlocks blob)
export async function listCaseStudies(opts: CaseStudyListOptions): Promise<PaginatedResult<Partial<ICaseStudy>>> {
  await connectDB();
  const { page, limit, search, status, featured } = opts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string,any> = {};
  if (status === 'active')   filter.isActive   = true;
  else if (status === 'inactive') filter.isActive = false;
  if (featured !== undefined) filter.isFeatured = featured;
  if (search?.trim()) {
    const rx = new RegExp(search.trim(), 'i');
    filter.$or = [{ title: rx }, { slug: rx }, { shortDesc: rx }, { description: rx }];
  }
  const skip = (page - 1) * limit;
  const projection = 'title slug shortDesc description thumbnail isFeatured isActive order createdAt updatedAt';
  const [data, total] = await Promise.all([
    CaseStudy.find(filter).select(projection).sort({ order:1, createdAt:-1 }).skip(skip).limit(limit).lean(),
    CaseStudy.countDocuments(filter),
  ]);
  return { data: data as Partial<ICaseStudy>[], total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getCaseStudyById(id: string): Promise<ICaseStudy | null> {
  await connectDB();
  return CaseStudy.findById(id).lean() as Promise<ICaseStudy | null>;
}

export async function getCaseStudyBySlug(slug: string): Promise<ICaseStudy | null> {
  await connectDB();
  return CaseStudy.findOne({ slug: slug.toLowerCase() }).lean() as Promise<ICaseStudy | null>;
}

export async function caseStudySlugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q: Record<string,any> = { slug };
  if (excludeId) q._id = { $ne: excludeId };
  return !!(await CaseStudy.findOne(q).select('_id').lean());
}

export async function createCaseStudy(input: CaseStudyInput): Promise<ICaseStudy> {
  await connectDB();
  const title = sanitizeText(input.title!);
  let slug = input.slug?.trim() ? input.slug.trim().toLowerCase() : generateSlug(title);
  let suffix = 0; const base = slug;
  while (await caseStudySlugExists(slug)) { suffix++; slug = `${base}-${suffix}`; }
  const last  = await CaseStudy.findOne().sort({ order:-1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);
  const doc = await CaseStudy.create({
    title, slug, shortDesc: sanitizeText(input.shortDesc ?? ''),
    description: sanitizeText(input.description ?? ''),
    thumbnail: input.thumbnail, isFeatured: input.isFeatured ?? false,
    isActive: input.isActive ?? true, order,
    contentBlocks: (input.contentBlocks ?? []).map((b, i) => ({ ...b, order: b.order ?? i })),
  });
  return doc.toObject() as ICaseStudy;
}

export async function updateCaseStudy(id: string, input: Partial<CaseStudyInput>): Promise<ICaseStudy | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updates: Record<string,any> = {};
  if (input.title       !== undefined) updates.title       = sanitizeText(input.title);
  if (input.shortDesc   !== undefined) updates.shortDesc   = sanitizeText(input.shortDesc);
  if (input.description !== undefined) updates.description = sanitizeText(input.description);
  if (input.thumbnail   !== undefined) updates.thumbnail   = input.thumbnail;
  if (input.isFeatured  !== undefined) updates.isFeatured  = input.isFeatured;
  if (input.isActive    !== undefined) updates.isActive    = input.isActive;
  if (input.order       !== undefined) updates.order       = input.order;
  if (input.slug !== undefined) {
    const slug = input.slug.trim().toLowerCase();
    if (await caseStudySlugExists(slug, id)) throw new Error('Slug already in use by another case study');
    updates.slug = slug;
  }
  if (input.contentBlocks !== undefined)
    updates.contentBlocks = input.contentBlocks.map((b, i) => ({ ...b, order: b.order ?? i }));
  return CaseStudy.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true }).lean() as Promise<ICaseStudy | null>;
}

export async function deleteCaseStudy(id: string): Promise<boolean> {
  await connectDB();
  return !!(await CaseStudy.findByIdAndDelete(id));
}
