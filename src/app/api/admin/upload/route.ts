import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  return t ? verifyToken(t) : null;
}

// ── Allowed MIME types ──────────────────────────────────────────────────────
const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
];

const ALLOWED_DOC_TYPES = [
  'application/pdf',
  'application/msword',                                                          // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',    // .docx
  'application/vnd.ms-excel',                                                   // .xls
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',          // .xlsx
  'application/vnd.ms-powerpoint',                                              // .ppt
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',  // .pptx
  'text/plain',
  'text/csv',
];

const ALLOWED_TYPES = [...ALLOWED_IMAGE_TYPES, ...ALLOWED_DOC_TYPES];

// Max size: 10MB for images, 20MB for documents
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_DOC_SIZE   = 20 * 1024 * 1024;

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function POST(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json<ApiResponse>({ success: false, message: 'No file provided' }, { status: 400 });
    }

    const mimeType = file.type || 'application/octet-stream';

    // Validate file type
    if (!ALLOWED_TYPES.includes(mimeType)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: `Invalid file type: ${mimeType}. Allowed: images (JPEG, PNG, WebP, GIF, SVG), PDF, Word, Excel, PowerPoint, CSV, TXT` },
        { status: 400 }
      );
    }

    // Validate file size
    const isImage = ALLOWED_IMAGE_TYPES.includes(mimeType);
    const maxSize = isImage ? MAX_IMAGE_SIZE : MAX_DOC_SIZE;
    if (file.size > maxSize) {
      const limit = isImage ? '10MB' : '20MB';
      return NextResponse.json<ApiResponse>(
        { success: false, message: `File too large. Maximum size: ${limit}` },
        { status: 400 }
      );
    }

    // Determine upload subfolder
    let subfolder = 'general';
    const category = formData.get('category') as string | null;
    if (category) {
      subfolder = sanitizeFilename(category);
    } else if (isImage) {
      subfolder = 'images';
    } else {
      subfolder = 'documents';
    }

    // Build path
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', subfolder);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const ext         = path.extname(file.name) || '';
    const base        = sanitizeFilename(path.basename(file.name, ext)) || 'file';
    const timestamp   = Date.now();
    const random      = Math.random().toString(36).slice(2, 8);
    const filename    = `${timestamp}-${random}-${base}${ext}`;
    const filepath    = path.join(uploadDir, filename);

    // Write file
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);

    const url = `/uploads/${subfolder}/${filename}`;

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        url,
        filename,
        originalName: file.name,
        mimeType,
        size: file.size,
        isImage,
      },
    });
  } catch (e) {
    console.error('Upload error:', e);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Upload failed. Please try again.' }, { status: 500 });
  }
}