"use client";

import React, { useState } from 'react';

function parseFormattedText(text: string) {
  if (!text) return null;
  let html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  if (/<[a-z][\s\S]*>/i.test(html)) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return text;
}

export default function BlogBlockFaq({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const title = data?.title || 'Frequently Asked Questions (FAQ)';
  const items = data?.items || [];
  if (!items.length) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="blog-faq-section" itemScope itemType="https://schema.org/FAQPage">
      <div className="faq-section-header-wrapper">
        {title && <h2 className="faq-section-title">{parseFormattedText(title)}</h2>}
      </div>
      <div className="faq-accordion-list">
        {items.map((item: { question: string; answer: string }, idx: number) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="faq-accordion-header"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text" itemProp="name">
                  {parseFormattedText(item.question)}
                </span>
                <span className={`faq-icon-badge ${isOpen ? 'active' : ''}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div
                  className="faq-accordion-content"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text" className="faq-answer-inner">
                    {parseFormattedText(item.answer)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
