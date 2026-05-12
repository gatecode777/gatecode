import connectDB from '@/lib/db';
import ServiceCategory, { IServiceCategory } from '@/models/ServiceCategory';
import SubService, { ISubService } from '@/models/SubService';
import ServicePage, { IServicePage } from '@/models/ServicePage';
import { sanitizeText, generateSlug } from '@/lib/validations/shared';
import type { ServiceCategoryInput, SubServiceInput, ServicePageInput } from '@/lib/validations/services';
import type { PaginatedResult } from './sliderService';
import mongoose from 'mongoose';

// ════════════════════════════════════════════════════════
//  SERVICE CATEGORIES
// ════════════════════════════════════════════════════════

export interface CategoryListOpts { page: number; limit: number; search?: string; status?: 'active'|'inactive'|'all'; }

export async function listServiceCategories(opts: CategoryListOpts): Promise<PaginatedResult<IServiceCategory>> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (opts.status === 'active')   filter.isActive = true;
  if (opts.status === 'inactive') filter.isActive = false;
  if (opts.search?.trim()) {
    filter.$or = [{ name: new RegExp(opts.search.trim(), 'i') }, { slug: new RegExp(opts.search.trim(), 'i') }];
  }
  const skip = (opts.page - 1) * opts.limit;
  const [data, total] = await Promise.all([
    ServiceCategory.find(filter).sort({ order: 1, name: 1 }).skip(skip).limit(opts.limit).lean(),
    ServiceCategory.countDocuments(filter),
  ]);
  return { data: data as IServiceCategory[], total, page: opts.page, limit: opts.limit, totalPages: Math.ceil(total / opts.limit) };
}

export async function getAllActiveServiceCategories(): Promise<IServiceCategory[]> {
  await connectDB();
  return ServiceCategory.find({ isActive: true }).sort({ order: 1, name: 1 }).lean() as Promise<IServiceCategory[]>;
}

export async function getServiceCategoryById(id: string): Promise<IServiceCategory | null> {
  await connectDB();
  return ServiceCategory.findById(id).lean() as Promise<IServiceCategory | null>;
}

export async function serviceCategorySlugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q: Record<string, any> = { slug };
  if (excludeId) q._id = { $ne: excludeId };
  return !!(await ServiceCategory.findOne(q).select('_id').lean());
}

export async function createServiceCategory(input: ServiceCategoryInput): Promise<IServiceCategory> {
  await connectDB();
  const name = sanitizeText(input.name);
  let slug = input.slug?.trim() ? input.slug.toLowerCase() : generateSlug(name);
  let suffix = 0; const base = slug;
  while (await serviceCategorySlugExists(slug)) { suffix++; slug = `${base}-${suffix}`; }
  const last = await ServiceCategory.findOne().sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);
  const doc = await ServiceCategory.create({ name, slug, order, isActive: input.isActive ?? true });
  return doc.toObject() as IServiceCategory;
}

export async function updateServiceCategory(id: string, input: Partial<ServiceCategoryInput>): Promise<IServiceCategory | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string, any> = {};
  if (input.name     !== undefined) u.name     = sanitizeText(input.name);
  if (input.order    !== undefined) u.order    = input.order;
  if (input.isActive !== undefined) u.isActive = input.isActive;
  if (input.slug !== undefined) {
    const s = input.slug.trim().toLowerCase();
    if (await serviceCategorySlugExists(s, id)) throw new Error('Slug already in use');
    u.slug = s;
  }
  return ServiceCategory.findByIdAndUpdate(id, { $set: u }, { new: true }).lean() as Promise<IServiceCategory | null>;
}

export async function deleteServiceCategory(id: string): Promise<boolean> {
  await connectDB();
  return !!(await ServiceCategory.findByIdAndDelete(id));
}

export async function reorderServiceCategories(items: { id: string; order: number }[]): Promise<void> {
  await connectDB();
  await Promise.all(items.map(({ id, order }) => ServiceCategory.findByIdAndUpdate(id, { $set: { order } })));
}

// ════════════════════════════════════════════════════════
//  SUB SERVICES
// ════════════════════════════════════════════════════════

export interface SubServiceListOpts { page: number; limit: number; search?: string; status?: 'active'|'inactive'|'all'; categoryId?: string; }

