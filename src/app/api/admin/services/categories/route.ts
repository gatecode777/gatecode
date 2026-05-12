import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateServiceCategory } from '@/lib/validations/services';
import { listServiceCategories, createServiceCategory } from '@/lib/services/servicesService';
import { clamp } from '@/lib/validations/shared';
import type { ApiResponse } from '@/types';
function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const sp = req.nextUrl.searchParams;
  try {
    const result = await listServiceCategories({
      page: clamp(Number(sp.get('page')??1),1,9999), limit: clamp(Number(sp.get('limit')??20),1,100),
      search: sp.get('search')??undefined, status: (sp.get('status')??'all') as 'active'|'inactive'|'all',
    });
    return NextResponse.json({ success:true, message:'OK', ...result });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}
export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    const body = await req.json();
    const { valid, errors } = validateServiceCategory(body);
    if (!valid) return NextResponse.json<ApiResponse>({ success:false, message:'Validation failed', error:JSON.stringify(errors) }, { status:422 });
    const cat = await createServiceCategory(body);
    return NextResponse.json({ success:true, message:'Category created', data:cat }, { status:201 });
  } catch(e) {
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json<ApiResponse>({ success:false, message:msg }, { status: msg.includes('Slug')?409:500 });
  }
}
