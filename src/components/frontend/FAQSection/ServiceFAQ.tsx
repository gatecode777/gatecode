'use client';

import React from 'react';
import FAQSection from './FAQSection';
import { getServiceFaqs } from './serviceFaqs';

interface ServiceFAQProps {
  /** Path below /services, e.g. "digital-marketing/seo" */
  slug: string;
  /** Service name used in the section subtitle, e.g. "SEO" */
  serviceName: string;
}

/**
 * FAQ block for a service page: visible accordion (all answers in the HTML)
 * plus matching FAQPage JSON-LD, generated from the same data so they never drift.
 */
const ServiceFAQ: React.FC<ServiceFAQProps> = ({ slug, serviceName }) => {
  const items = getServiceFaqs(slug);
  if (items.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle={`Quick answers to the most common questions about our ${serviceName} services.`}
        items={items}
      />
    </>
  );
};

export default ServiceFAQ;
