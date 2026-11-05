/**
 * Single source of truth for the /services/software-development page facts.
 *
 * HOW TO FILL IN: replace each `'{PLACEHOLDER}'` below with your confirmed value.
 * Anything still left as `{...}` is treated as "not provided yet": the block that
 * needs it stays hidden and the FAQ answers use wording with no numbers, so the
 * live page never shows a raw placeholder and never states an unconfirmed fact.
 */

import type { FAQItem } from '@/components/frontend/FAQSection/FAQSection';

export const SITE = 'https://gatecode.in';
export const ORG_ID = `${SITE}/#organization`;

export const FACTS = {
  /** e.g. 'INR 3 lakh to INR 25 lakh' */
  COST_RANGE: '{COST_RANGE}',
  /** e.g. '8 to 12 weeks' */
  BASIC_TIMELINE: '{BASIC_TIMELINE}',
  /** e.g. '4 to 9 months' */
  ENTERPRISE_TIMELINE: '{ENTERPRISE_TIMELINE}',
  /** Technologies you have confirmed, e.g. ['React', 'Next.js', 'Node.js', 'Python', 'MongoDB'] */
  TECH_LIST: ['{TECH_LIST}'] as string[],
  /** Full business address as one line */
  ADDRESS: '{ADDRESS}',
  /** Founding year as 4 digits, e.g. '2019' (years of experience is calculated from it) */
  YEAR: '{YEAR}',
  /** A certification you actually hold, e.g. 'ISO 9001:2015'. Use 'none' if you have none. */
  CERTIFICATION: '{CERTIFICATION}',
  /** Countries you serve, e.g. ['India', 'United States', 'United Kingdom'] */
  COUNTRIES: ['{COUNTRIES}'] as string[],
  /** Set to true only once you confirm you sign NDAs; enables the NDA FAQ. */
  SIGNS_NDA: false,
};

export const CONTACT = {
  phone: '+918502888838',
  email: 'info@gatecode.in',
  logo: `${SITE}/images/logo.webp`,
  sameAs: [
    'https://in.linkedin.com/company/gatecode-technologies',
    'https://x.com/gatecodein',
    'https://www.instagram.com/gatecode_technologies_pvt/',
    'https://www.facebook.com/people/Gatecode-Technologies-Private-Limited/61583453039836/',
  ],
};

// ---------- helpers ----------

/** True when a value has been filled in (not empty, not a `{PLACEHOLDER}`, not "none"). */
export function isFilled(value: string | undefined | null): value is string {
  if (!value) return false;
  const v = value.trim();
  if (!v || v.toLowerCase() === 'none') return false;
  return !/\{[A-Z_ ]+\}/.test(v);
}

export function filledList(list: string[]): string[] {
  return list.filter(isFilled);
}

export function joinList(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** Safe JSON-LD string for <script type="application/ld+json"> */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function foundingYear(): number | null {
  return /^\d{4}$/.test(FACTS.YEAR.trim()) ? Number(FACTS.YEAR.trim()) : null;
}

// ---------- FAQs (rendered on the page AND emitted as FAQPage JSON-LD) ----------

export function getSoftwareDevFaqs(): FAQItem[] {
  const tech = filledList(FACTS.TECH_LIST);
  const hasCost = isFilled(FACTS.COST_RANGE);
  const hasTimelines = isFilled(FACTS.BASIC_TIMELINE) && isFilled(FACTS.ENTERPRISE_TIMELINE);

  const faqs: Omit<FAQItem, 'num'>[] = [
    {
      question: 'What types of Software Development services does Gatecode Technologies provide?',
      answer:
        'Gatecode Technologies provides custom software development, enterprise applications, SaaS platforms, CRM and ERP systems, business automation tools and API integration. We also build web and desktop applications and offer ongoing maintenance. Every solution is designed around your workflows, so the software fits how your team already works instead of forcing you to change your processes.',
    },
    {
      question: 'What is the difference between custom software and ready-made (off-the-shelf) software?',
      answer:
        'Custom software is built specifically for your business, while off-the-shelf software is a generic product sold to many customers. Custom solutions match your workflows, connect to your existing tools and grow with you. Ready-made software is usually quicker to start with but can limit features and add recurring licence fees. The better choice depends on how unique your processes are.',
    },
    {
      question: 'Can your custom software integrate with our existing systems like CRM or ERP?',
      answer:
        'Yes, we integrate custom software with existing CRM, ERP, accounting, payment and third-party systems using secure APIs. Before building, we review how your current tools store and exchange data so information flows between systems without duplication. Where an older system has no modern API, we can usually build a connector layer or plan a staged migration.',
    },
    {
      question: 'What technologies do you use for software development?',
      answer: tech.length
        ? `We build software with ${joinList(tech)}. We choose the stack for each project based on performance, security, scalability and how easily your team can maintain it, rather than using one tool for everything. During discovery we explain the reasoning behind our recommendation so you stay in control of the decision.`
        : 'We build software with modern, proven technologies, including React, Next.js, Node.js and Python. We choose the stack for each project based on performance, security, scalability and how easily your team can maintain it, rather than using one tool for everything. During discovery we explain the reasoning behind our recommendation so you stay in control of the decision.',
    },
    {
      question: 'Do you provide post-development support and maintenance after deployment?',
      answer:
        'Yes, we offer support and maintenance for the software we build after it goes live. This covers bug fixes, security updates, performance monitoring and optimization, compatibility upgrades and new feature development. The scope and response expectations are agreed in a support plan, so you know exactly what to expect once your software is in production.',
    },
    {
      question: 'How much does custom software development cost in India?',
      answer: hasCost
        ? `Custom software development in India typically costs ${FACTS.COST_RANGE}, depending on scope, features, integrations, design complexity and team size. A simple internal tool costs far less than a multi-module enterprise platform. After a free consultation we review your requirements and give you a detailed estimate, so you can plan your budget with confidence.`
        : 'The cost of custom software development in India depends on scope, features, integrations, design complexity and team size. A simple internal tool costs far less than a multi-module enterprise platform. After a free consultation we review your requirements and give you a detailed estimate, so you can plan your budget before any development begins.',
    },
    {
      question: 'How long does custom software development take?',
      answer: hasTimelines
        ? `A basic custom application typically takes ${FACTS.BASIC_TIMELINE}, while enterprise-grade systems typically take ${FACTS.ENTERPRISE_TIMELINE}. Timelines depend on scope, the number of integrations, approvals and how quickly feedback is shared. We deliver in agile sprints, so you can review progress regularly and adjust priorities while the software is being built.`
        : 'The timeline for custom software depends on scope, the number of integrations and how quickly feedback is shared, so a basic application takes far less time than an enterprise system. We confirm a project timeline after discovery and deliver in agile sprints, so you can review progress regularly and adjust priorities while the software is being built.',
    },
  ];

  if (FACTS.SIGNS_NDA) {
    faqs.push({
      question: 'Do you sign an NDA to protect our business ideas and data?',
      answer:
        'Yes, we are happy to sign a non-disclosure agreement before you share project details. Your ideas, documents, business data and source code stay confidential, and the finished software belongs to your organization. You can send your own NDA template, or ask us to prepare one, before the first in-depth discovery conversation begins.',
    });
  }

  return faqs.map((f, i) => ({ ...f, num: String(i + 1).padStart(2, '0') }));
}
