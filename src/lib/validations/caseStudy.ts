import { sanitizeText, isValidUrl, generateSlug, type ValidationResult } from './shared';
import type { BlockType, BlockData } from '@/models/CaseStudy';

// ── Block validation ───────────────────────────────────────────────────────
function validateBlock(block: { type: BlockType; data: BlockData }, i: number): Record<string,string> {
  const e: Record<string,string> = {};
  const pfx = `blocks[${i}]`;

  switch (block.type) {
    case 'hero': {
      const d = block.data as { title?:string; bannerImage?:string };
      if (!d.title?.trim()) e[`${pfx}.title`] = 'Hero title is required';
      if (!d.bannerImage?.trim()) e[`${pfx}.bannerImage`] = 'Hero banner image is required';
      break;
    }
    case 'text': {
      const d = block.data as { body?:string };
      if (!d.body?.trim()) e[`${pfx}.body`] = 'Text block body is required';
      break;
    }
    case 'image': {
      const d = block.data as { url?:string };
      if (!d.url?.trim()) e[`${pfx}.url`] = 'Image URL is required';
      break;
    }
    case 'buttons': {
      const d = block.data as { buttons?: Array<{label?:string;url?:string}> };
      (d.buttons ?? []).forEach((btn, j) => {
        if (!btn.label?.trim()) e[`${pfx}.buttons[${j}].label`] = 'Button label required';
        if (!btn.url?.trim())   e[`${pfx}.buttons[${j}].url`]   = 'Button URL required';
        else if (!isValidUrl(btn.url)) e[`${pfx}.buttons[${j}].url`] = 'Must be a valid URL (https://…)';
      });
      break;
    }
  }
  return e;
}

// ── Main validator ─────────────────────────────────────────────────────────
export interface CaseStudyInput {
  title?: string; slug?: string; shortDesc?: string; description?: string; thumbnail?: string;
  isFeatured?: boolean; isActive?: boolean; order?: number;
  contentBlocks?: Array<{ type: BlockType; order: number; isVisible: boolean; data: BlockData }>;
}

export function validateCaseStudyInput(data: Partial<CaseStudyInput>, isUpdate = false): ValidationResult {
  const errors: Record<string,string> = {};

  if (!isUpdate || data.title !== undefined) {
    const t = sanitizeText(data.title ?? '');
    if (!t) errors.title = 'Title is required';
    else if (t.length > 200) errors.title = 'Title max 200 chars';
  }
  if (!isUpdate || data.thumbnail !== undefined) {
    if (!data.thumbnail?.trim()) errors.thumbnail = 'Thumbnail is required';
  }
  if (data.slug !== undefined) {
    const s = data.slug.trim().toLowerCase();
    if (!s) errors.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(s)) errors.slug = 'Slug: lowercase, numbers, hyphens only';
  }
  if (data.shortDesc !== undefined && sanitizeText(data.shortDesc).length > 500)
    errors.shortDesc = 'Short description max 500 chars';
  if (data.description !== undefined && sanitizeText(data.description).length > 2000)
    errors.description = 'Description max 2000 chars';

  if (data.contentBlocks !== undefined) {
    if (!Array.isArray(data.contentBlocks)) {
      errors.contentBlocks = 'contentBlocks must be an array';
    } else if (data.contentBlocks.length > 100) {
      errors.contentBlocks = 'Max 100 content blocks per case study';
    } else {
      data.contentBlocks.forEach((block, i) => {
        Object.assign(errors, validateBlock(block, i));
      });
    }
  }

  if (data.order !== undefined && (!Number.isInteger(data.order) || data.order < 0))
    errors.order = 'Order must be a non-negative integer';

  return { valid: Object.keys(errors).length === 0, errors };
}

export { generateSlug };
