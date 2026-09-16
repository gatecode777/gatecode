'use client';

import { useState } from 'react';
import Link from 'next/link';
import './services-page.css';

// Exact categories and sub-services matching `STATIC_CATEGORIES` in the Navbar mega dropdown
const categoriesData = [
  {
    id: 'web-development',
    label: 'Web Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    description: 'High-performance, secure, and fully customized web portals and platforms optimized for all user screens.',
    services: [
      {
        slug: 'custom-website-development',
        title: 'Custom Website Development',
        desc: 'Bespoke corporate web architectures, powerful backend integrations, and custom database web systems.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" y1="22" x2="12" y2="12.01"></line>
            <polyline points="22 8.5 12 12 2 8.5"></polyline>
          </svg>
        )
      },
      {
        slug: 'cms-website-development',
        title: 'CMS Website Development',
        desc: 'WordPress, Webflow, and custom headless CMS environments built for smooth self-managed workflows.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        )
      }
    ]
  },
  {
    id: 'software-development',
    label: 'Software Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
      </svg>
    ),
    description: 'Enterprise custom platforms, APIs, database integration, and software lifecycle solutions.',
    services: [
      {
        slug: 'scalable-solutions',
        title: 'Smart & Scalable Solutions',
        desc: 'Advanced software systems and custom algorithms designed to scale alongside your organization’s growth.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        )
      },
      {
        slug: 'system-integration',
        title: 'Custom Dev & Integration',
        desc: 'Securely link disparate enterprise software, CRM systems, API endpoints, and legacy mainframes.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        )
      },
      {
        slug: 'ongoing-support',
        title: 'Support & Future-Ready Tech',
        desc: 'Continuous application updates, server threat monitoring, security patches, and cloud upkeep SLAs.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        )
      }
    ]
  },
  {
    id: 'mobile-app-development',
    label: 'Mobile Apps',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    description: 'High-performance mobile utilities and apps deployed across all consumer platforms.',
    services: [
      {
        slug: 'android-development',
        title: 'Android App Development',
        desc: 'Advanced native Android apps built for superior security, user workflows, and high hardware optimization.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        )
      }
    ]
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      </svg>
    ),
    description: 'Bespoke visual marketing creatives, corporate branding vectors, dieline packaging, and motion visuals.',
    services: [
      {
        slug: 'motion-graphics',
        title: 'Motion Graphics & Visuals',
        desc: 'High-fidelity promotional video designs, explainers, custom micro-animations, and animated commercial assets.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        )
      },
      {
        slug: 'brand-identity',
        title: 'Brand Identity Design',
        desc: 'Corporate design books, color typography sheets, and distinctive visual themes tailored to your brand.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        )
      },
      {
        slug: 'banner-design',
        title: 'Banner & Poster Design',
        desc: 'High-impact promotional marketing banners, print posters, trade assets, and custom vector templates.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        )
      },
      {
        slug: 'logo-design',
        title: 'Logo Design & Branding',
        desc: 'Unique, highly memorable modern logos engineered for strong long-term brand recall across markets.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        )
      },
      {
        slug: 'packaging-design',
        title: 'Packaging Design',
        desc: 'Retail packaging engineering, layout files, dielines, and retail-ready graphic prints.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          </svg>
        )
      },
      {
        slug: 'social-media-design',
        title: 'Social Media Post Design',
        desc: 'High-engagement custom graphics optimized for Facebook, Instagram, and corporate LinkedIn posts.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        )
      }
    ]
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    description: 'Grow search engine optimization networks, design automated outreach, and generate sales pipelines.',
    services: [
      {
        slug: 'seo',
        title: 'SEO (Search Optimization)',
        desc: 'Vastly increase organic google rankings via key on-page, structural, and semantic indexing.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        )
      },
      {
        slug: 'lead-generation',
        title: 'Lead Generation',
        desc: 'Find, segment, and warm up high-intent B2B and consumer customer pipelines.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
        )
      },
      {
        slug: 'smm',
        title: 'SMM (Social Media Marketing)',
        desc: 'Grow brand accounts, run target ad campaigns, and cultivate active online client communities.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        )
      },
      {
        slug: 'smo',
        title: 'SMO (Social Optimization)',
        desc: 'Refine online social profiles, content feeds, and handles to naturally maximize organic reach.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        )
      },
      {
        slug: 'email-marketing',
        title: 'Email Marketing',
        desc: 'Build high-converting email automated drip lists, newsletters, and lead sequences.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        )
      },
      {
        slug: 'sem',
        title: 'Search Engine Marketing',
        desc: 'Target commercial keywords via Google Ads PPC models to maximize ad spend return (ROAS).',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        )
      },
      {
        slug: 'content-marketing',
        title: 'Content Marketing',
        desc: 'Authority storytelling formats, strategic whitepapers, and guides to attract and educate buyers.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        )
      },
      {
        slug: 'content-writing',
        title: 'Content Writing',
        desc: 'High-quality SEO articles, commercial landing page copy, and creative business writing.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        )
      },
      {
        slug: 'brand-strategy',
        title: 'Brand Strategy & Promotion',
        desc: 'Plan market positioning, coordinate messaging channels, and scale promotional operations.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        )
      }
    ]
  },
  {
    id: 'data-management',
    label: 'Data Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      </svg>
    ),
    description: 'Ensure 99.9% database entry accuracy, lossless cloud migrations, and structured CRM data grids.',
    services: [
      {
        slug: 'data-entry',
        title: 'Data Entry Services',
        desc: 'Double-verified, high-speed manual data input, catalog collation, and structural catalog logging.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="13" x2="15" y2="13"></line>
          </svg>
        )
      },
      {
        slug: 'data-processing',
        title: 'Data Processing',
        desc: 'Structure raw database variables, automate formatting structures, and collate large files.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        )
      },
      {
        slug: 'data-cleansing',
        title: 'Data Cleansing & Validation',
        desc: 'De-duplicate databases, clean form errors, and validate contacts inside corporate systems.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )
      },
      {
        slug: 'document-digitization',
        title: 'Document Digitization',
        desc: 'Convert physical sheets, corporate invoices, and files into secure indexable cloud formats.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8l6 6v14c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6H6c-.5 0-1-.2-1.4-.6C4.2 23 4 22.5 4 22z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        )
      },
      {
        slug: 'data-analysis',
        title: 'Data Analysis & Reporting',
        desc: 'Extract deep operational trends, chart metrics, and design corporate insight dashboards.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="12" x2="16" y2="8"></line>
          </svg>
        )
      },
      {
        slug: 'crm-data',
        title: 'CRM Data Management',
        desc: 'Keep active records, target tags, and fields clean inside Salesforce, HubSpot, or Zoho CRM.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
          </svg>
        )
      },
      {
        slug: 'excel-management',
        title: 'Excel & Sheet Management',
        desc: 'Configure advanced pivot charts, complex formulas, and macro-automated sheets.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="3"></line>
          </svg>
        )
      },
      {
        slug: 'data-migration',
        title: 'Data Migration Services',
        desc: 'Securely extract and transition system records across server clusters without data loss.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"></path>
          </svg>
        )
      }
    ]
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
    ),
    description: 'Human-centric user journeys, high-fidelity layouts, wireframes, and interface research.',
    services: [
      {
        slug: 'ui-design',
        title: 'UI (User Interface) Design',
        desc: 'Visually stunning, pixel-perfect layouts, vector guides, design books, and corporate styles.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
        )
      },
      {
        slug: 'ux-design',
        title: 'UX (User Experience) Design',
        desc: 'Frictionless customer flows, information layout maps, and optimized conversions.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1 10H11V7h2v5zm0 4h-2v-2h2v2z"></path>
          </svg>
        )
      },
      {
        slug: 'wireframing',
        title: 'Wireframing & Prototyping',
        desc: 'Interactive Figma sketches, structural block skeletons, and clickable validation models.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M9 3v18M15 3v18M3 9h18M3 15h18"></path>
          </svg>
        )
      },
      {
        slug: 'user-research',
        title: 'User Research & Analysis',
        desc: 'Extensive demographic research, target persona profiles, heat maps, and competitive layout reviews.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )
      }
    ]
  },
  {
    id: 'bpo-services',
    label: 'BPO Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
    description: 'Provide round-the-clock technical desks, operational call care, and structured back office suites.',
    services: [
      {
        slug: 'call-center',
        title: 'Call Center Services',
        desc: 'Flawless inbound customer desks, outbound support, voice queues, and reassurance desks.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        )
      },
      {
        slug: 'custom-support',
        title: 'Custom Support Services',
        desc: 'Helpdesk ticketing networks, text messaging platforms, and live-chat customer engagement systems.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )
      },
      {
        slug: 'technical-support',
        title: 'Technical Support',
        desc: 'Specialized 24/7 technical desk care, software troubleshooting, and hardware query resolution.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        )
      },
      {
        slug: 'back-office',
        title: 'Back Office Services',
        desc: 'Advanced corporate data entries, workflow management, invoice auditing, and document management.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        )
      }
    ]
  },
  {
    id: 'accounting',
    label: 'Accounting',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    description: 'Ensure absolute tax compliance, coordinate ledger audits, and manage capital cash flows.',
    services: [
      {
        slug: 'audit-compliance',
        title: 'Audit & Compliance Support',
        desc: 'Professional corporate audits, risk profiles, regulatory checks, and regional filings.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )
      },
      {
        slug: 'financial-management',
        title: 'Accurate Financial Management',
        desc: 'Advanced ledger management, operation forecasting, run-rate calculations, and projections.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        )
      },
      {
        slug: 'taxation',
        title: 'Taxation & Compliance Support',
        desc: 'Minimize corporate liabilities via precise regional tax scheduling and tax filings.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        )
      },
      {
        slug: 'financial-solutions',
        title: 'Strategic Financial Solutions',
        desc: 'Fiscal consulting, strategic funding advice, investment modeling, and growth budgeting.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <path d="M21 15l-5-5L5 21"></path>
          </svg>
        )
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('web-development');

  // Find the selected category
  const selectedCategory = categoriesData.find((cat) => cat.id === activeTab) || categoriesData[0];

  return (
    <main className="services-page-wrapper">
      {/* 1. Services Hero Banner */}
      <section className="services-hero">
        <div className="services-hero-container">
          <span className="services-hero-badge">Our Comprehensive Portfolio</span>
          <h1 className="services-hero-title">Next-Gen Business Solutions</h1>
          <p className="services-hero-subtitle">
            Scale your operations, optimize legacy pipelines, and capture growth with Gatecode’s end-to-end operational and software development suites.
          </p>
        </div>
      </section>

      {/* 2. Interactive Navigation Category Tabs */}
      <section className="services-tab-section">
        <div className="services-tab-container">
          <div className="services-tab-scroller">
            <div className="services-tab-deck">
              {categoriesData.map((category) => (
                <button
                  key={category.id}
                  className={`services-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <span className="services-tab-btn-icon">{category.icon}</span>
                  <span className="services-tab-btn-label">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Cards Display Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          {/* Active Category Description Panel */}
          <div className="services-category-intro">
            <div className="services-category-intro-text">
              <h2 className="services-category-title">{selectedCategory.label} Solutions</h2>
              <p className="services-category-desc">{selectedCategory.description}</p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="services-cards-grid">
            {/* 1. High-Impact Category Overview Hub Card */}
            <div className="services-deck-card category-overview-card" style={{ animationDelay: '0ms' }}>
              <div className="services-card-top">
                <div className="services-card-icon-box overview-icon">
                  {selectedCategory.icon}
                </div>
                <h3 className="services-card-title">{selectedCategory.label} Hub</h3>
                <p className="services-card-desc">
                  Explore our complete operational strategy, custom case studies, core tech stacks, and dedicated frameworks for {selectedCategory.label}.
                </p>
              </div>
              <div className="services-card-bottom">
                <Link href={`/services/${selectedCategory.id}`} className="services-card-link overview-link">
                  <span>Explore Overview</span>
                  <svg className="services-card-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* 2. Sub-Services Cards */}
            {selectedCategory.services.map((service, index) => (
              <div className="services-deck-card" key={service.slug} style={{ animationDelay: `${(index + 1) * 80}ms` }}>
                <div className="services-card-top">
                  <div className="services-card-icon-box">
                    {service.icon}
                  </div>
                  <h3 className="services-card-title">{service.title}</h3>
                  <p className="services-card-desc">{service.desc}</p>
                </div>
                <div className="services-card-bottom">
                  <Link href={`/services/${selectedCategory.id}/${service.slug}`} className="services-card-link">
                    <span>Learn More</span>
                    <svg className="services-card-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Highly Engaging CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-container">
          <h2 className="services-cta-title">Need a Custom Integrated Strategy?</h2>
          <p className="services-cta-desc">
            We don’t just supply generic, disjointed templates. Our senior project architects will coordinate with your team to assemble customized software, accounting, and BPO operations aligned perfectly with your goals.
          </p>
          <div className="services-cta-actions">
            <Link href="/contact" className="services-cta-btn btn-primary">
              Contact Our Experts
            </Link>
            <Link href="/portfolio" className="services-cta-btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
