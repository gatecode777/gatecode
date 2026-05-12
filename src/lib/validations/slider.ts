import { sanitizeText, type ValidationResult } from './shared';

export interface SliderInput {
  title: string;
  subtitle?: string;
  description?: string;
  desktopImage: string;
  mobileImage?: string | null;
  altText?: string;
  order?: number;
  isActive?: boolean;
}

export function validateSliderInput(
  data: Partial<SliderInput>,
  isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};

  // title
  if (!isUpdate || data.title !== undefined) {
    const title = sanitizeText(data.title ?? '');
    if (!title) errors.title = 'Title is required';
    else if (title.length > 120) errors.title = 'Title cannot exceed 120 characters';
  }

  // subtitle
  if (data.subtitle !== undefined) {
    const sub = sanitizeText(data.subtitle);
    if (sub.length > 200) errors.subtitle = 'Subtitle cannot exceed 200 characters';
  }

  // description
  if (data.description !== undefined) {
    const desc = sanitizeText(data.description);
    if (desc.length > 500) errors.description = 'Description cannot exceed 500 characters';
  }

  // desktopImage
  if (!isUpdate || data.desktopImage !== undefined) {
    if (!data.desktopImage?.trim()) errors.desktopImage = 'Desktop image is required';
  }

  // order
  if (data.order !== undefined) {
    if (!Number.isInteger(data.order) || data.order < 0)
      errors.order = 'Order must be a non-negative integer';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
