import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import TeamMember from '@/models/TeamMember';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  await connectDB();
  const sp = req.nextUrl.searchParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string,any> = {};
  const status = sp.get('status') ?? 'all';
  if (status === 'active')   filter.isActive = true;
  if (status === 'inactive') filter.isActive = false;
  const q = sp.get('search')?.trim();
  if (q) filter.$or = [{ name: new RegExp(q,'i') }, { designation: new RegExp(q,'i') }];
  const members = await TeamMember.find(filter).sort({ order:1, createdAt:1 }).lean();
  return NextResponse.json({ success:true, message:'OK', data:members, total:members.length });
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    await connectDB();
    const body = await req.json();
    const { name, designation, image, stars, isActive } = body;
    if (!name?.trim())        return NextResponse.json<ApiResponse>({ success:false, message:'Name is required' }, { status:422 });
    if (!designation?.trim()) return NextResponse.json<ApiResponse>({ success:false, message:'Designation is required' }, { status:422 });
    if (!image?.trim())       return NextResponse.json<ApiResponse>({ success:false, message:'Image is required' }, { status:422 });
    const last = await TeamMember.findOne().sort({ order:-1 }).select('order').lean();
    const order = (last?.order ?? -1) + 1;
    const member = await TeamMember.create({ name:name.trim(), designation:designation.trim(), image:image.trim(), stars: Math.min(5,Math.max(1,Number(stars)||5)), order, isActive: isActive ?? true });
    return NextResponse.json({ success:true, message:'Member created', data:member }, { status:201 });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}
