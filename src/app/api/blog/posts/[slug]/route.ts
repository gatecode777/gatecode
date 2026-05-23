import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();
    const post = await BlogPost.findOneAndUpdate(
      { slug, status:'published', isActive:true },
      { $inc:{ viewCount:1 } },
      { returnDocument:'after' }
    ).populate('categoryId','name slug').lean();
    if (!post) return NextResponse.json({ success:false, message:'Not found' }, { status:404 });
    return NextResponse.json({ success:true, data:post });
  } catch(e) { console.error(e); return NextResponse.json({ success:false, message:'Server error' }, { status:500 }); }
}
