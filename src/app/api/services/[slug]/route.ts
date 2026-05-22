import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ServicePage from '@/models/ServicePage';
import ServiceCategory from '@/models/ServiceCategory';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();

    // 1. Try exact slug match (new pages use plain slug e.g. "web-development")
    let page = await ServicePage.findOne({ slug: slug.toLowerCase(), isActive: true }).lean();

    // 2. Legacy fallback: old category pages were saved as "category-{slug}"
    if (!page) {
      page = await ServicePage.findOne({ slug: `category-${slug.toLowerCase()}`, isActive: true }).lean();
    }

    // 3. If still not found — try to find by category slug directly
    //    (category page might exist but have a different slug stored)
    if (!page) {
      const cat = await ServiceCategory.findOne({ slug: slug.toLowerCase() }).select('_id name slug').lean();
      if (cat) {
        page = await ServicePage.findOne({ pageType: 'category', categoryId: cat._id, isActive: true }).lean();
      }
    }

    if (!page) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });

    // Get category name for display
    const cat = await ServiceCategory.findById(page.categoryId).select('name slug').lean();
    return NextResponse.json({ success: true, data: { ...page, categoryName: cat?.name ?? '' } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
