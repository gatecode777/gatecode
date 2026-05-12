import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateCategoryInput } from '@/lib/validations/category';
import { getCategoryById, updateCategory, deleteCategory } from '@/lib/services/categoryService';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const cat = await getCategoryById(id);
    if (!cat) return NextResponse.json<ApiResponse>({ success: false, message: 'Category not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'OK', data: cat });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { valid, errors } = validateCategoryInput(body, true);
    if (!valid) return NextResponse.json<ApiResponse>({ success: false, message: 'Validation failed', error: JSON.stringify(errors) }, { status: 422 });

    const updated = await updateCategory(id, body);
    if (!updated) return NextResponse.json<ApiResponse>({ success: false, message: 'Category not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Category updated', data: updated });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Internal server error';
    const status = msg.includes('Slug') ? 409 : 500;
    return NextResponse.json<ApiResponse>({ success: false, message: msg }, { status });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const ok = await deleteCategory(id);
    if (!ok) return NextResponse.json<ApiResponse>({ success: false, message: 'Category not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Category deleted' });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
