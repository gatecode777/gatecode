import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateTEMenu } from '@/lib/validations/technicalExpertise';
import { getTEItemById, updateTEItem, deleteTEItem } from '@/lib/services/technicalExpertiseService';
import type { ApiResponse } from '@/types';
function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
type Ctx = { params: Promise<{ id: string }> };
export async function GET(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  const item = await getTEItemById(id);
  if (!item) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'OK', data:item });
}
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { valid, errors } = validateTEMenu(body, true);
    if (!valid) return NextResponse.json<ApiResponse>({ success:false, message:'Validation failed', error:JSON.stringify(errors) }, { status:422 });
    const updated = await updateTEItem(id, body);
    if (!updated) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
    return NextResponse.json({ success:true, message:'Updated', data:updated });
  } catch(e) { const msg=e instanceof Error?e.message:'Server error'; return NextResponse.json<ApiResponse>({ success:false, message:msg }, { status:msg.includes('Slug')?409:500 }); }
}
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params;
  const ok = await deleteTEItem(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'Deleted' });
}
