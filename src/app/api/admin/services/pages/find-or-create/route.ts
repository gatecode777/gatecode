import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { findOrCreateSubServicePage, findOrCreateCategoryPage } from '@/lib/services/servicesService';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

/**
 * POST /api/admin/services/pages/find-or-create
 * Body: { type: 'category', categoryId, slug }
 *   OR  { type: 'subservice', subServiceId, categoryId, slug }
 *
 * Returns existing page if it exists, or creates and returns a new one.
 * Never throws a duplicate key error.
 */
export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    const body = await req.json() as {
      type: 'category' | 'subservice';
      categoryId?: string;
      subServiceId?: string;
      slug?: string;
    };

    if (body.type === 'category') {
      if (!body.categoryId) return NextResponse.json<ApiResponse>({ success:false, message:'categoryId required' }, { status:400 });
      const { page } = await findOrCreateCategoryPage(body.categoryId, body.slug ?? 'category');
      return NextResponse.json({ success:true, message:'OK', data: page });
    }

    if (body.type === 'subservice') {
      if (!body.subServiceId || !body.categoryId || !body.slug)
        return NextResponse.json<ApiResponse>({ success:false, message:'subServiceId, categoryId, slug required' }, { status:400 });
      const { page } = await findOrCreateSubServicePage({
        pageType: 'subservice',
        subServiceId: body.subServiceId,
        categoryId: body.categoryId,
        slug: body.slug,
        contentBlocks: [],
        isActive: true,
      });
      return NextResponse.json({ success:true, message:'OK', data: page });
    }

    return NextResponse.json<ApiResponse>({ success:false, message:'type must be category or subservice' }, { status:400 });
  } catch(e) {
    console.error('[find-or-create]', e);
    return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 });
  }
}
