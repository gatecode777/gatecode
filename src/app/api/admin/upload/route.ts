import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { saveUploadedFile } from '@/lib/upload';
import type { ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  // Auth check
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token)) {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json<ApiResponse>({ success: false, message: 'No file provided' }, { status: 400 });
    }

    const result = await saveUploadedFile(file);

    if (!result.success) {
      return NextResponse.json<ApiResponse>({ success: false, message: result.error ?? 'Upload failed' }, { status: 400 });
    }

    return NextResponse.json<ApiResponse<{ url: string }>>(
      { success: true, message: 'File uploaded', data: { url: result.url! } },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API] upload error:', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
