import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_SIZE } from '@/lib/validations/shared';

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'portfolio');
const PUBLIC_PREFIX = '/uploads/portfolio';

/** Generate a unique filename */
function uniqueFileName(originalName: string): string {
  const ext = path.extname(originalName).toLowerCase() || '.jpg';
  const base = path.basename(originalName, ext)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .slice(0, 40);
  return `${Date.now()}-${base}${ext}`;
}

/**
 * Save an uploaded File (from FormData) to disk.
 * Returns a public URL path like /uploads/portfolio/filename.jpg
 */
export async function saveUploadedFile(file: File): Promise<UploadResult> {
  // Validate type
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return {
      success: false,
      error: `Invalid file type: ${file.type}. Allowed: JPEG, PNG, WebP, GIF`,
    };
  }

  // Validate size
  if (file.size > MAX_IMAGE_SIZE) {
    return {
      success: false,
      error: `File size ${(file.size / 1024 / 1024).toFixed(1)} MB exceeds the 5 MB limit`,
    };
  }

  try {
    await mkdir(UPLOAD_DIR, { recursive: true });

    const filename = uniqueFileName(file.name);
    const dest = path.join(UPLOAD_DIR, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(dest, buffer);

    return { success: true, url: `${PUBLIC_PREFIX}/${filename}` };
  } catch (err) {
    console.error('[upload] write error:', err);
    return { success: false, error: 'Failed to save file. Please try again.' };
  }
}
