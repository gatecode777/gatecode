import connectDB from '@/lib/db';
import PortfolioCategory, { IPortfolioCategory } from '@/models/PortfolioCategory';
import { sanitizeText, generateSlug } from '@/lib/validations/shared';
import type { CategoryInput } from '@/lib/validations/category';
import type { PaginatedResult } from './sliderService';

export interface CategoryListOptions {
  page: number;
  limit: number;
  search?: string;
  status?: 'active' | 'inactive' | 'all';
}

export async function listCategories(
  opts: CategoryListOptions
): Promise<PaginatedResult<IPortfolioCategory>> {
  await connectDB();

  const { page, limit, search, status } = opts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};

  if (status === 'active') filter.isActive = true;
  else if (status === 'inactive') filter.isActive = false;

  if (search?.trim()) {
    const regex = new RegExp(search.trim(), 'i');
    filter.$or = [{ name: regex }, { slug: regex }];
  }

  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    PortfolioCategory.find(filter).sort({ order: 1, name: 1 }).skip(skip).limit(limit).lean(),
    PortfolioCategory.countDocuments(filter),
  ]);

  return { data: data as IPortfolioCategory[], total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getAllActiveCategories(): Promise<IPortfolioCategory[]> {
  await connectDB();
  return PortfolioCategory.find({ isActive: true }).sort({ order: 1, name: 1 }).lean() as Promise<IPortfolioCategory[]>;
}

export async function getCategoryById(id: string): Promise<IPortfolioCategory | null> {
  await connectDB();
  return PortfolioCategory.findById(id).lean() as Promise<IPortfolioCategory | null>;
}

export async function slugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = { slug };
  if (excludeId) query._id = { $ne: excludeId };
  const found = await PortfolioCategory.findOne(query).select('_id').lean();
  return !!found;
}

export async function createCategory(input: CategoryInput): Promise<IPortfolioCategory> {
  await connectDB();

  const name = sanitizeText(input.name);
  let slug = input.slug?.trim() ? input.slug.trim().toLowerCase() : generateSlug(name);

  // Ensure slug uniqueness
  let suffix = 0;
  let baseSlug = slug;
  while (await slugExists(slug)) {
    suffix++;
    slug = `${baseSlug}-${suffix}`;
  }

  const last = await PortfolioCategory.findOne().sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);

  const cat = await PortfolioCategory.create({
    name,
    slug,
    description: sanitizeText(input.description ?? ''),
    icon: input.icon ?? null,
    order,
    isActive: input.isActive ?? true,
  });

  return cat.toObject() as IPortfolioCategory;
}

export async function updateCategory(
  id: string,
  input: Partial<CategoryInput>
): Promise<IPortfolioCategory | null> {
  await connectDB();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updates: Record<string, any> = {};
  if (input.name !== undefined) updates.name = sanitizeText(input.name);
  if (input.slug !== undefined) {
    const slug = input.slug.trim().toLowerCase();
    if (await slugExists(slug, id)) throw new Error('Slug already in use by another category');
    updates.slug = slug;
  }
  if (input.description !== undefined) updates.description = sanitizeText(input.description);
  if (input.icon !== undefined) updates.icon = input.icon;
  if (input.order !== undefined) updates.order = input.order;
  if (input.isActive !== undefined) updates.isActive = input.isActive;

  return PortfolioCategory.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true }).lean() as Promise<IPortfolioCategory | null>;
}

export async function deleteCategory(id: string): Promise<boolean> {
  await connectDB();
  const res = await PortfolioCategory.findByIdAndDelete(id);
  return !!res;
}

export async function reorderCategories(
  items: Array<{ id: string; order: number }>
): Promise<void> {
  await connectDB();
  await Promise.all(
    items.map(({ id, order }) =>
      PortfolioCategory.findByIdAndUpdate(id, { $set: { order } })
    )
  );
}
