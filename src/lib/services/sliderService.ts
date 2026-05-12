import connectDB from '@/lib/db';
import PortfolioSlider, { IPortfolioSlider } from '@/models/PortfolioSlider';
import { sanitizeText } from '@/lib/validations/shared';
import type { SliderInput } from '@/lib/validations/slider';

export interface SliderListOptions {
  page: number;
  limit: number;
  search?: string;
  status?: 'active' | 'inactive' | 'all';
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export async function listSliders(
  opts: SliderListOptions
): Promise<PaginatedResult<IPortfolioSlider>> {
  await connectDB();

  const { page, limit, search, status } = opts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};

  if (status === 'active') filter.isActive = true;
  else if (status === 'inactive') filter.isActive = false;

  if (search?.trim()) {
    const regex = new RegExp(search.trim(), 'i');
    filter.$or = [{ title: regex }, { subtitle: regex }];
  }

  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    PortfolioSlider.find(filter).sort({ order: 1, createdAt: 1 }).skip(skip).limit(limit).lean(),
    PortfolioSlider.countDocuments(filter),
  ]);

  return { data: data as IPortfolioSlider[], total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getSliderById(id: string): Promise<IPortfolioSlider | null> {
  await connectDB();
  return PortfolioSlider.findById(id).lean() as Promise<IPortfolioSlider | null>;
}

export async function createSlider(input: SliderInput): Promise<IPortfolioSlider> {
  await connectDB();

  // Determine next order value
  const last = await PortfolioSlider.findOne().sort({ order: -1 }).select('order').lean();
  const order = input.order ?? ((last?.order ?? -1) + 1);

  const slider = await PortfolioSlider.create({
    title: sanitizeText(input.title),
    subtitle: sanitizeText(input.subtitle ?? ''),
    description: sanitizeText(input.description ?? ''),
    desktopImage: input.desktopImage,
    mobileImage: input.mobileImage ?? null,
    altText: sanitizeText(input.altText ?? ''),
    order,
    isActive: input.isActive ?? true,
  });

  return slider.toObject() as IPortfolioSlider;
}

export async function updateSlider(
  id: string,
  input: Partial<SliderInput>
): Promise<IPortfolioSlider | null> {
  await connectDB();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updates: Record<string, any> = {};
  if (input.title !== undefined) updates.title = sanitizeText(input.title);
  if (input.subtitle !== undefined) updates.subtitle = sanitizeText(input.subtitle);
  if (input.description !== undefined) updates.description = sanitizeText(input.description);
  if (input.desktopImage !== undefined) updates.desktopImage = input.desktopImage;
  if (input.mobileImage !== undefined) updates.mobileImage = input.mobileImage;
  if (input.altText !== undefined) updates.altText = sanitizeText(input.altText);
  if (input.order !== undefined) updates.order = input.order;
  if (input.isActive !== undefined) updates.isActive = input.isActive;

  return PortfolioSlider.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true }).lean() as Promise<IPortfolioSlider | null>;
}

export async function deleteSlider(id: string): Promise<boolean> {
  await connectDB();
  const res = await PortfolioSlider.findByIdAndDelete(id);
  return !!res;
}

/** Bulk reorder: accepts array of { id, order } */
export async function reorderSliders(
  items: Array<{ id: string; order: number }>
): Promise<void> {
  await connectDB();
  await Promise.all(
    items.map(({ id, order }) =>
      PortfolioSlider.findByIdAndUpdate(id, { $set: { order } })
    )
  );
}
