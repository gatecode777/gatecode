import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import JobApplication from '@/models/JobApplication';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await connectDB();
  const { status } = await req.json();
  const valid = ['new', 'reviewed', 'shortlisted', 'rejected'];
  if (!valid.includes(status)) return NextResponse.json<ApiResponse>({ success: false, message: 'Invalid status' }, { status: 422 });
  const updated = await JobApplication.findByIdAndUpdate(id, { $set: { status } }, { new: true }).lean();
  if (!updated) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Updated', data: updated });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await connectDB();
  const ok = await JobApplication.findByIdAndDelete(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Deleted' });
}