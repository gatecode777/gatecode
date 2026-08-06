'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  RefreshCw,
  Zap,
  Search,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Code2,
  TrendingUp,
  Layout,
  Gauge,
  Compass,
  Layers,
  Cpu,
  Rocket,
  MessageSquare,
  Check
} from 'lucide-react';
import './AgencyLandingPage.css';
import ProjectInquiryForm from './ProjectInquiryForm';

export default function AgencyLandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/918502888838?text=${encodeURIComponent('Hello Gatecode Team, I would like to discuss a new website development project.')}`;

  return (
    <div className="agency-page-root">
      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="agency-hero">
        <div className="agency-container">
          <motion.div
            className="agency-hero-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="agency-badge">
              <span className="agency-badge-dot" />
              Custom Website Development
            </div>

            <h1 className="agency-hero-headline">
              Websites That Turn Visitors Into{' '}
              <span className="highlight-text">Paying Customers</span>
            </h1>

            <p className="agency-hero-subheadline">
              We design and build ultra-fast, high-converting custom websites engineered for growing businesses.
              No generic templates — pure performance, Google PageSpeed 95+, and revenue-focused UX design.
            </p>

            <div className="agency-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="agency-btn agency-btn-primary"
              >
                Chat on WhatsApp Now
                <ArrowRight size={18} />
              </a>

              <button
                onClick={() => scrollToSection('process')}
                className="agency-btn agency-btn-secondary"
              >
                How We Build Sites
              </button>
            </div>
          </motion.div>

          {/* Browser Mockup Visual */}
          <motion.div
            className="agency-browser-wrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="agency-browser-mockup">
              <div className="agency-browser-bar">
                <div className="agency-browser-dots">
                  <span className="agency-dot agency-dot-red" />
                  <span className="agency-dot agency-dot-yellow" />
                  <span className="agency-dot agency-dot-green" />
                </div>

                <div className="agency-browser-url">
                  <Globe size={13} />
                  <span>https://clientwebsite.com</span>
                </div>

                <div className="agency-browser-badge">
                  <Gauge size={13} />
                  <span>99/100 Speed</span>
                </div>
              </div>

              {/* Sample Website UI Preview */}
              <div className="agency-preview-body">
                <div className="agency-preview-nav">
                  <div className="agency-preview-logo">
                    <Sparkles size={18} style={{ color: 'var(--agency-teal)' }} />
                    <span>Apex Growth</span>
                  </div>
                  <div className="agency-preview-menu">
                    <span>Solutions</span>
                    <span>Case Studies</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="agency-preview-hero-inner">
                  <div>
                    <h2 className="agency-preview-h1">
                      Elevate Your Business With A <span>High-Speed Website</span>
                    </h2>
                    <p className="agency-preview-p">
                      Designed to engage audiences, build instant trust, and drive continuous sales growth.
                    </p>
                    <span className="agency-preview-btn">Explore Live Demo</span>
                  </div>

                  <div className="agency-preview-card-grid">
                    <div className="agency-preview-mini-card">
                      <div className="agency-preview-mini-title">⚡ 0.4s Speed</div>
                      <div className="agency-preview-mini-text">Instant page loads across all browsers</div>
                    </div>
                    <div className="agency-preview-mini-card">
                      <div className="agency-preview-mini-title">🎯 +145% Leads</div>
                      <div className="agency-preview-mini-text">Optimized conversion funnel design</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Row */}
          <motion.div
            className="agency-stat-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="agency-stat-item">
              <div className="agency-stat-number">150+</div>
              <div className="agency-stat-label">Projects Delivered</div>
            </div>
            <div className="agency-stat-item">
              <div className="agency-stat-number">98/100</div>
              <div className="agency-stat-label">Avg Page Speed Score</div>
            </div>
            <div className="agency-stat-item">
              <div className="agency-stat-number">96%</div>
              <div className="agency-stat-label">Client Retention</div>
            </div>
            <div className="agency-stat-item">
              <div className="agency-stat-number">4.9/5★</div>
              <div className="agency-stat-label">Client Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. SERVICES SECTION (Website-Only)
         ========================================== */}
      <section id="services" className="agency-services">
        <div className="agency-container">
          <motion.div
            className="agency-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="agency-badge">Dedicated Web Services</div>
            <h2 className="agency-section-title">
              Website Solutions Built For <span>Maximum Growth</span>
            </h2>
            <p className="agency-section-subtitle">
              We specialize strictly in web design and development. From custom corporate sites to e-commerce,
              every page is built for speed, SEO ranking, and conversion.
            </p>
          </motion.div>

          <div className="agency-services-grid">
            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><Globe size={24} /></div>
                <h3 className="agency-service-title">Business Websites</h3>
                <p className="agency-service-desc">
                  Bespoke corporate websites engineered to establish authority, present services clearly, and turn traffic into high-value client leads.
                </p>
              </div>
              <div className="agency-service-tag"><Code2 size={13} /> Next.js / HTML5</div>
            </motion.div>

            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><ShoppingCart size={24} /></div>
                <h3 className="agency-service-title">E-Commerce Websites</h3>
                <p className="agency-service-desc">
                  High-converting storefronts built with seamless inventory navigation, fast checkout flows, and frictionless payment processing.
                </p>
              </div>
              <div className="agency-service-tag"><ShoppingCart size={13} /> Shopify / Headless Web</div>
            </motion.div>

            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><RefreshCw size={24} /></div>
                <h3 className="agency-service-title">Website Redesign</h3>
                <p className="agency-service-desc">
                  Transform slow, outdated sites into modern, high-speed growth engines with overhauled UX, zero SEO loss, and instant mobile responsiveness.
                </p>
              </div>
              <div className="agency-service-tag"><Layout size={13} /> Modern UI/UX Architecture</div>
            </motion.div>

            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><Zap size={24} /></div>
                <h3 className="agency-service-title">Landing Pages</h3>
                <p className="agency-service-desc">
                  Single-purpose marketing pages built specifically for ad campaigns, product launches, and lead capture with distraction-free user flows.
                </p>
              </div>
              <div className="agency-service-tag"><TrendingUp size={13} /> High-Conversion Rate UX</div>
            </motion.div>

            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><Search size={24} /></div>
                <h3 className="agency-service-title">SEO & Performance</h3>
                <p className="agency-service-desc">
                  Lighthouse 95+ speed optimization, clean semantic HTML schema, asset compression, and technical SEO structure for top Google rankings.
                </p>
              </div>
              <div className="agency-service-tag"><Gauge size={13} /> Core Web Vitals 95+</div>
            </motion.div>

            <motion.div className="agency-service-card">
              <div>
                <div className="agency-service-icon-box"><ShieldCheck size={24} /></div>
                <h3 className="agency-service-title">Website Maintenance</h3>
                <p className="agency-service-desc">
                  Proactive 24/7 uptime monitoring, security updates, daily backups, cloud hosting management, and ongoing monthly content updates.
                </p>
              </div>
              <div className="agency-service-tag"><ShieldCheck size={13} /> Managed Web Care</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. PROCESS & COMPARISON
         ========================================== */}
      <section id="process" className="agency-process-section">
        <div className="agency-container">
          <motion.div
            className="agency-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="agency-badge">How We Deliver Excellence</div>
            <h2 className="agency-section-title">
              Our 4-Step <span>High-Performance Process</span>
            </h2>
            <p className="agency-section-subtitle">
              We follow a streamlined, outcome-driven process to design, code, and deploy websites that outperform your competition.
            </p>
          </motion.div>

          <div className="agency-process-grid">
            <motion.div className="agency-process-card">
              <div className="agency-process-step-num">01</div>
              <div className="agency-service-icon-box" style={{ marginBottom: '12px' }}>
                <Compass size={22} />
              </div>
              <h3 className="agency-process-title">Strategy & Funnel Mapping</h3>
              <p className="agency-process-desc">
                We analyze your target market, user search intent, and customer journey to build a site map tailored for high lead conversion.
              </p>
            </motion.div>

            <motion.div className="agency-process-card">
              <div className="agency-process-step-num">02</div>
              <div className="agency-service-icon-box" style={{ marginBottom: '12px' }}>
                <Layers size={22} />
              </div>
              <h3 className="agency-process-title">Custom UI/UX Prototyping</h3>
              <p className="agency-process-desc">
                Bespoke visual design built around your brand identity. Zero generic page builders or clunky pre-made themes.
              </p>
            </motion.div>

            <motion.div className="agency-process-card">
              <div className="agency-process-step-num">03</div>
              <div className="agency-service-icon-box" style={{ marginBottom: '12px' }}>
                <Cpu size={22} />
              </div>
              <h3 className="agency-process-title">Sub-Second Web Coding</h3>
              <p className="agency-process-desc">
                Hand-crafted code built on modern web standards (Next.js/HTML5) delivering lightning 0.4s load times and 98+ PageSpeed scores.
              </p>
            </motion.div>

            <motion.div className="agency-process-card">
              <div className="agency-process-step-num">04</div>
              <div className="agency-service-icon-box" style={{ marginBottom: '12px' }}>
                <Rocket size={22} />
              </div>
              <h3 className="agency-process-title">SEO Schema & Launch</h3>
              <p className="agency-process-desc">
                Rigorous Core Web Vitals audit, full technical SEO tagging, mobile QA testing, and seamless cloud server deployment with zero downtime.
              </p>
            </motion.div>
          </div>

          <motion.div className="agency-comparison-box">
            <div className="agency-comparison-header">
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--agency-text-heading)', marginBottom: '6px' }}>
                Why Custom Web Wins Over Generic Templates
              </h3>
              <p style={{ color: 'var(--agency-text-body)', fontSize: '14px' }}>
                See how our custom-engineered websites stack up against standard off-the-shelf templates.
              </p>
            </div>

            <div className="agency-comparison-grid">
              <div className="agency-comparison-row">
                <div className="agency-comparison-feature">Page Load Speed</div>
                <div className="agency-comparison-bad"><XCircle size={16} /> 3.8s - Heavy & Slow</div>
                <div className="agency-comparison-good"><CheckCircle2 size={16} /> 0.4s - Ultra Fast ⚡</div>
              </div>

              <div className="agency-comparison-row">
                <div className="agency-comparison-feature">Google PageSpeed Score</div>
                <div className="agency-comparison-bad"><XCircle size={16} /> 42/100 (Red Zone)</div>
                <div className="agency-comparison-good"><CheckCircle2 size={16} /> 98-100/100 (Green Zone) 🎯</div>
              </div>

              <div className="agency-comparison-row">
                <div className="agency-comparison-feature">SEO & Search Indexing</div>
                <div className="agency-comparison-bad"><XCircle size={16} /> Bloated Code / Poor Schema</div>
                <div className="agency-comparison-good"><CheckCircle2 size={16} /> Clean Semantic SEO Architecture 🚀</div>
              </div>

              <div className="agency-comparison-row">
                <div className="agency-comparison-feature">Mobile User Experience</div>
                <div className="agency-comparison-bad"><XCircle size={16} /> Clunky Layout Shifts</div>
                <div className="agency-comparison-good"><CheckCircle2 size={16} /> Pixel-Perfect Touch Responsive 📱</div>
              </div>

              <div className="agency-comparison-row">
                <div className="agency-comparison-feature">Average Lead Conversion</div>
                <div className="agency-comparison-bad"><XCircle size={16} /> 1.1% Average Lead Rate</div>
                <div className="agency-comparison-good"><CheckCircle2 size={16} /> 4.2% High Conversion Rate 💰</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. CONTACT SECTION
         ========================================== */}
      <section id="contact" className="agency-contact-section">
        <div className="agency-container">
          <motion.div className="agency-section-header">
            <div className="agency-badge">Instant Project Discussion</div>
            <h2 className="agency-section-title">
              Ready To Build A <span>High-Performing Website?</span>
            </h2>
            <p className="agency-section-subtitle">
              Get an immediate estimate & project scope. Fill out the form below or contact our team directly.
            </p>
          </motion.div>

          <div className="agency-contact-wrapper">
            {/* Contact Info Details */}
            <motion.div className="agency-contact-info-box">
              <div>
                <h3 className="agency-contact-info-title">Reach Out Directly</h3>
                <p className="agency-contact-info-desc">
                  Have a new project requirement or an existing site that needs a performance boost? We are here to help.
                </p>

                <div className="agency-contact-details">
                  <div className="agency-contact-detail-item">
                    <div className="agency-contact-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="agency-contact-label">Call Us</div>
                      <a href="tel:+918502888838" className="agency-contact-val" style={{ textDecoration: 'none' }}>+91 8502888838</a>
                      <div className="agency-contact-val" style={{ fontSize: '13px', color: 'var(--agency-text-muted)' }}>
                        <a href="tel:+918502888839" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8502888839</a>
                      </div>
                    </div>
                  </div>

                  <div className="agency-contact-detail-item">
                    <div className="agency-contact-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="agency-contact-label">Email Us</div>
                      <a href="mailto:info@gatecode.in" className="agency-contact-val" style={{ textDecoration: 'none' }}>info@gatecode.in</a>
                      <div className="agency-contact-val" style={{ fontSize: '13px', color: 'var(--agency-text-muted)' }}>
                        <a href="mailto:support@gatecode.in" style={{ color: 'inherit', textDecoration: 'none' }}>support@gatecode.in</a>
                      </div>
                    </div>
                  </div>

                  <div className="agency-contact-detail-item">
                    <div className="agency-contact-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="agency-contact-label">Visit Us</div>
                      <div className="agency-contact-val">412, Sumer Nagar, Mansarovar, Jaipur, India</div>
                    </div>
                  </div>

                  <div className="agency-contact-detail-item">
                    <div className="agency-contact-icon">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="agency-contact-label">Office Hours</div>
                      <div className="agency-contact-val">Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div className="agency-contact-val" style={{ fontSize: '13px', color: 'var(--agency-text-muted)' }}>Sat: 10:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="agency-status-pill">
                <span className="agency-badge-dot" style={{ background: '#16a34a', boxShadow: '0 0 8px #16a34a' }} />
                Accepting new website projects for Q3
              </div>
            </motion.div>

            {/* Project Inquiry Form */}
            <motion.div style={{ flex: 1 }}>
              <ProjectInquiryForm buttonBg="#0fb9b1" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
