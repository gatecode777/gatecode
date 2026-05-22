import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import Comment from '@/models/Comment';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();
    const post = await BlogPost.findOne({ slug, status: 'published', isActive: true }).select('_id').lean();
    if (!post) return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });

    const comments = await Comment.find({ postId: post._id })
      .sort({ createdAt: -1 })
      .select('name content createdAt')
      .lean();

    return NextResponse.json({ success: true, data: comments });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();
    const post = await BlogPost.findOne({ slug, status: 'published', isActive: true }).select('_id').lean();
    if (!post) return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });

    const body = await req.json();
    const { name, email, website, content } = body;

    if (!name?.trim())   return NextResponse.json({ success: false, message: 'Name is required' }, { status: 400 });
    if (!email?.trim())  return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    if (!content?.trim()) return NextResponse.json({ success: false, message: 'Comment is required' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });

    const comment = await Comment.create({
      postId: post._id,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      website: website?.trim() || '',
      content: content.trim(),
    });

    await BlogPost.findByIdAndUpdate(post._id, { $inc: { commentCount: 1 } });

    return NextResponse.json({ success: true, data: { _id: comment._id, name: comment.name, content: comment.content, createdAt: comment.createdAt } }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}
