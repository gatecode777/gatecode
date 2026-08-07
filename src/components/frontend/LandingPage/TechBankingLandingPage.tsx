'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  Wifi,
  BarChart3,
  CreditCard,
  Cpu,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  Link2,
  Banknote,
  Server,
  Fingerprint,
  Globe,
  Activity,
  Rocket,
  Compass,
  Layers,
  MessageSquare,
  Check,
  RefreshCw,
  Database,
  Users,
  Code2,
  GitMerge
} from 'lucide-react';
import './TechBankingLandingPage.css';
import ProjectInquiryForm from './ProjectInquiryForm';
import ProjectInquiryModal from './ProjectInquiryModal';

export default function TechBankingLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/918502888838?text=${encodeURIComponent(
    'Hello Gatecode Team, I would like to discuss a technology / connected banking services project.'
  )}`;

  return (
    <div className="tb-page-root">
      <ProjectInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonBg="#0fb9b1"
      />
      {/* ==========================================
          1. HERO
         ========================================== */}
      <section className="tb-hero">
        <div className="tb-container">
          <motion.div
            className="tb-hero-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="tb-badge">
              <span className="tb-badge-dot" />
              Technology &amp; Connected Banking Solutions
            </div>

            <h1 className="tb-hero-headline">
              Powering Banks &amp; NBFCs With{' '}
              <span className="highlight-text">Next-Gen Tech Infrastructure</span>
            </h1>

            <p className="tb-hero-subheadline">
              We build custom core banking systems, digital lending platforms, payment gateway integrations,
              and connected financial APIs for banks, NBFCs, fintechs, and cooperative societies — RBI-compliant,
              secure, and built for high transaction volumes.
            </p>

            <div className="tb-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-btn tb-btn-primary"
              >
                Chat on WhatsApp Now
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => scrollToSection('process')}
                className="tb-btn tb-btn-secondary"
              >
                See How We Build
              </button>
            </div>
          </motion.div>

          {/* Banking Dashboard Mockup */}
          <motion.div
            className="tb-dashboard-wrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="tb-dashboard-mockup">
              <div className="tb-dash-topbar">
                <div className="tb-dash-dots">
                  <span className="tb-dot tb-dot-red" />
                  <span className="tb-dot tb-dot-yellow" />
                  <span className="tb-dot tb-dot-green" />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Landmark size={14} />
                  Core Banking Platform — Gatecode Financial Suite
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', background: 'rgba(22,163,74,0.1)', padding: '3px 10px', borderRadius: 100 }}>
                  ● Live | RBI Compliant
                </div>
              </div>

              <div className="tb-dash-body">
                {/* Sidebar */}
                <div className="tb-dash-sidebar">
                  <div className="tb-dash-sidebar-logo">🏦 FinCore Pro</div>
                  <div className="tb-dash-nav-item active"><BarChart3 size={13} /> Dashboard</div>
                  <div className="tb-dash-nav-item"><Users size={13} /> Customers</div>
                  <div className="tb-dash-nav-item"><CreditCard size={13} /> Loans</div>
                  <div className="tb-dash-nav-item"><Banknote size={13} /> Transactions</div>
                  <div className="tb-dash-nav-item"><Link2 size={13} /> API Connections</div>
                  <div className="tb-dash-nav-item"><Lock size={13} /> Compliance</div>
                  <div className="tb-dash-nav-item"><Server size={13} /> Reporting</div>
                </div>

                {/* Content */}
                <div className="tb-dash-content">
                  <div className="tb-dash-greeting">📊 Today&apos;s Banking Operations — Real-time View</div>

                  <div className="tb-dash-cards">
                    <div className="tb-dash-card">
                      <div className="tb-dash-card-val">₹4.2Cr</div>
                      <div className="tb-dash-card-lbl">Total Disbursements Today</div>
                    </div>
                    <div className="tb-dash-card">
                      <div className="tb-dash-card-val">12,480</div>
                      <div className="tb-dash-card-lbl">Active Loan Accounts</div>
                    </div>
                    <div className="tb-dash-card">
                      <div className="tb-dash-card-val">99.97%</div>
                      <div className="tb-dash-card-lbl">Transaction Success Rate</div>
                    </div>
                  </div>

                  <div className="tb-dash-txn-row">
                    <span className="tb-dash-txn-name">NEFT — Rahul Sharma / HDFC #5521</span>
                    <span className="tb-dash-txn-type">● Settled</span>
                    <span className="tb-dash-txn-amt">+ ₹1,20,000</span>
                  </div>
                  <div className="tb-dash-txn-row">
                    <span className="tb-dash-txn-name">Loan EMI — Meera Gupta / L-00482</span>
                    <span className="tb-dash-txn-type">● Auto Debit</span>
                    <span className="tb-dash-txn-amt">+ ₹18,500</span>
                  </div>
                  <div className="tb-dash-txn-row">
                    <span className="tb-dash-txn-name">UPI Collect — Kiran Textile Co.</span>
                    <span className="tb-dash-txn-type">● Received</span>
                    <span className="tb-dash-txn-amt">+ ₹3,40,000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="tb-stat-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="tb-stat-item">
              <div className="tb-stat-number">40+</div>
              <div className="tb-stat-label">Banking Tech Projects</div>
            </div>
            <div className="tb-stat-item">
              <div className="tb-stat-number">₹500Cr+</div>
              <div className="tb-stat-label">Transactions Processed</div>
            </div>
            <div className="tb-stat-item">
              <div className="tb-stat-number">99.97%</div>
              <div className="tb-stat-label">Uptime SLA</div>
            </div>
            <div className="tb-stat-item">
              <div className="tb-stat-number">RBI</div>
              <div className="tb-stat-label">Compliance Ready</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          TRUSTED BY STRIP
         ========================================== */}
      <section className="tb-clients-strip">
        <div className="tb-container">
          <div className="tb-clients-label">Trusted By Financial Institutions Across India</div>
          <div className="tb-clients-logos">
            <div className="tb-client-pill"><Landmark size={14} /> Cooperative Banks</div>
            <div className="tb-client-pill"><CreditCard size={14} /> NBFCs</div>
            <div className="tb-client-pill"><Wifi size={14} /> Fintech Startups</div>
            <div className="tb-client-pill"><Banknote size={14} /> Microfinance Institutions</div>
            <div className="tb-client-pill"><Globe size={14} /> Digital Lending Platforms</div>
            <div className="tb-client-pill"><Activity size={14} /> Payment Aggregators</div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. SERVICES
         ========================================== */}
      <section id="services" className="tb-services">
        <div className="tb-container">
          <motion.div
            className="tb-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="tb-badge">Banking Technology Services</div>
            <h2 className="tb-section-title">
              End-to-End <span>Financial Technology Solutions</span>
            </h2>
            <p className="tb-section-subtitle">
              From core banking modernization to real-time connected APIs, we engineer secure financial technology infrastructure
              purpose-built for Indian banking regulations and high-volume transaction environments.
            </p>
          </motion.div>

          <div className="tb-services-grid">
            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><Landmark size={24} /></div>
                <h3 className="tb-service-title">Core Banking System</h3>
                <p className="tb-service-desc">
                  Custom-built core banking platforms for cooperative banks, NBFCs, and microfinance institutions — covering account management, loan origination, GL ledger, and daily batch processing.
                </p>
              </div>
              <div className="tb-service-tag"><Database size={13} /> Custom CBS Architecture</div>
            </motion.div>

            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><Link2 size={24} /></div>
                <h3 className="tb-service-title">Connected Banking APIs</h3>
                <p className="tb-service-desc">
                  NPCI-standard API integration for UPI, NACH, IMPS, NEFT, RTGS, and Aadhaar eKYC. Connect your banking stack to national payment infrastructure with real-time settlement handling.
                </p>
              </div>
              <div className="tb-service-tag"><Wifi size={13} /> NPCI / UPI / NACH Integration</div>
            </motion.div>

            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><CreditCard size={24} /></div>
                <h3 className="tb-service-title">Digital Lending Platform</h3>
                <p className="tb-service-desc">
                  End-to-end digital loan origination systems with bureau integrations (CIBIL, Experian), automated credit scoring, e-sign via Aadhaar, and real-time disbursement workflows.
                </p>
              </div>
              <div className="tb-service-tag"><Code2 size={13} /> AI-Powered Credit Engine</div>
            </motion.div>

            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><Fingerprint size={24} /></div>
                <h3 className="tb-service-title">KYC & Compliance Tech</h3>
                <p className="tb-service-desc">
                  Automated Aadhaar OTP eKYC, Video KYC (V-KYC), PAN validation, and AML/CFT monitoring dashboards. Full RBI KYC Master Direction compliance built into your onboarding flow.
                </p>
              </div>
              <div className="tb-service-tag"><ShieldCheck size={13} /> RBI KYC Compliant</div>
            </motion.div>

            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><BarChart3 size={24} /></div>
                <h3 className="tb-service-title">Banking Analytics & MIS</h3>
                <p className="tb-service-desc">
                  Real-time MIS dashboards, RBI regulatory reporting (Basel III, CRAR), branch-wise portfolio analytics, NPA tracking, and automated month-end reporting for banking audits.
                </p>
              </div>
              <div className="tb-service-tag"><Activity size={13} /> Regulatory MIS Reporting</div>
            </motion.div>

            <motion.div className="tb-service-card">
              <div>
                <div className="tb-service-icon-box"><RefreshCw size={24} /></div>
                <h3 className="tb-service-title">Legacy Banking Modernization</h3>
                <p className="tb-service-desc">
                  Migrate legacy CBS (Finacle, BaNCS, Flexcube) to modern microservices architecture with zero downtime data migration, API-first architecture, and cloud-native infrastructure.
                </p>
              </div>
              <div className="tb-service-tag"><GitMerge size={13} /> Cloud-Native Migration</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          COMPLIANCE STRIP
         ========================================== */}
      <section className="tb-compliance-strip">
        <div className="tb-container">
          <motion.div
            className="tb-section-header"
            style={{ marginBottom: 24 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="tb-badge">Built-In Regulatory Compliance</div>
            <h2 className="tb-section-title" style={{ fontSize: 26 }}>
              Every System We Build Is <span>Compliance-First</span>
            </h2>
          </motion.div>

          <div className="tb-compliance-grid">
            <div className="tb-compliance-card">
              <div className="tb-compliance-icon"><ShieldCheck size={20} /></div>
              <div className="tb-compliance-name">RBI Guidelines</div>
              <div className="tb-compliance-desc">IT Framework for Banks, IS Audit, Cybersecurity Policy</div>
            </div>
            <div className="tb-compliance-card">
              <div className="tb-compliance-icon"><Lock size={20} /></div>
              <div className="tb-compliance-name">PCI-DSS</div>
              <div className="tb-compliance-desc">Payment card industry data security standard compliance</div>
            </div>
            <div className="tb-compliance-card">
              <div className="tb-compliance-icon"><Fingerprint size={20} /></div>
              <div className="tb-compliance-name">KYC Master Direction</div>
              <div className="tb-compliance-desc">Aadhaar eKYC, V-KYC, CERSAI, CKYCR integration</div>
            </div>
            <div className="tb-compliance-card">
              <div className="tb-compliance-icon"><Server size={20} /></div>
              <div className="tb-compliance-name">Data Localisation</div>
              <div className="tb-compliance-desc">All payment data stored in India — RBI data residency compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. PROCESS & COMPARISON
         ========================================== */}
      <section id="process" className="tb-process-section">
        <div className="tb-container">
          <motion.div
            className="tb-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="tb-badge">Our Banking Tech Delivery Model</div>
            <h2 className="tb-section-title">
              4-Phase <span>Compliant Delivery Process</span>
            </h2>
            <p className="tb-section-subtitle">
              A specialized delivery framework designed for the strict regulatory, security, and data requirements of financial institutions.
            </p>
          </motion.div>

          <div className="tb-process-grid">
            <div className="tb-process-card">
              <div className="tb-process-step-num">01</div>
              <div className="tb-service-icon-box" style={{ marginBottom: 12 }}><Compass size={22} /></div>
              <h3 className="tb-process-title">Banking Audit & Gap Analysis</h3>
              <p className="tb-process-desc">
                In-depth review of your existing CBS, IT infrastructure, API dependencies, and regulatory compliance gaps before any code is written.
              </p>
            </div>

            <div className="tb-process-card">
              <div className="tb-process-step-num">02</div>
              <div className="tb-service-icon-box" style={{ marginBottom: 12 }}><Layers size={22} /></div>
              <h3 className="tb-process-title">Architecture & Security Design</h3>
              <p className="tb-process-desc">
                Design a multi-tier, encrypted system architecture with HSM key management, role-based access, audit trail, and disaster recovery plan approved by your IT committee.
              </p>
            </div>

            <div className="tb-process-card">
              <div className="tb-process-step-num">03</div>
              <div className="tb-service-icon-box" style={{ marginBottom: 12 }}><Cpu size={22} /></div>
              <h3 className="tb-process-title">Secure Agile Development</h3>
              <p className="tb-process-desc">
                2-week sprints with dedicated UAT environments, end-to-end encryption, penetration testing, and VAPT audit at each phase milestone.
              </p>
            </div>

            <div className="tb-process-card">
              <div className="tb-process-step-num">04</div>
              <div className="tb-service-icon-box" style={{ marginBottom: 12 }}><Rocket size={22} /></div>
              <h3 className="tb-process-title">Parallel Run & Go-Live</h3>
              <p className="tb-process-desc">
                Zero-downtime parallel run migration, staff training, RBI IS Audit documentation package, and 24/7 critical support SLA post-launch.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div className="tb-comparison-box">
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--tb-text-heading)', marginBottom: 6 }}>
                Custom Banking Tech vs Off-The-Shelf Core Banking Software
              </h3>
              <p style={{ color: 'var(--tb-text-body)', fontSize: 14 }}>
                See why leading NBFCs and cooperative banks choose purpose-built solutions over generic CBS packages.
              </p>
            </div>

            <div className="tb-comparison-grid">
              <div className="tb-comparison-row">
                <div className="tb-comparison-feature">Regulatory Customization</div>
                <div className="tb-comparison-bad"><XCircle size={16} /> Generic modules, slow RBI updates</div>
                <div className="tb-comparison-good"><CheckCircle2 size={16} /> Built to your exact RBI circular 🏛️</div>
              </div>

              <div className="tb-comparison-row">
                <div className="tb-comparison-feature">NPCI / UPI Integration</div>
                <div className="tb-comparison-bad"><XCircle size={16} /> Expensive licensed middleware</div>
                <div className="tb-comparison-good"><CheckCircle2 size={16} /> Direct NPCI API — zero middleman ⚡</div>
              </div>

              <div className="tb-comparison-row">
                <div className="tb-comparison-feature">Licensing Cost</div>
                <div className="tb-comparison-bad"><XCircle size={16} /> ₹20L–₹2Cr/year per module</div>
                <div className="tb-comparison-good"><CheckCircle2 size={16} /> One-time build, no recurring license 💰</div>
              </div>

              <div className="tb-comparison-row">
                <div className="tb-comparison-feature">Data Ownership</div>
                <div className="tb-comparison-bad"><XCircle size={16} /> Vendor-hosted, data lock-in risk</div>
                <div className="tb-comparison-good"><CheckCircle2 size={16} /> Your servers, your 100% data control 🔒</div>
              </div>

              <div className="tb-comparison-row">
                <div className="tb-comparison-feature">Custom Loan Products</div>
                <div className="tb-comparison-bad"><XCircle size={16} /> Restricted to vendor product catalogue</div>
                <div className="tb-comparison-good"><CheckCircle2 size={16} /> Any product, any interest model 🎯</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. CONTACT
         ========================================== */}
      <section id="contact" className="tb-contact-section">
        <div className="tb-container">
          <motion.div className="tb-section-header">
            <div className="tb-badge">Start Your Banking Tech Project</div>
            <h2 className="tb-section-title">
              Ready To Modernize Your <span>Financial Infrastructure?</span>
            </h2>
            <p className="tb-section-subtitle">
              Talk directly to our banking technology architect — get a free compliance gap assessment and project roadmap.
            </p>
          </motion.div>

          <div className="tb-contact-wrapper">
            {/* Info Box */}
            <motion.div className="tb-contact-info-box">
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--tb-text-heading)', marginBottom: 12 }}>
                  Reach Out Directly
                </h3>
                <p style={{ fontSize: 15, color: 'var(--tb-text-body)', marginBottom: 24, lineHeight: 1.6 }}>
                  Whether you are an NBFC, cooperative bank, microfinance institution, or fintech startup — we have delivered banking tech across all scales.
                </p>

                <div>
                  <div className="tb-contact-detail-item">
                    <div className="tb-contact-icon"><Phone size={18} /></div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--tb-text-muted)', textTransform: 'uppercase', marginBottom: 3 }}>Call Us</div>
                      <a href="tel:+918502888838" style={{ display: 'block', fontWeight: 600, color: 'var(--tb-text-heading)', textDecoration: 'none', fontSize: 15 }}>+91 8502888838</a>
                      <a href="tel:+918502888839" style={{ display: 'block', fontWeight: 600, color: 'var(--tb-text-muted)', textDecoration: 'none', fontSize: 13 }}>+91 8502888839</a>
                    </div>
                  </div>

                  <div className="tb-contact-detail-item">
                    <div className="tb-contact-icon"><Mail size={18} /></div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--tb-text-muted)', textTransform: 'uppercase', marginBottom: 3 }}>Email Us</div>
                      <a href="mailto:info@gatecode.in" style={{ display: 'block', fontWeight: 600, color: 'var(--tb-text-heading)', textDecoration: 'none', fontSize: 15 }}>info@gatecode.in</a>
                      <a href="mailto:support@gatecode.in" style={{ display: 'block', fontWeight: 600, color: 'var(--tb-text-muted)', textDecoration: 'none', fontSize: 13 }}>support@gatecode.in</a>
                    </div>
                  </div>

                  <div className="tb-contact-detail-item">
                    <div className="tb-contact-icon"><MapPin size={18} /></div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--tb-text-muted)', textTransform: 'uppercase', marginBottom: 3 }}>Visit Us</div>
                      <div style={{ fontWeight: 600, color: 'var(--tb-text-heading)', fontSize: 15 }}>412, Sumer Nagar, Mansarovar, Jaipur, India</div>
                    </div>
                  </div>

                  <div className="tb-contact-detail-item">
                    <div className="tb-contact-icon"><Clock size={18} /></div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--tb-text-muted)', textTransform: 'uppercase', marginBottom: 3 }}>Office Hours</div>
                      <div style={{ fontWeight: 600, color: 'var(--tb-text-heading)', fontSize: 15 }}>Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div style={{ fontWeight: 600, color: 'var(--tb-text-muted)', fontSize: 13 }}>Sat: 10:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '8px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', color: '#16a34a', fontWeight: 600, fontSize: 13, display: 'inline-block' }}>
                ● Accepting new banking technology engagements
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