export async function listSubServices(opts: SubServiceListOpts): Promise<PaginatedResult<ISubService>> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (opts.status === 'active')   filter.isActive = true;
  if (opts.status === 'inactive') filter.isActive = false;
  if (opts.categoryId) filter.categoryId = new mongoose.Types.ObjectId(opts.categoryId);
  if (opts.search?.trim()) {
    filter.$or = [{ name: new RegExp(opts.search.trim(), 'i') }, { slug: new RegExp(opts.search.trim(), 'i') }];
  }
  const skip = (opts.page - 1) * opts.limit;
  const [data, total] = await Promise.all([
    SubService.find(filter).populate('categoryId', 'name slug').sort({ order: 1, name: 1 }).skip(skip).limit(opts.limit).lean(),
    SubService.countDocuments(filter),
  ]);
  return { data: data as ISubService[], total, page: opts.page, limit: opts.limit, totalPages: Math.ceil(total / opts.limit) };
}

export async function getAllActiveSubServices(categoryId?: string): Promise<ISubService[]> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = { isActive: true };
  if (categoryId) filter.categoryId = new mongoose.Types.ObjectId(categoryId);
  return SubService.find(filter).populate('categoryId', 'name slug').sort({ order: 1, name: 1 }).lean() as Promise<ISubService[]>;
}

export async function getSubServiceById(id: string): Promise<ISubService | null> {
  await connectDB();
  return SubService.findById(id).populate('categoryId', 'name slug').lean() as Promise<ISubService | null>;
}

export async function subServiceSlugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q: Record<string, any> = { slug };
  if (excludeId) q._id = { $ne: excludeId };
  return !!(await SubService.findOne(q).select('_id').lean());
}

export async function createSubService(input: SubServiceInput): Promise<ISubService> {
  await connectDB();
  const name = sanitizeText(input.name);
  let slug = input.slug?.trim() ? input.slug.toLowerCase() : generateSlug(name);
  let suffix = 0; const base = slug;
  while (await subServiceSlugExists(slug)) { suffix++; slug = `${base}-${suffix}`; }
  const last = await SubService.findOne({ categoryId: input.categoryId }).sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);
  const doc = await SubService.create({ categoryId: input.categoryId, name, slug, order, isActive: input.isActive ?? true });
  return (await SubService.findById(doc._id).populate('categoryId', 'name slug').lean()) as ISubService;
}

export async function updateSubService(id: string, input: Partial<SubServiceInput>): Promise<ISubService | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string, any> = {};
  if (input.name       !== undefined) u.name       = sanitizeText(input.name);
  if (input.categoryId !== undefined) u.categoryId = input.categoryId;
  if (input.order      !== undefined) u.order      = input.order;
  if (input.isActive   !== undefined) u.isActive   = input.isActive;
  if (input.slug !== undefined) {
    const s = input.slug.trim().toLowerCase();
    if (await subServiceSlugExists(s, id)) throw new Error('Slug already in use');
    u.slug = s;
  }
  return SubService.findByIdAndUpdate(id, { $set: u }, { new: true }).populate('categoryId', 'name slug').lean() as Promise<ISubService | null>;
}

export async function deleteSubService(id: string): Promise<boolean> {
  await connectDB();
  return !!(await SubService.findByIdAndDelete(id));
}

// ════════════════════════════════════════════════════════
//  SERVICE PAGES
// ════════════════════════════════════════════════════════

export interface ServicePageListOpts { page: number; limit: number; search?: string; categoryId?: string; status?: 'active'|'inactive'|'all'; pageType?: 'category'|'subservice'; }

export async function listServicePages(opts: ServicePageListOpts): Promise<PaginatedResult<IServicePage>> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (opts.status === 'active')   filter.isActive = true;
  if (opts.status === 'inactive') filter.isActive = false;
  if (opts.categoryId) filter.categoryId = new mongoose.Types.ObjectId(opts.categoryId);
  if (opts.pageType)   filter.pageType   = opts.pageType;
  if (opts.search?.trim()) {
    filter.$or = [{ slug: new RegExp(opts.search.trim(), 'i') }];
  }
  const skip = (opts.page - 1) * opts.limit;
  const [data, total] = await Promise.all([
    ServicePage.find(filter)
      .populate('subServiceId', 'name slug')
      .populate('categoryId', 'name slug')
      .select('-contentBlocks') // exclude heavy field in list
      .sort({ createdAt: -1 })
      .skip(skip).limit(opts.limit).lean(),
    ServicePage.countDocuments(filter),
  ]);
  return { data: data as IServicePage[], total, page: opts.page, limit: opts.limit, totalPages: Math.ceil(total / opts.limit) };
}

