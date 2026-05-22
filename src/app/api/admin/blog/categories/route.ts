import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import BlogCategory from '@/models/BlogCategory';
import BlogPost from '@/models/BlogPost';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  await connectDB();
  const cats = await BlogCategory.find().sort({ order:1, name:1 }).lean();
  // Get post counts
  const counts = await BlogPost.aggregate([{ $group: { _id:'$categoryId', count:{ $sum:1 } } }]);
  const countMap: Record<string,number> = {};
  counts.forEach(c => { if (c._id) countMap[String(c._id)] = c.count; });
  const data = cats.map(c => ({ ...c, postCount: countMap[String(c._id)] ?? 0 }));
  return NextResponse.json({ success:true, data, total:data.length });
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    await connectDB();
    const { name, slug, description, isActive } = await req.json();
    if (!name?.trim()) return NextResponse.json<ApiResponse>({ success:false, message:'Name is required' }, { status:422 });
    if (!slug?.trim()) return NextResponse.json<ApiResponse>({ success:false, message:'Slug is required' }, { status:422 });
    const last = await BlogCategory.findOne().sort({ order:-1 }).select('order').lean();
    const cat = await BlogCategory.create({ name:name.trim(), slug:slug.trim().toLowerCase(), description:description?.trim()||'', isActive:isActive??true, order:(last?.order??-1)+1 });
    return NextResponse.json({ success:true, message:'Category created', data:cat }, { status:201 });
  } catch(e:unknown) {
    const msg = e instanceof Error && e.message.includes('duplicate') ? 'Slug already exists' : 'Server error';
    return NextResponse.json<ApiResponse>({ success:false, message:msg }, { status:msg.includes('Slug')?409:500 });
  }
}
