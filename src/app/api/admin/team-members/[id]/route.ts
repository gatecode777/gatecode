import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import TeamMember from '@/models/TeamMember';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params; await connectDB();
  const m = await TeamMember.findById(id).lean();
  if (!m) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'OK', data:m });
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params; await connectDB();
  const body = await req.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const u: Record<string,any> = {};
  if (body.name        !== undefined) u.name        = String(body.name).trim();
  if (body.designation !== undefined) u.designation = String(body.designation).trim();
  if (body.image       !== undefined) u.image       = String(body.image).trim();
  if (body.stars       !== undefined) u.stars       = Math.min(5, Math.max(1, Number(body.stars)||5));
  if (body.order       !== undefined) u.order       = Number(body.order);
  if (body.isActive    !== undefined) u.isActive    = Boolean(body.isActive);
  const updated = await TeamMember.findByIdAndUpdate(id, { $set:u }, { new:true }).lean();
  if (!updated) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'Updated', data:updated });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params; await connectDB();
  const ok = await TeamMember.findByIdAndDelete(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'Deleted' });
}
