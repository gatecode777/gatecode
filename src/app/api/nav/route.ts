import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ServiceCategory from '@/models/ServiceCategory';
import SubService from '@/models/SubService';
import TechnicalExpertise from '@/models/TechnicalExpertise';

export interface NavSubService {
  name: string;
  slug: string;
}

export interface NavCategory {
  name: string;
  slug: string;
  subServices: NavSubService[];
}

export interface NavExpertise {
  name: string;
  slug: string;
}

export interface NavData {
  categories: NavCategory[];
  expertise: NavExpertise[];
}

export async function GET() {
  try {
    await connectDB();

    // Fetch active categories ordered
    const categories = await ServiceCategory.find({ isActive: true })
      .sort({ order: 1, name: 1 })
      .select('name slug _id')
      .lean();

    // Fetch all active sub-services for those categories
    const catIds = categories.map(c => c._id);
    const subServices = await SubService.find({ isActive: true, categoryId: { $in: catIds } })
      .sort({ order: 1, name: 1 })
      .select('name slug categoryId')
      .lean();

    // Group sub-services by categoryId
    const subMap: Record<string, NavSubService[]> = {};
    for (const sub of subServices) {
      const key = String(sub.categoryId);
      if (!subMap[key]) subMap[key] = [];
      subMap[key].push({ name: sub.name, slug: sub.slug });
    }

    const navCategories: NavCategory[] = categories.map(cat => ({
      name: cat.name,
      slug: cat.slug,
      subServices: subMap[String(cat._id)] ?? [],
    }));

    // Fetch active technical expertise
    const expertise = await TechnicalExpertise.find({ isActive: true })
      .sort({ order: 1, name: 1 })
      .select('name slug')
      .lean();

    const navExpertise: NavExpertise[] = expertise.map(e => ({
      name: e.name,
      slug: e.slug,
    }));

    return NextResponse.json({
      success: true,
      data: { categories: navCategories, expertise: navExpertise } as NavData,
    }, {
      headers: {
        // Cache for 60 seconds on CDN, revalidate in background
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (e) {
    console.error('[nav API]', e);
    // Return empty — Navbar falls back to hardcoded data
    return NextResponse.json({ success: false, data: { categories: [], expertise: [] } });
  }
}
