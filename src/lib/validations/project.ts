import { sanitizeText, isValidUrl, generateSlug, type ValidationResult } from './shared';

export interface ButtonInput {
  label: string;
  url: string;
  openInNewTab?: boolean;
  isActive?: boolean;
  order?: number;
}

export interface ProjectInput {
  categoryId?: string | null;
  title: string;
  slug?: string;
  description?: string;
  thumbnail: string;
  technologies?: string[];
  buttons?: ButtonInput[];
  isFeatured?: boolean;
  isActive?: boolean;
  order?: number;
}

function validateButton(btn: Partial<ButtonInput>, index: number): Record<string, string> {
  const errs: Record<string, string> = {};

  const label = sanitizeText(btn.label ?? '');
  if (!label) errs[`buttons[${index}].label`] = 'Button label is required';
  else if (label.length > 60) errs[`buttons[${index}].label`] = 'Label cannot exceed 60 characters';

  const url = btn.url?.trim() ?? '';
  if (!url) {
    errs[`buttons[${index}].url`] = 'Button URL is required';
  } else if (!isValidUrl(url)) {
    errs[`buttons[${index}].url`] = 'Button URL must be a valid absolute URL (https://...)';
  }

  return errs;
}

export function validateProjectInput(
  data: Partial<ProjectInput>,
  isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isUpdate || data.title !== undefined) {
    const title = sanitizeText(data.title ?? '');
    if (!title) errors.title = 'Project title is required';
    else if (title.length > 200) errors.title = 'Title cannot exceed 200 characters';
  }

  if (data.slug !== undefined) {
    const slug = data.slug.trim().toLowerCase();
    if (!slug) errors.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(slug))
      errors.slug = 'Slug may only contain lowercase letters, numbers, and hyphens';
  }

  if (data.description !== undefined) {
    const desc = sanitizeText(data.description);
    if (desc.length > 2000) errors.description = 'Description cannot exceed 2000 characters';
  }

  if (!isUpdate || data.thumbnail !== undefined) {
    if (!data.thumbnail?.trim()) errors.thumbnail = 'Thumbnail image is required';
  }

  if (data.technologies !== undefined) {
    if (!Array.isArray(data.technologies))
      errors.technologies = 'Technologies must be an array';
    else if (data.technologies.length > 30)
      errors.technologies = 'Cannot list more than 30 technologies';
    else {
      const invalid = data.technologies.some(
        (t) => typeof t !== 'string' || t.trim().length === 0
      );
      if (invalid) errors.technologies = 'Each technology must be a non-empty string';
    }
  }

  if (data.buttons !== undefined) {
    if (!Array.isArray(data.buttons)) {
      errors.buttons = 'Buttons must be an array';
    } else if (data.buttons.length > 10) {
      errors.buttons = 'Cannot have more than 10 buttons';
    } else {
      data.buttons.forEach((btn, i) => {
        Object.assign(errors, validateButton(btn, i));
      });
    }
  }

  if (data.order !== undefined) {
    if (!Number.isInteger(data.order) || data.order < 0)
      errors.order = 'Order must be a non-negative integer';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export { generateSlug };
