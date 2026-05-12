import connectDB from '@/lib/db';
import TechnicalExpertise, { TEPage, ITechnicalExpertise, ITEPage } from '@/models/TechnicalExpertise';
import { sanitizeText, generateSlug } from '@/lib/validations/shared';
import type { TEMenuInput, TEPageInput } from '@/lib/validations/technicalExpertise';
import type { PaginatedResult } from './sliderService';
import mongoose from 'mongoose';

// ════════════════════════════════════════════════════════
//  MENU ITEMS
// ════════════════════════════════════════════════════════

export interface TEListOpts {
  page: number; limit: number; search?: string; status?: 'active'|'inactive'|'all';
}

export async function listTEItems(opts: TEListOpts): Promise<PaginatedResult<ITechnicalExpertise>> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (opts.status === 'active')   filter.isActive = true;
  if (opts.status === 'inactive') filter.isActive = false;
  if (opts.search?.trim()) {
    const re = new RegExp(opts.search.trim(), 'i');
    filter.$or = [{ name: re }, { slug: re }];
  }
  const skip = (opts.page - 1) * opts.limit;
  const [data, total] = await Promise.all([
    TechnicalExpertise.find(filter).sort({ order: 1, name: 1 }).skip(skip).limit(opts.limit).lean(),
    TechnicalExpertise.countDocuments(filter),
  ]);
  return { data: data as ITechnicalExpertise[], total, page: opts.page, limit: opts.limit, totalPages: Math.ceil(total / opts.limit) };
}

export async function getAllActiveTEItems(): Promise<ITechnicalExpertise[]> {
  await connectDB();
  return TechnicalExpertise.find({ isActive: true }).sort({ order: 1, name: 1 }).lean() as Promise<ITechnicalExpertise[]>;
}

export async function getTEItemById(id: string): Promise<ITechnicalExpertise | null> {
  await connectDB();
  return TechnicalExpertise.findById(id).lean() as Promise<ITechnicalExpertise | null>;
}

export async function teSlugExists(slug: string, excludeId?: string): Promise<boolean> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q: Record<string, any> = { slug };
  if (excludeId) q._id = { $ne: excludeId };
  return !!(await TechnicalExpertise.findOne(q).select('_id').lean());
}

export async function createTEItem(input: TEMenuInput): Promise<ITechnicalExpertise> {
  await connectDB();
  const name = sanitizeText(input.name);
  let slug = input.slug?.trim() ? input.slug.toLowerCase() : generateSlug(name);
  let suffix = 0; const base = slug;
  while (await teSlugExists(slug)) { suffix++; slug = `${base}-${suffix}`; }
  const last = await TechnicalExpertise.findOne().sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);
  const doc = await TechnicalExpertise.create({ name, slug, order, isActive: input.isActive ?? true });
  return doc.toObject() as ITechnicalExpertise;
}

export async function updateTEItem(id: string, input: Partial<TEMenuInput>): Promise<ITechnicalExpertise | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string, any> = {};
  if (input.name     !== undefined) u.name     = sanitizeText(input.name);
  if (input.order    !== undefined) u.order    = input.order;
  if (input.isActive !== undefined) u.isActive = input.isActive;
  if (input.slug !== undefined) {
    const s = input.slug.trim().toLowerCase();
    if (await teSlugExists(s, id)) throw new Error('Slug already in use');
    u.slug = s;
  }
  return TechnicalExpertise.findByIdAndUpdate(id, { $set: u }, { new: true }).lean() as Promise<ITechnicalExpertise | null>;
}

export async function deleteTEItem(id: string): Promise<boolean> {
  await connectDB();
  return !!(await TechnicalExpertise.findByIdAndDelete(id));
}

export async function reorderTEItems(items: { id: string; order: number }[]): Promise<void> {
  await connectDB();
  await Promise.all(items.map(({ id, order }) => TechnicalExpertise.findByIdAndUpdate(id, { $set: { order } })));
}

// ════════════════════════════════════════════════════════
//  DETAIL PAGES
// ════════════════════════════════════════════════════════

export async function listTEPages(opts: { page: number; limit: number; search?: string; status?: 'active'|'inactive'|'all' }): Promise<PaginatedResult<ITEPage>> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (opts.status === 'active')   filter.isActive = true;
  if (opts.status === 'inactive') filter.isActive = false;
  if (opts.search?.trim()) filter.$or = [{ slug: new RegExp(opts.search.trim(), 'i') }];
  const skip = (opts.page - 1) * opts.limit;
  const [data, total] = await Promise.all([
    TEPage.find(filter).populate('expertiseId', 'name slug').select('-contentBlocks').sort({ createdAt: -1 }).skip(skip).limit(opts.limit).lean(),
    TEPage.countDocuments(filter),
  ]);
  return { data: data as ITEPage[], total, page: opts.page, limit: opts.limit, totalPages: Math.ceil(total / opts.limit) };
}

export async function getTEPageById(id: string): Promise<ITEPage | null> {
  await connectDB();
  return TEPage.findById(id).populate('expertiseId', 'name slug').lean() as Promise<ITEPage | null>;
}

export async function getTEPageBySlug(slug: string): Promise<ITEPage | null> {
  await connectDB();
  return TEPage.findOne({ slug: slug.toLowerCase() }).populate('expertiseId', 'name slug').lean() as Promise<ITEPage | null>;
}

/** Find existing page or create new one — prevents duplicate key on double-click */
export async function findOrCreateTEPage(expertiseId: string, slug: string): Promise<{ page: ITEPage; created: boolean }> {
  await connectDB();
  const existing = await TEPage.findOne({ expertiseId: new mongoose.Types.ObjectId(expertiseId) }).lean();
  if (existing) return { page: existing as ITEPage, created: false };

  // Ensure slug uniqueness
  let finalSlug = slug.toLowerCase();
  if (await TEPage.findOne({ slug: finalSlug }).select('_id').lean())
    finalSlug = `${finalSlug}-${Date.now()}`;

  const doc = await TEPage.create({
    expertiseId: new mongoose.Types.ObjectId(expertiseId),
    slug: finalSlug,
    contentBlocks: [],
    isActive: true,
  });
  return { page: doc.toObject() as ITEPage, created: true };
}

export async function updateTEPage(id: string, input: Partial<TEPageInput>): Promise<ITEPage | null> {
  await connectDB();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string, any> = {};
  if (input.isActive !== undefined)      u.isActive      = input.isActive;
  if (input.slug !== undefined)          u.slug          = input.slug.toLowerCase();
  if (input.contentBlocks !== undefined) u.contentBlocks = input.contentBlocks.map((b, i) => ({ ...b, order: b.order ?? i }));
  return TEPage.findByIdAndUpdate(id, { $set: u }, { new: true }).populate('expertiseId', 'name slug').lean() as Promise<ITEPage | null>;
}

export async function deleteTEPage(id: string): Promise<boolean> {
  await connectDB();
  return !!(await TEPage.findByIdAndDelete(id));
}

/** Build map of expertiseId → pageId for the list table */
export async function buildTEPageMap(): Promise<Record<string, string>> {
  await connectDB();
  const pages = await TEPage.find({}).select('expertiseId').lean();
  const map: Record<string, string> = {};
  for (const p of pages) {
    const eid = String((p as ITEPage).expertiseId);
    map[eid] = String((p as { _id: mongoose.Types.ObjectId })._id);
  }
  return map;
}
