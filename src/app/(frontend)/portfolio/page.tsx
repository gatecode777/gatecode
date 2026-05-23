// @ts-nocheck

import PortfolioHero from '@/components/frontend/PortfolioHero/PortfolioHero';
import PortfolioSlider from '@/components/frontend/Portfolio/Portfolio';
import PortfolioClient from './PortfolioClient';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import connectDB from '@/lib/db';
import PortfolioSliderModel from '@/models/PortfolioSlider';
import PortfolioCategory from '@/models/PortfolioCategory';
import PortfolioProject from '@/models/PortfolioProject';

export const dynamic = 'force-dynamic';

function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function Portfolio() {
  await connectDB();

  const [slides, categories, projects] = await Promise.all([
    PortfolioSliderModel.find({ isActive: true }).sort({ order: 1 }).lean(),
    PortfolioCategory.find({ isActive: true }).sort({ order: 1 }).lean(),
    PortfolioProject.find({ isActive: true })
      .populate('categoryId', 'name slug')
      .sort({ order: 1 })
      .lean(),
  ]);

  return (
    <>
      <PortfolioHero />
      <PortfolioSlider slides={plain(slides)} isLoading={false} />
      <PortfolioClient
        categories={plain(categories)}
        projects={plain(projects)}
      />
      <ProjectBanner />
    </>
  );
}
