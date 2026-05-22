import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import CompanyContactMessage from '@/models/CompanyContactMessage';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const sp = req.nextUrl.searchParams;
  const status = sp.get('status');
  const search = sp.get('search')?.trim();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};

  if (status && status !== 'all') filter.status = status;
  if (search) {
    const rx = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    filter.$or = [
      { firstName: rx },
      { lastName: rx },
      { email: rx },
      { phone: rx },
      { subject: rx },
    ];
  }

  const messages = await CompanyContactMessage.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ success: true, data: messages, total: messages.length });
}