export async function getServicePageById(id: string): Promise<IServicePage | null> {
  await connectDB();
  return ServicePage.findById(id).populate('subServiceId', 'name slug').populate('categoryId', 'name slug').lean() as Promise<IServicePage | null>;
}

export async function getServicePageBySlug(slug: string): Promise<IServicePage | null> {
  await connectDB();
  return ServicePage.findOne({ slug: slug.toLowerCase() }).populate('subServiceId', 'name slug').populate('categoryId', 'name slug').lean() as Promise<IServicePage | null>;
}

export async function getServicePageBySubServiceId(subServiceId: string): Promise<IServicePage | null> {
  await connectDB();
  return ServicePage.findOne({ pageType: 'subservice', subServiceId: new mongoose.Types.ObjectId(subServiceId) }).lean() as Promise<IServicePage | null>;
}

export async function getServicePageByCategoryId(categoryId: string): Promise<IServicePage | null> {
  await connectDB();
  return ServicePage.findOne({ pageType: 'category', categoryId: new mongoose.Types.ObjectId(categoryId) }).lean() as Promise<IServicePage | null>;
}

/** Find existing page or create a new one — prevents duplicate key on double-click */
export async function findOrCreateSubServicePage(input: ServicePageInput): Promise<{ page: IServicePage; created: boolean }> {
  await connectDB();
  // Check if page already exists for this sub-service
  const existing = await ServicePage.findOne({
    pageType: 'subservice',
    subServiceId: new mongoose.Types.ObjectId(input.subServiceId!),
  }).lean();
  if (existing) return { page: existing as IServicePage, created: false };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = await (ServicePage as any).create({
    pageType: 'subservice' as const,
    subServiceId: new mongoose.Types.ObjectId(input.subServiceId!),
    categoryId: new mongoose.Types.ObjectId(input.categoryId),
    slug: input.slug.toLowerCase(),
    contentBlocks: (input.contentBlocks ?? []).map((b, i) => ({ ...b, order: b.order ?? i })),
    isActive: input.isActive ?? true,
  });
  return { page: doc.toObject() as IServicePage, created: true };
}

/** Find existing category page or create it — prevents duplicate key on double-click */
export async function findOrCreateCategoryPage(categoryId: string, slug: string): Promise<{ page: IServicePage; created: boolean }> {
  await connectDB();
  const existing = await ServicePage.findOne({
    pageType: 'category',
    categoryId: new mongoose.Types.ObjectId(categoryId),
  }).lean();
  if (existing) return { page: existing as IServicePage, created: false };

  // Ensure slug uniqueness
  let finalSlug = `category-${slug}`;
  const slugExists = await ServicePage.findOne({ slug: finalSlug }).select('_id').lean();
  if (slugExists) finalSlug = `category-${slug}-${Date.now()}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = await (ServicePage as any).create({
    pageType: 'category' as const,
    subServiceId: null,
    categoryId: new mongoose.Types.ObjectId(categoryId),
    slug: finalSlug,
    contentBlocks: [],
    isActive: true,
  });
  return { page: doc.toObject() as IServicePage, created: true };
}

export async function createServicePage(input: ServicePageInput): Promise<IServicePage> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = await (ServicePage as any).create({
    pageType: input.pageType ?? 'subservice',
    subServiceId: input.subServiceId ? new mongoose.Types.ObjectId(input.subServiceId) : null,
    categoryId: new mongoose.Types.ObjectId(input.categoryId),
    slug: input.slug.toLowerCase(),
    contentBlocks: (input.contentBlocks ?? []).map((b, i) => ({ ...b, order: b.order ?? i })),
    isActive: input.isActive ?? true,
  });
  return doc.toObject() as IServicePage;
}

export async function updateServicePage(id: string, input: Partial<ServicePageInput>): Promise<IServicePage | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string, any> = {};
  if (input.isActive !== undefined) u.isActive = input.isActive;
  if (input.slug !== undefined) u.slug = input.slug.toLowerCase();
  if (input.contentBlocks !== undefined)
    u.contentBlocks = input.contentBlocks.map((b, i) => ({ ...b, order: b.order ?? i }));
  return ServicePage.findByIdAndUpdate(id, { $set: u }, { new: true })
    .populate('subServiceId', 'name slug').populate('categoryId', 'name slug').lean() as Promise<IServicePage | null>;
}

export async function deleteServicePage(id: string): Promise<boolean> {
  await connectDB();
  return !!(await ServicePage.findByIdAndDelete(id));
}
