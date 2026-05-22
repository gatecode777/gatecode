import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import TeamMember from '@/models/TeamMember';
import type { ApiResponse } from '@/types';

export async function POST(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  if (!t || !verifyToken(t)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { items } = await req.json() as { items: { id:string; order:number }[] };
  if (!Array.isArray(items)) return NextResponse.json<ApiResponse>({ success:false, message:'items must be array' }, { status:400 });
  await connectDB();
  await Promise.all(items.map(({ id, order }) => TeamMember.findByIdAndUpdate(id, { $set:{ order } })));
  return NextResponse.json({ success:true, message:'Reordered' });
}
