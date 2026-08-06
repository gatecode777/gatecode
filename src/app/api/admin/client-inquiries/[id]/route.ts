import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import ClientInquiry from '@/models/ClientInquiry';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  return t ? verifyToken(t) : null;
}

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await connectDB();
  const { status } = await req.json();
  const updated = await ClientInquiry.findByIdAndUpdate(id, { $set: { status } }, { new: true }).lean();
  if (!updated) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Updated', data: updated });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await connectDB();
  const ok = await ClientInquiry.findByIdAndDelete(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Deleted' });
}
