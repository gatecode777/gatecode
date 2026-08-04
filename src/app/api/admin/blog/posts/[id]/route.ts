import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
type Ctx = { params: Promise<{ id: string }> };

function calcReadingTime(blocks: {type:string; data:{text?:string; items?:string[]; body?:string}}[]): number {
  let words = 0;
  blocks.forEach(b => {
    if (b.data?.text) words += String(b.data.text).split(/\s+/).length;
    if (b.data?.items) words += (b.data.items as string[]).join(' ').split(/\s+/).length;
    if (b.data?.body) words += String(b.data.body).split(/\s+/).length;
  });
  return Math.max(1, Math.ceil(words / 200));
}

export async function GET(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params; await connectDB();
  const post = await BlogPost.findById(id).populate('categoryId','name slug').lean();
  if (!post) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, data:post });
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    const { id } = await params; await connectDB();
    const body = await req.json();
    if (body.slug) body.slug = body.slug.trim().toLowerCase();
    if ('categoryId' in body) {
      body.categoryId = body.categoryId && body.categoryId !== '' && body.categoryId !== 'null' ? body.categoryId : null;
    }
    if (body.contentBlocks) body.readingTimeMinutes = calcReadingTime(body.contentBlocks);
    if (body.status === 'published') {
      const existing = await BlogPost.findById(id).select('publishedAt').lean();
      if (!existing?.publishedAt) body.publishedAt = new Date();
    }
    const updated = await BlogPost.findByIdAndUpdate(id, { $set:body }, { new:true }).populate('categoryId','name slug').lean();
    if (!updated) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
    return NextResponse.json({ success:true, message:'Saved', data:updated });
  } catch(e:unknown) {
    console.error('API Error in PATCH /api/admin/blog/posts/[id]:', e);
    const errText = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json<ApiResponse>({ success:false, message:errText }, { status:500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const { id } = await params; await connectDB();
  const ok = await BlogPost.findByIdAndDelete(id);
  if (!ok) return NextResponse.json<ApiResponse>({ success:false, message:'Not found' }, { status:404 });
  return NextResponse.json({ success:true, message:'Deleted' });
}
