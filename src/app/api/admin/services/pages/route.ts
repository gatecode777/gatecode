import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { listServicePages, createServicePage } from '@/lib/services/servicesService';
import { clamp } from '@/lib/validations/shared';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const sp = req.nextUrl.searchParams;
  try {
    const pageTypeParam = sp.get('pageType');
    const result = await listServicePages({
      page: clamp(Number(sp.get('page')??1),1,9999), limit: clamp(Number(sp.get('limit')??12),1,1000),
      search: sp.get('search')??undefined, categoryId: sp.get('categoryId')??undefined,
      status: (sp.get('status')??'all') as 'active'|'inactive'|'all',
      pageType: (pageTypeParam === 'category' || pageTypeParam === 'subservice') ? pageTypeParam : undefined,
    });
    return NextResponse.json({ success:true, message:'OK', ...result });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    const body = await req.json();

    // Basic validation
    if (!body.categoryId?.trim())
      return NextResponse.json<ApiResponse>({ success:false, message:'categoryId is required' }, { status:422 });

    if (!body.slug?.trim())
      return NextResponse.json<ApiResponse>({ success:false, message:'slug is required' }, { status:422 });

    const page = await createServicePage({
      pageType:     body.pageType ?? 'subservice',
      subServiceId: body.subServiceId ?? null,
      categoryId:   body.categoryId,
      slug:         body.slug,
      contentBlocks: body.contentBlocks ?? [],
      isActive:     body.isActive ?? true,
    });
    return NextResponse.json({ success:true, message:'Page created', data:page }, { status:201 });
  } catch(e) {
    const msg = e instanceof Error ? e.message : 'Server error';
    const code = (msg.includes('E11000') || msg.includes('duplicate')) ? 409 : 500;
    return NextResponse.json<ApiResponse>({ success:false, message: code === 409 ? 'A page already exists for this item' : msg }, { status:code });
  }
}
