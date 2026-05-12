import { sanitizeText, isValidUrl, generateSlug, type ValidationResult } from './shared';
import type { TEBlockType } from '@/models/TechnicalExpertise';

// ── Menu item ──────────────────────────────────────────────────────────────
export interface TEMenuInput {
  name: string;
  slug?: string;
  order?: number;
  isActive?: boolean;
}

export function validateTEMenu(data: Partial<TEMenuInput>, isUpdate = false): ValidationResult {
  const errors: Record<string, string> = {};
  if (!isUpdate || data.name !== undefined) {
    const n = sanitizeText(data.name ?? '');
    if (!n) errors.name = 'Name is required';
    else if (n.length > 150) errors.name = 'Name max 150 chars';
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
function validateBlock(b: { type: TEBlockType; data: Record<string, unknown> }, i: number): Record<string, string> {
  const e: Record<string, string> = {};
  const p = `blocks[${i}]`;
  if (b.type === 'hero') {
    if (!String(b.data.title ?? '').trim())       e[`${p}.title`]       = 'Hero title required';
    if (!String(b.data.bannerImage ?? '').trim()) e[`${p}.bannerImage`] = 'Hero banner required';
  }
  if (b.type === 'buttons') {
    const btns = (b.data.buttons as Array<{ label?: string; url?: string }>) ?? [];
    btns.forEach((btn, j) => {
      if (!btn.label?.trim()) e[`${p}.buttons[${j}].label`] = 'Label required';
      if (!btn.url?.trim())   e[`${p}.buttons[${j}].url`]   = 'URL required';
      else if (!isValidUrl(btn.url)) e[`${p}.buttons[${j}].url`] = 'Must be a valid URL';
    });
  }
  return e;
}

// ── Page input ─────────────────────────────────────────────────────────────
export interface TEPageInput {
  expertiseId: string;
  slug: string;
  contentBlocks?: Array<{ type: TEBlockType; order: number; isVisible: boolean; data: Record<string, unknown> }>;
  isActive?: boolean;
}

export function validateTEPage(data: Partial<TEPageInput>, isUpdate = false): ValidationResult {
  const errors: Record<string, string> = {};
  if (!isUpdate) {
    if (!data.expertiseId?.trim()) errors.expertiseId = 'expertiseId required';
    if (!data.slug?.trim())        errors.slug        = 'Slug required';
    else if (!/^[a-z0-9-]+$/.test(data.slug)) errors.slug = 'Slug: lowercase, numbers, hyphens only';
  }
  if (data.contentBlocks !== undefined) {
    if (!Array.isArray(data.contentBlocks)) errors.contentBlocks = 'Must be array';
    else if (data.contentBlocks.length > 100) errors.contentBlocks = 'Max 100 blocks';
    else data.contentBlocks.forEach((b, i) => Object.assign(errors, validateBlock(b, i)));
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export { generateSlug };
