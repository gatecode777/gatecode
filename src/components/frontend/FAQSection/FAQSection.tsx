'use client';

import React, { useState } from 'react';
import './FAQSection.css';

export interface FAQItem {
  num?: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  eyebrow = 'FAQS',
  titleLine1 = 'FREQUENTLY ASKED',
  titleHighlight = 'QUESTIONS',
  subtitle = 'Quick answers to the most common questions about our services.',
  items = [],
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-how-section" id="faq" aria-labelledby="faq-main-title">
      <div className="faq-how-inner">
        {/* Top Centered Header */}
        <div className="faq-how-heading-wrap">
          <p className="faq-how-eyebrow">{eyebrow}</p>
          <h2 id="faq-main-title" className="faq-how-title">
            {titleLine1}{' '}
            <span className="faq-how-title-line">{titleHighlight}</span>
          </h2>
          <p className="faq-how-subtitle">{subtitle}</p>
        </div>

        {/* Right Column: Pill Accordion Steps */}
        <div className="faq-how-steps" role="region" aria-label="Frequently Asked Questions">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const itemNumber = item.num || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);
            const headingId = `faq-q-${index}`;
            const panelId = `faq-ans-${index}`;

            return (
              <div
                key={index}
                className={`faq-how-step ${isActive ? 'is-active' : ''}`}
                onClick={() => toggleFAQ(index)}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div
                  className="faq-how-step__head"
                  role="button"
                  id={headingId}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                >
                  <div className="faq-how-step__num" aria-hidden="true">
                    {itemNumber}
                  </div>
                  <h3 className="faq-how-step__title" itemProp="name">
                    {item.question}
                  </h3>
                  <div className="faq-how-step__toggle" aria-hidden="true">
                    +
                  </div>
                </div>

                {/* Always rendered so every answer is in the HTML for crawlers;
                    closed answers are only hidden visually via the `hidden` attribute. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isActive}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="faq-how-step__body" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
