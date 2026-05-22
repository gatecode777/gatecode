import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import PortfolioCategory from '@/models/PortfolioCategory';

export async function GET() {
  try {
    await connectDB();
    const cats = await PortfolioCategory.find({ isActive: true })
      .sort({ order: 1 })
      .select('_id name slug order')
      .lean();
    return NextResponse.json({ success: true, data: cats });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}
