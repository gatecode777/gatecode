import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import ContactRequest from '@/models/ContactRequest';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  await connectDB();
  const sp = req.nextUrl.searchParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  const status = sp.get('status');
  if (status && status !== 'all') filter.status = status;
  const requests = await ContactRequest.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ success: true, data: requests, total: requests.length });
}