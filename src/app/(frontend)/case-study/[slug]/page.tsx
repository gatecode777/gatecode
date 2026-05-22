// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

// Each detail section imports its own CSS — import all of them
import '@/components/frontend/CaseStudyDetails/CaseStudy.css';
import '@/components/frontend/CaseStudyDetails/Description.css';
import '@/components/frontend/CaseStudyDetails/ChallengeSolution.css';
import '@/components/frontend/CaseStudyDetails/FeaturesResults.css';
import '@/components/frontend/CaseStudyDetails/Technologies.css';
import '@/components/frontend/CaseStudyDetails/Conclusion.css';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION RENDERERS — identical JSX/class structure to the original static
   components, so ALL existing CSS works with zero changes.
═══════════════════════════════════════════════════════════════════════════ */

// ── hero block → CaseStudy.tsx layout ────────────────────────────────────
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

// ── text block → Description.tsx layout ──────────────────────────────────
function SectionText({ data }) {
  const body = data?.body || '';
  console.log(data.body);
  return (
    <div className="desc">
      {data?.title && <h2 style={{ marginBottom: 12 }}>{data.title}</h2>}
      <p className="desc_p" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

// ── challenge + solution blocks → ChallengeSolution.tsx layout ───────────
function SectionChallengeSolution({ challengeBlock, solutionBlock }) {
  const ch = challengeBlock?.data;
  const sl = solutionBlock?.data;
  if (!ch && !sl) return null;
  // Side image: use solution block's image if present
  const sideImg = sl?.image || sl?.imagePosition !== 'none' ? (sl?.image || '') : '';
  return (
    <section className="cs-section">
      <div className="cs-container">
        <div className="cs-text">
          {ch && (
            <div className="cs-block">
              <h2>{ch.title || 'CHALLENGE'}</h2>
              <p dangerouslySetInnerHTML={{ __html: ch.body || '' }} />
            </div>
          )}
          {sl && (
            <div className="cs-block">
              <h2>{sl.title || 'SOLUTION'}</h2>
              <p dangerouslySetInnerHTML={{ __html: sl.body || '' }} />
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

// ── keyFeatures + results blocks → FeaturesResults.tsx layout ────────────
function SectionFeaturesResults({ featuresBlock, resultsBlock, imageUrl }) {
  const kf = featuresBlock?.data;
  const rs = resultsBlock?.data;
  if (!kf && !rs) return null;
  // items saved as [{id, text}] objects from BulletListEditor
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

// ── technologies block → Technologies.tsx layout ─────────────────────────
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

// ── conclusion / final text block → Conclusion.tsx layout ────────────────
function SectionConclusion({ data }) {
  const body = data?.body || '';
  if (!body) return null;
  return (
    <section className="conclusion-section">
      <div className="conclusion-container">
        <h2 className="conclusion-title">{data?.title || 'CONCLUSION'}</h2>
        <p className="conclusion-text" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </section>
  );
}

// ── image block ───────────────────────────────────────────────────────────
function SectionImage({ data }) {
  if (!data?.url) return null;
  return (
    <div className="img_container">
      <img src={data.url} alt={data.alt || ''} />
      {data.caption && <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 6 }}>{data.caption}</p>}
    </div>
  );
}

// ── twoColumn block ───────────────────────────────────────────────────────
function SectionTwoColumn({ data }) {
  if (!data?.leftBody && !data?.rightBody && !data?.rightImage) return null;
  return (
    <section className="cs-section">
      <div className="cs-container">
        <div className="cs-text">
          <div className="cs-block">
            <p dangerouslySetInnerHTML={{ __html: data.leftBody || '' }} />
          </div>
          {data.rightBody && (
            <div className="cs-block">
              <p dangerouslySetInnerHTML={{ __html: data.rightBody }} />
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

/* ═══════════════════════════════════════════════════════════════════════════
   SMART BLOCK RENDERER
   Groups challenge+solution and keyFeatures+results into their paired
   section components, just like the original static page structure.
═══════════════════════════════════════════════════════════════════════════ */
function renderBlocks(blocks, study) {
  const sorted = [...blocks].sort((a, b) => a.order - b.order)
    .filter(b => b.isVisible);

  const sections = [];
  const consumed = new Set();

  // First pass: find and pair challenge+solution and keyFeatures+results
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
      // Find the next solution block
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
      // Orphan solution block (no preceding challenge)
      consumed.add(i);
      sections.push(
        <SectionChallengeSolution key={i} challengeBlock={null} solutionBlock={block} />
      );
      continue;
    }

    if (block.type === 'keyFeatures') {
      // Find the next results block
      const resultsIdx = sorted.findIndex((b, j) => j > i && b.type === 'results');
      const resultsBlock = resultsIdx !== -1 ? sorted[resultsIdx] : null;
      // Find an image block near these for the side photo
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
      // Orphan results block
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

    // text block — detect if it's a conclusion by title
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

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function CaseStudyDetailPage() {
  const params   = useParams();
  const router   = useRouter();
  const slug     = String(params?.slug ?? '');

  const [study, setStudy]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    window.scrollTo(0, 0);
    fetch(`/api/case-studies/${slug}`)
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data) setStudy(d.data);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: 16 }}>
      Loading…
    </div>
  );

  if (notFound) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <h2 style={{ color: '#1a1a1a' }}>Case Study Not Found</h2>
      <p style={{ color: '#888' }}>This case study doesn&apos;t exist or has been removed.</p>
      <button onClick={() => router.push('/case-study')} style={{ background: '#0fb9b1', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 6, cursor: 'pointer', fontWeight: 600 }}>
        Back to Case Studies
      </button>
    </div>
  );

  const blocks = study.contentBlocks || [];

  return (
    <>
      {blocks.length > 0
        ? renderBlocks(blocks, study)
        : (
          // No blocks yet — render static-style placeholder using real data
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
