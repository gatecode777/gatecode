import { sanitizeText, isValidUrl, generateSlug, type ValidationResult } from './shared';
import type { ServiceBlockType } from '@/models/ServicePage';

// ── Category ───────────────────────────────────────────────────────────────
export interface ServiceCategoryInput {
  name: string; slug?: string; order?: number; isActive?: boolean;
}

export function validateServiceCategory(
  data: Partial<ServiceCategoryInput>, isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};
  if (!isUpdate || data.name !== undefined) {
    const n = sanitizeText(data.name ?? '');
    if (!n) errors.name = 'Name is required';
    else if (n.length > 120) errors.name = 'Name max 120 chars';
  }
  if (data.slug !== undefined) {
    const s = data.slug.trim().toLowerCase();
    if (!s) errors.slug = 'Slug required';
    else if (!/^[a-z0-9-]+$/.test(s)) errors.slug = 'Slug: lowercase, numbers, hyphens only';
  }
  if (data.order !== undefined && (!Number.isInteger(data.order) || data.order < 0))
    errors.order = 'Order must be a non-negative integer';
  return { valid: Object.keys(errors).length === 0, errors };
}

// ── Sub Service ────────────────────────────────────────────────────────────
export interface SubServiceInput {
  categoryId: string; name: string; slug?: string; order?: number; isActive?: boolean;
}

export function validateSubService(
  data: Partial<SubServiceInput>, isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};
  if (!isUpdate || data.categoryId !== undefined) {
    if (!data.categoryId?.trim()) errors.categoryId = 'Category is required';
  }
  if (!isUpdate || data.name !== undefined) {
    const n = sanitizeText(data.name ?? '');
    if (!n) errors.name = 'Name is required';
    else if (n.length > 200) errors.name = 'Name max 200 chars';
  }
  if (data.slug !== undefined) {
    const s = data.slug.trim().toLowerCase();
    if (!s) errors.slug = 'Slug required';
    else if (!/^[a-z0-9-]+$/.test(s)) errors.slug = 'Slug: lowercase, numbers, hyphens only';
  }
  if (data.order !== undefined && (!Number.isInteger(data.order) || data.order < 0))
    errors.order = 'Order must be a non-negative integer';
  return { valid: Object.keys(errors).length === 0, errors };
}

// ── Block validation ───────────────────────────────────────────────────────
function validateBlock(b: { type: ServiceBlockType; data: Record<string, unknown> }, i: number): Record<string, string> {
  const e: Record<string, string> = {};
  const p = `blocks[${i}]`;
  switch (b.type) {
    case 'hero': {
      if (!String(b.data.title ?? '').trim()) e[`${p}.title`] = 'Hero title required';
      if (!String(b.data.bannerImage ?? '').trim()) e[`${p}.bannerImage`] = 'Hero banner image required';
      break;
    }
    case 'intro': {
      if (!String(b.data.body ?? '').trim()) e[`${p}.body`] = 'Intro text required';
      break;
    }
    case 'buttons': {
      const btns = (b.data.buttons as Array<{ label?: string; url?: string }>) ?? [];
      btns.forEach((btn, j) => {
        if (!btn.label?.trim()) e[`${p}.buttons[${j}].label`] = 'Button label required';
        if (!btn.url?.trim())   e[`${p}.buttons[${j}].url`]   = 'Button URL required';
        else if (!isValidUrl(btn.url)) e[`${p}.buttons[${j}].url`] = 'Must be a valid URL';
      });
      break;
    }
    case 'imageGrid': {
      if (!String(b.data.url ?? '').trim()) e[`${p}.url`] = 'Image URL required';
      break;
    }
  }
  return e;
}

// ── Service Page ───────────────────────────────────────────────────────────
export interface ServicePageInput {
  pageType?: string; subServiceId?: string | null; categoryId: string; slug: string;
  contentBlocks?: Array<{ type: ServiceBlockType; order: number; isVisible: boolean; data: Record<string, unknown> }>;
  isActive?: boolean;
}

export function validateServicePage(
  data: Partial<ServicePageInput>, isUpdate = false
): ValidationResult {
  const errors: Record<string, string> = {};
  if (!isUpdate) {
    if (!data.categoryId?.trim()) errors.categoryId = 'Category is required';
    if (!data.slug?.trim())       errors.slug       = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(data.slug)) errors.slug = 'Slug: lowercase, numbers, hyphens only';
  }
  if (data.contentBlocks !== undefined) {
    if (!Array.isArray(data.contentBlocks)) errors.contentBlocks = 'contentBlocks must be an array';
    else if (data.contentBlocks.length > 100) errors.contentBlocks = 'Max 100 blocks per page';
    else data.contentBlocks.forEach((b, i) => Object.assign(errors, validateBlock(b, i)));
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export { generateSlug };
