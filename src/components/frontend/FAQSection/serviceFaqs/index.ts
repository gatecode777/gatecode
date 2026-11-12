import type { FAQItem } from '../FAQSection';
import type { QA } from './types';
import { webSoftwareFaqs } from './webSoftware';
import { designFaqs } from './design';
import { marketingFaqs } from './marketing';
import { operationsFaqs } from './operations';
import { hubFaqs } from './hub';

const ALL: Record<string, QA[]> = {
  ...webSoftwareFaqs,
  ...designFaqs,
  ...marketingFaqs,
  ...operationsFaqs,
  ...hubFaqs,
};

/** 7 FAQs for a service page, keyed by its path below /services (e.g. "digital-marketing/seo"). */
export function getServiceFaqs(slug: string): FAQItem[] {
  return (ALL[slug] ?? []).map(([question, answer]) => ({ question, answer }));
}

export const serviceFaqSlugs = Object.keys(ALL);
