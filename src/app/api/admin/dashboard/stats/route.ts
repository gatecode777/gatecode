import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import PortfolioProject from '@/models/PortfolioProject';
import PortfolioSlider from '@/models/PortfolioSlider';
import CaseStudy from '@/models/CaseStudy';
import ContactRequest from '@/models/ContactRequest';
import JobApplication from '@/models/JobApplication';

// Lazy import BlogPost — it may not exist yet if user hasn't run blog migration
async function getBlogCount(): Promise<number> {
  try {
    const BlogPost = (await import('@/models/BlogPost')).default;
    return await BlogPost.countDocuments({ status: 'published', isActive: true });
  } catch { return 0; }
}

function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    const [projects, heroSlides, caseStudies, newEnquiries, newApps, blogPosts] = await Promise.all([
      PortfolioProject.countDocuments({ isActive: true }),
      PortfolioSlider.countDocuments({ isActive: true }),
      CaseStudy.countDocuments({ isActive: true }),
      ContactRequest.countDocuments({ status: 'new' }),
      JobApplication.countDocuments({ status: 'new' }),
      getBlogCount(),
    ]);
    return NextResponse.json({ success: true, data: { projects, heroSlides, caseStudies, newEnquiries, newApps, blogPosts } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}