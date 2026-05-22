import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import CompanyContactMessage from '@/models/CompanyContactMessage';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const { status } = await req.json();
  if (!['new', 'read', 'replied'].includes(status)) {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Invalid status' }, { status: 422 });
  }

  await connectDB();
  const updated = await CompanyContactMessage.findByIdAndUpdate(id, { $set: { status } }, { new: true }).lean();
  if (!updated) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Updated', data: updated });
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  await connectDB();
  const deleted = await CompanyContactMessage.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json<ApiResponse>({ success: false, message: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true, message: 'Deleted' });
}
