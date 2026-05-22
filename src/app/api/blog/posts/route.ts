import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const sp = req.nextUrl.searchParams;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string,any> = { status:'published', isActive:true };
    const catId = sp.get('categoryId');
    if (catId && catId !== 'all') filter.categoryId = catId;
    const page = Math.max(1, parseInt(sp.get('page')||'1'));
    const limit = Math.min(50, parseInt(sp.get('limit')||'6'));
    const total = await BlogPost.countDocuments(filter);
    const posts = await BlogPost.find(filter)
      .populate('categoryId','name slug')
      .sort({ publishedAt:-1, createdAt:-1 })
      .skip((page-1)*limit).limit(limit)
      .select('-contentBlocks')
      .lean();
    return NextResponse.json({ success:true, data:posts, total, page, totalPages:Math.ceil(total/limit) });
  } catch(e) { console.error(e); return NextResponse.json({ success:false, data:[] }, { status:500 }); }
}
