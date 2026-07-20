// @ts-nocheck
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '@/components/frontend/CaseStudyDetails/CaseStudy.css';
import '@/components/frontend/CaseStudyDetails/Description.css';
import '@/components/frontend/CaseStudyDetails/ChallengeSolution.css';
import '@/components/frontend/CaseStudyDetails/FeaturesResults.css';
import '@/components/frontend/CaseStudyDetails/Technologies.css';
import '@/components/frontend/CaseStudyDetails/Conclusion.css';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import RichHtml from '@/components/frontend/RichHtml';
import connectDB from '@/lib/db';
import CaseStudyModel from '@/models/CaseStudy';

export const dynamic = 'force-dynamic';

function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const study = await CaseStudyModel.findOne({ slug, isActive: true }).lean();

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Gatecode Technologies`,
    description: study.shortDesc,
    alternates: {
      canonical: `/case-study/${slug}`,
    },
  };
}

function SectionHero({ data, title, shortDesc }) {
  const heading = data?.title || title || '';
  const sub     = data?.subtitle || shortDesc || '';
  const banner  = data?.bannerImage || '';
  return (
    <section className="case-study">
      <div className="case-container">
        <div className="case-text">
          <h4 className="head_four">CASE STUDIES</h4>
          <h2 className="head_two">{heading}</h2>
          <p className="head_p">{sub}</p>
        </div>
        {banner && (
          <div className="case-image">
            <img src='/images/Background_img.jpg' alt={heading} />
          </div>
        )}
      </div>
      {banner && (
        <div className="img_container">
          <img src={banner} alt={heading} />
        </div>
      )}
    </section>
  );
}

function SectionText({ data }) {
  const body = data?.body || '';
  return (
    <div className="desc">
      {data?.title && <h2 style={{ marginBottom: 12 }}>{data.title}</h2>}
      <RichHtml html={body} className="desc_p" />
    </div>
  );
}

function SectionChallengeSolution({ challengeBlock, solutionBlock }) {
  const ch = challengeBlock?.data;
  const sl = solutionBlock?.data;
  if (!ch && !sl) return null;
  const sideImg = sl?.image || sl?.imagePosition !== 'none' ? (sl?.image || '') : '';
  return (
    <section className="cs-section">
      <div className="cs-container">
        <div className="cs-text">
          {ch && (
            <div className="cs-block">
              <h2>{ch.title || 'CHALLENGE'}</h2>
              <RichHtml html={ch.body || ''} />
            </div>
          )}
          {sl && (
            <div className="cs-block">
              <h2>{sl.title || 'SOLUTION'}</h2>
              <RichHtml html={sl.body || ''} />
            </div>
          )}
        </div>
        {sideImg && (
          <div className="cs-image">
            <img src={sideImg} alt="Challenge Solution Illustration" />
          </div>
        )}
      </div>
    </section>
  );
}

function SectionFeaturesResults({ featuresBlock, resultsBlock, imageUrl }) {
  const kf = featuresBlock?.data;
  const rs = resultsBlock?.data;
  if (!kf && !rs) return null;
  const kfItems = (kf?.items || []).map(i => typeof i === 'string' ? i : i.text || '').filter(Boolean);
  const rsItems = (rs?.items || []).map(i => typeof i === 'string' ? i : i.text || '').filter(Boolean);
  return (
    <section className="fr-section">
      <div className="fr-container">
        <div className="fr-left">
          {kf && (
            <div className="fr-block">
              <h2>{kf.title || 'KEY FEATURES'}</h2>
              <ul>
                {kfItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
          {rs && (
            <div className="fr-block">
              <h2>{rs.title || 'RESULTS'}</h2>
              <ul>
                {rsItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
        {imageUrl && (
          <div className="box">
            <img src={imageUrl} alt="Results" />
          </div>
        )}
      </div>
    </section>
  );
}

function SectionTechnologies({ data }) {
  const items = data?.items || [];
  if (!items.length) return null;
  return (
    <section className="tech-section">
      <h2 className="tech-title">{data?.title || 'TECHNOLOGIES USED'}</h2>
      <div className="tech-container">
        <div className="tech-line" />
        {items.map((tech, i) => (
          <div className="tech-item" key={i}>
            <div className={`tech-circle ${i === 0 ? 'active' : ''}`}>
              {tech.icon
                ? <img src={tech.icon} alt={tech.name} />
                : <span style={{ fontSize: 11, fontWeight: 700, color: '#0fb9b1' }}>{(tech.name || '').slice(0,3).toUpperCase()}</span>
              }
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionConclusion({ data }) {
  const body = data?.body || '';
  if (!body) return null;
  return (
    <section className="conclusion-section">
      <div className="conclusion-container">
        <h2 className="conclusion-title">{data?.title || 'CONCLUSION'}</h2>
        <RichHtml html={body} className="conclusion-text" />
      </div>
    </section>
  );
}

function SectionImage({ data }) {
  if (!data?.url) return null;
  return (
    <div className="img_container">
      <img src={data.url} alt={data.alt || ''} />
      {data.caption && <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 6 }}>{data.caption}</p>}
    </div>
  );
}

function SectionTwoColumn({ data }) {
  if (!data?.leftBody && !data?.rightBody && !data?.rightImage) return null;
  return (
    <section className="cs-section">
      <div className="cs-container">
        <div className="cs-text">
          <div className="cs-block">
            <RichHtml html={data.leftBody || ''} />
          </div>
          {data.rightBody && (
            <div className="cs-block">
              <RichHtml html={data.rightBody} />
            </div>
          )}
        </div>
        {data.rightImage && (
          <div className="cs-image">
            <img src={data.rightImage} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}

function renderBlocks(blocks, study) {
  const sorted = [...blocks].sort((a, b) => a.order - b.order)
    .filter(b => b.isVisible);

  const sections = [];
  const consumed = new Set();

  for (let i = 0; i < sorted.length; i++) {
    if (consumed.has(i)) continue;
    const block = sorted[i];

    if (block.type === 'hero') {
      consumed.add(i);
      sections.push(
        <SectionHero key={i} data={block.data} title={study.title} shortDesc={study.shortDesc} />
      );
      continue;
    }

    if (block.type === 'challenge') {
      const solutionIdx = sorted.findIndex((b, j) => j > i && b.type === 'solution');
      const solutionBlock = solutionIdx !== -1 ? sorted[solutionIdx] : null;
      consumed.add(i);
      if (solutionIdx !== -1) consumed.add(solutionIdx);
      sections.push(
        <SectionChallengeSolution key={i} challengeBlock={block} solutionBlock={solutionBlock} />
      );
      continue;
    }

    if (block.type === 'solution' && !consumed.has(i)) {
      consumed.add(i);
      sections.push(
        <SectionChallengeSolution key={i} challengeBlock={null} solutionBlock={block} />
      );
      continue;
    }

    if (block.type === 'keyFeatures') {
      const resultsIdx = sorted.findIndex((b, j) => j > i && b.type === 'results');
      const resultsBlock = resultsIdx !== -1 ? sorted[resultsIdx] : null;
      const imgIdx = sorted.findIndex((b, j) => j > i && b.type === 'image' && !consumed.has(j));
      const imgBlock = imgIdx !== -1 ? sorted[imgIdx] : null;
      consumed.add(i);
      if (resultsIdx !== -1) consumed.add(resultsIdx);
      if (imgIdx !== -1) consumed.add(imgIdx);
      sections.push(
        <SectionFeaturesResults
          key={i}
          featuresBlock={block}
          resultsBlock={resultsBlock}
          imageUrl={imgBlock?.data?.url || '/images/homepage.jpeg'}
        />
      );
      continue;
    }

    if (block.type === 'results' && !consumed.has(i)) {
      consumed.add(i);
      sections.push(
        <SectionFeaturesResults key={i} featuresBlock={null} resultsBlock={block} imageUrl={'/images/homepage.jpeg'} />
      );
      continue;
    }

    if (block.type === 'technologies') {
      consumed.add(i);
      sections.push(<SectionTechnologies key={i} data={block.data} />);
      continue;
    }

    if (block.type === 'text') {
      consumed.add(i);
      const title = (block.data?.title || '').toUpperCase();
      if (title === 'CONCLUSION' || title.includes('CONCLUSION')) {
        sections.push(<SectionConclusion key={i} data={block.data} />);
      } else {
        sections.push(<SectionText key={i} data={block.data} />);
      }
      continue;
    }

    if (block.type === 'image' && !consumed.has(i)) {
      consumed.add(i);
      sections.push(<SectionImage key={i} data={block.data} />);
      continue;
    }

    if (block.type === 'twoColumn') {
      consumed.add(i);
      sections.push(<SectionTwoColumn key={i} data={block.data} />);
      continue;
    }

    if (block.type === 'divider') {
      consumed.add(i);
      sections.push(<div key={i} style={{ height: block.data?.spacing === 'lg' ? 80 : block.data?.spacing === 'sm' ? 24 : 48 }} />);
      continue;
    }
  }

  return sections;
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;

  await connectDB();

  const study = await CaseStudyModel.findOne({ slug, isActive: true }).lean();

  if (!study) {
    notFound();
  }

  const blocks = study.contentBlocks || [];

  return (
    <>
      {blocks.length > 0
        ? renderBlocks(blocks, plain(study))
        : (
          <>
            <section className="case-study">
              <div className="case-container">
                <div className="case-text">
                  <h4 className="head_four">CASE STUDIES</h4>
                  <h2 className="head_two">{study.title}</h2>
                  <p className="head_p">{study.shortDesc}</p>
                </div>
                <div className="case-image">
                  <img src={study.thumbnail} alt={study.title} />
                </div>
              </div>
              <div className="img_container">
                <img src={study.thumbnail} alt={study.title} />
              </div>
            </section>
            <div className="desc">
              <p className="desc_p">{study.shortDesc}</p>
            </div>
          </>
        )
      }
      <ProjectBanner />
    </>
  );
}
