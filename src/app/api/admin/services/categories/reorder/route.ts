import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { reorderServiceCategories } from '@/lib/services/servicesService';
import type { ApiResponse } from '@/types';
export async function POST(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  if (!t || !verifyToken(t)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { items } = await req.json() as { items: { id:string; order:number }[] };
  if (!Array.isArray(items)) return NextResponse.json<ApiResponse>({ success:false, message:'items must be array' }, { status:400 });
  await reorderServiceCategories(items);
  return NextResponse.json({ success:true, message:'Reordered' });
}
