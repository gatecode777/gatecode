import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateTEPage } from '@/lib/validations/technicalExpertise';
import { getTEPageById, getTEPageBySlug, updateTEPage, deleteTEPage } from '@/lib/services/technicalExpertiseService';
import type { ApiResponse } from '@/types';
function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
type Ctx = { params: Promise<{ id: string }> };
export async function GET(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  const page = /^[a-f\d]{24}$/i.test(id) ? await getTEPageById(id) : await getTEPageBySlug(id);
  if (!page) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'OK', data:page });
}
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { valid, errors } = validateTEPage(body, true);
    if (!valid) return NextResponse.json<ApiResponse>({ success:false, message:'Validation failed', error:JSON.stringify(errors) }, { status:422 });
    const updated = await updateTEPage(id, body);
    if (!updated) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
    return NextResponse.json({ success:true, message:'Updated', data:updated });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  const ok = await deleteTEPage(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'Deleted' });
}
