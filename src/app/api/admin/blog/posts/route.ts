import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

function calcReadingTime(blocks: {type:string; data:{text?:string; items?:string[]; body?:string}}[]): number {
  let words = 0;
  blocks.forEach(b => {
    if (b.data?.text) words += String(b.data.text).split(/\s+/).length;
    if (b.data?.items) words += (b.data.items as string[]).join(' ').split(/\s+/).length;
    if (b.data?.body) words += String(b.data.body).split(/\s+/).length;
  });
  return Math.max(1, Math.ceil(words / 200));
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  await connectDB();
  const sp = req.nextUrl.searchParams;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string,any> = {};
  const status = sp.get('status') ?? 'all';
  if (status !== 'all') filter.status = status;
  const catId = sp.get('categoryId');
  if (catId) filter.categoryId = catId;
  const q = sp.get('search')?.trim();
  if (q) filter.$or = [{ title: new RegExp(q,'i') }, { metaTitle: new RegExp(q,'i') }];
  const posts = await BlogPost.find(filter)
    .populate('categoryId','name slug')
    .sort({ order:1, publishedAt:-1, createdAt:-1 })
    .select('-contentBlocks')
    .lean();
  return NextResponse.json({ success:true, data:posts, total:posts.length });
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    await connectDB();
    const body = await req.json();
    if (!body.title?.trim()) return NextResponse.json<ApiResponse>({ success:false, message:'Title is required' }, { status:422 });
    if (!body.slug?.trim())  return NextResponse.json<ApiResponse>({ success:false, message:'Slug is required' }, { status:422 });
    const last = await BlogPost.findOne().sort({ order:-1 }).select('order').lean();
    const readingTimeMinutes = calcReadingTime(body.contentBlocks || []);
    const publishedAt = body.status === 'published' ? new Date() : null;
    const post = await BlogPost.create({ ...body, slug: body.slug.trim().toLowerCase(), readingTimeMinutes, publishedAt, order:(last?.order??-1)+1 });
    return NextResponse.json({ success:true, message:'Post created', data:post }, { status:201 });
  } catch(e:unknown) {
    const msg = e instanceof Error && e.message.includes('duplicate') ? 'Slug already exists' : 'Server error';
    return NextResponse.json<ApiResponse>({ success:false, message:msg }, { status:msg.includes('Slug')?409:500 });
  }
}
