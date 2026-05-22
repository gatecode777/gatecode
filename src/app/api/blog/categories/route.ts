import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import BlogCategory from '@/models/BlogCategory';
import BlogPost from '@/models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    const cats = await BlogCategory.find({ isActive:true }).sort({ order:1, name:1 }).select('_id name slug').lean();
    const counts = await BlogPost.aggregate([{ $match:{ status:'published', isActive:true } }, { $group:{ _id:'$categoryId', count:{ $sum:1 } } }]);
    const total = await BlogPost.countDocuments({ status:'published', isActive:true });
    const countMap: Record<string,number> = {};
    counts.forEach(c => { if (c._id) countMap[String(c._id)] = c.count; });
    const allCount = { _id:'all', name:'All', slug:'all', count:total };
    const data = [allCount, ...cats.map(c => ({ ...c, count: countMap[String(c._id)] ?? 0 }))];
    return NextResponse.json({ success:true, data });
  } catch(e) { console.error(e); return NextResponse.json({ success:false, data:[] }, { status:500 }); }
}
