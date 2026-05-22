import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import QuoteRequest from '@/models/QuoteRequest';

type Ctx = { params: Promise<{ id: string }> };

function auth(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  return t ? verifyToken(t) : null;
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    await connectDB();
    const { status } = await req.json();
    const updated = await QuoteRequest.findByIdAndUpdate(id, { $set: { status } }, { new: true }).lean();
    if (!updated) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Updated', data: updated });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    await connectDB();
    const ok = await QuoteRequest.findByIdAndDelete(id);
    if (!ok) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}
