import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import PortfolioProject from '@/models/PortfolioProject';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const categoryId = req.nextUrl.searchParams.get('categoryId');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = { isActive: true };
    if (categoryId) filter.categoryId = categoryId;
    const projects = await PortfolioProject.find(filter)
      .sort({ order: 1 })
      .select('_id title description thumbnail buttons categoryId')
      .lean();
    return NextResponse.json({ success: true, data: projects });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}
