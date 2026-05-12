import { sanitizeText, generateSlug, type ValidationResult } from './shared';

export interface CategoryInput {
  name: string;
  slug?: string;
  description?: string;
  icon?: string | null;
  order?: number;
  isActive?: boolean;
}

export function validateCategoryInput(
  data: Partial<CategoryInput>,
  isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isUpdate || data.name !== undefined) {
    const name = sanitizeText(data.name ?? '');
    if (!name) errors.name = 'Category name is required';
    else if (name.length > 100) errors.name = 'Name cannot exceed 100 characters';
  }

  if (data.slug !== undefined) {
    const slug = data.slug.trim().toLowerCase();
    if (!slug) errors.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(slug))
      errors.slug = 'Slug may only contain lowercase letters, numbers, and hyphens';
    else if (slug.length > 100) errors.slug = 'Slug cannot exceed 100 characters';
  }

  if (data.description !== undefined) {
    const desc = sanitizeText(data.description);
    if (desc.length > 500) errors.description = 'Description cannot exceed 500 characters';
  }

  if (data.order !== undefined) {
    if (!Number.isInteger(data.order) || data.order < 0)
      errors.order = 'Order must be a non-negative integer';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export { generateSlug };
