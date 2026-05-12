import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateCategoryInput } from '@/lib/validations/category';
import { listCategories, createCategory } from '@/lib/services/categoryService';
import { clamp } from '@/lib/validations/shared';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const sp = req.nextUrl.searchParams;
  const page   = clamp(Number(sp.get('page')  ?? 1), 1, 9999);
  const limit  = clamp(Number(sp.get('limit') ?? 20), 1, 100);
  const search = sp.get('search') ?? undefined;
  const status = (sp.get('status') ?? 'all') as 'active' | 'inactive' | 'all';

  try {
    const result = await listCategories({ page, limit, search, status });
    return NextResponse.json({ success: true, message: 'OK', ...result });
  } catch (err) {
    console.error('[API categories GET]', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const { valid, errors } = validateCategoryInput(body);
    if (!valid) return NextResponse.json<ApiResponse>({ success: false, message: 'Validation failed', error: JSON.stringify(errors) }, { status: 422 });

    const cat = await createCategory(body);
    return NextResponse.json({ success: true, message: 'Category created', data: cat }, { status: 201 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Internal server error';
    const status = msg.includes('Slug') ? 409 : 500;
    return NextResponse.json<ApiResponse>({ success: false, message: msg }, { status });
  }
}
