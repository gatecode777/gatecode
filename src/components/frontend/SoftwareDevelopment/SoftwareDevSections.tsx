import React from 'react';
import './SoftwareDevSections.css';
import { FACTS, filledList, foundingYear, isFilled } from './content';

// Every section below renders nothing until the facts it needs are filled in
// (see ./content.ts), so no placeholder text or unconfirmed claim reaches the live page.

// ==================== Technologies We Use ====================
export const TechnologiesWeUse = () => {
  const tech = filledList(FACTS.TECH_LIST);
  if (!tech.length) return null;

  return (
    <section className="sd-section sd-section--alt" aria-labelledby="sd-tech-title">
      <div className="dm-container">
        <h2 id="sd-tech-title" className="dm-section-title">Technologies We Use</h2>
        <p className="dm-about-text sd-lead">
          We choose the technology stack for each project based on performance, security, scalability and long-term maintainability.
        </p>
        <ul className="sd-tech-grid">
          {tech.map((t) => (
            <li key={t} className="sd-tech-item">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ==================== Cost & Timeline ====================
export const CostAndTimeline = () => {
  const cost = isFilled(FACTS.COST_RANGE);
  const basic = isFilled(FACTS.BASIC_TIMELINE);
  const enterprise = isFilled(FACTS.ENTERPRISE_TIMELINE);
  if (!cost && !basic && !enterprise) return null;

  return (
    <section className="sd-section" aria-labelledby="sd-cost-title">
      <div className="dm-container">
        <h2 id="sd-cost-title" className="dm-section-title">Cost &amp; Timeline</h2>
        <p className="dm-about-text sd-lead">
          The cost of custom software depends on scope, complexity, integrations and team size.
          {cost && <> Most projects fall in the range of <strong>{FACTS.COST_RANGE}</strong>.</>}
          {basic && <> A basic application typically takes <strong>{FACTS.BASIC_TIMELINE}</strong>.</>}
          {enterprise && <> Enterprise-grade systems typically take <strong>{FACTS.ENTERPRISE_TIMELINE}</strong>.</>}
          {' '}After a free consultation we review your requirements and share a detailed estimate and project plan.
        </p>
      </div>
    </section>
  );
};

// ==================== Software Development in 2026 ====================
const trends2026 = [
  {
    title: 'AI-assisted development',
    text: 'AI-assisted tooling now handles much of the routine work, such as boilerplate code, test scaffolding and documentation, which can shorten build cycles. The time saved is best spent on architecture, security review and user testing, where human judgment still matters most.',
  },
  {
    title: "India's Digital Personal Data Protection Act",
    text: "India's Digital Personal Data Protection Act, 2023 sets obligations around consent, purpose limitation and the handling of personal data. For software teams this shapes architecture: how consent is captured, where data is stored, how it can be corrected or deleted, and who can access it. Building these in from the start is easier than retrofitting them later.",
  },
  {
    title: 'Cloud cost as a design decision',
    text: 'Cloud bills grow with every architectural choice, from database design to how often background jobs run. Treating cost as a design constraint, through right-sized infrastructure, caching and sensible scaling rules, keeps running costs predictable as usage grows.',
  },
  {
    title: 'Integration over reinvention',
    text: 'Most businesses already run CRM, ERP, payment and accounting tools that work well. Connecting them through well-designed APIs is usually faster and less risky than rebuilding them, so custom software should focus on the gaps that off-the-shelf tools do not cover.',
  },
];

export const SoftwareDevIn2026 = () => (
  <section className="sd-section sd-section--alt" aria-labelledby="sd-2026-title">
    <div className="dm-container">
      <h2 id="sd-2026-title" className="dm-section-title">Software Development in 2026</h2>
      <div className="sd-trend-grid">
        {trends2026.map((t) => (
          <article key={t.title} className="sd-trend-card">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ==================== Company details (trust signals) ====================
export const CompanyDetails = () => {
  const address = isFilled(FACTS.ADDRESS) ? FACTS.ADDRESS : null;
  const year = foundingYear();
  const years = year ? Math.max(0, new Date().getFullYear() - year) : null;
  const certification = isFilled(FACTS.CERTIFICATION) ? FACTS.CERTIFICATION : null;
  const countries = filledList(FACTS.COUNTRIES);

  if (!address && !year && !certification && !countries.length) return null;

  return (
    <section className="sd-section" aria-labelledby="sd-company-title">
      <div className="dm-container">
        <h2 id="sd-company-title" className="dm-section-title">About Gatecode Technologies</h2>
        <dl className="sd-facts">
          {address && (
            <div className="sd-fact">
              <dt>Office address</dt>
              <dd>{address}</dd>
            </div>
          )}
          {year && (
            <div className="sd-fact">
              <dt>Experience</dt>
              <dd>Founded in {year}{years ? ` · ${years} year${years === 1 ? '' : 's'} of experience` : ''}</dd>
            </div>
          )}
          {certification && (
            <div className="sd-fact">
              <dt>Certification</dt>
              <dd>{certification}</dd>
            </div>
          )}
          {countries.length > 0 && (
            <div className="sd-fact">
              <dt>Countries we serve</dt>
              <dd>{countries.join(', ')}</dd>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
};
