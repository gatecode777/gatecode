'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Users,
  BarChart3,
  Workflow,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Code2,
  Server,
  Lock,
  Boxes,
  MessageSquare,
  Check,
  Layers,
  Rocket,
  Compass,
  Settings2,
  GitMerge
} from 'lucide-react';
import './CrmLandingPage.css';
import ProjectInquiryForm from './ProjectInquiryForm';

export default function CrmLandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/918502888838?text=${encodeURIComponent('Hello Gatecode Team, I would like to discuss a custom CRM / enterprise software project.')}`;

  return (
    <div className="crm-page-root">

      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="crm-hero">
        <div className="crm-container">
          <motion.div
            className="crm-hero-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="crm-badge">
              <span className="crm-badge-dot" />
              Custom CRM & Enterprise Software
            </div>

            <h1 className="crm-hero-headline">
              Enterprise Software Built Around{' '}
              <span className="highlight-text">Your Business Workflow</span>
            </h1>

            <p className="crm-hero-subheadline">
              We engineer custom CRM systems, ERP platforms, and bespoke enterprise software that replace
              generic SaaS tools. 100% tailored to your data, workflows, and team — zero bloat, full control.
            </p>

            <div className="crm-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crm-btn crm-btn-primary"
              >
                Chat on WhatsApp Now
                <ArrowRight size={18} />
              </a>

              <button
                onClick={() => scrollToSection('process')}
                className="crm-btn crm-btn-secondary"
              >
                How We Build Software
              </button>
            </div>
          </motion.div>

          {/* CRM Dashboard Mockup */}
          <motion.div
            className="crm-dashboard-wrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="crm-dashboard-mockup">
              <div className="crm-dash-topbar">
                <div className="crm-dash-dots">
                  <span className="crm-dot crm-dot-red" />
                  <span className="crm-dot crm-dot-yellow" />
                  <span className="crm-dot crm-dot-green" />
                </div>
                <div className="crm-dash-title-row">
                  <Database size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
                  CRM Dashboard — Gatecode Enterprise
                </div>
                <div style={{ fontSize: '12px', color: '#059669', fontWeight: 700, background: 'rgba(5,150,105,0.1)', padding: '3px 10px', borderRadius: 100 }}>
                  ● Live
                </div>
              </div>

              <div className="crm-dash-body">
                {/* Sidebar */}
                <div className="crm-dash-sidebar">
                  <div className="crm-dash-nav-item active"><Users size={13} /> Contacts</div>
                  <div className="crm-dash-nav-item"><BarChart3 size={13} /> Pipeline</div>
                  <div className="crm-dash-nav-item"><Workflow size={13} /> Automation</div>
                  <div className="crm-dash-nav-item"><Settings2 size={13} /> Integrations</div>
                  <div className="crm-dash-nav-item"><Lock size={13} /> Permissions</div>
                  <div className="crm-dash-nav-item"><Server size={13} /> Reports</div>
                </div>

                {/* Main Content */}
                <div className="crm-dash-content">
                  <div className="crm-dash-metrics">
                    <div className="crm-dash-metric-card">
                      <div className="crm-dash-metric-val">1,247</div>
                      <div className="crm-dash-metric-lbl">Total Active Leads</div>
                    </div>
                    <div className="crm-dash-metric-card">
                      <div className="crm-dash-metric-val">₹84.2L</div>
                      <div className="crm-dash-metric-lbl">Pipeline Revenue</div>
                    </div>
                    <div className="crm-dash-metric-card">
                      <div className="crm-dash-metric-val">94%</div>
                      <div className="crm-dash-metric-lbl">Automation Success Rate</div>
                    </div>
                  </div>

                  <div className="crm-dash-table-row">
                    <span className="crm-dash-table-label">Priya Sharma — TechCorp India</span>
                    <span className="crm-dash-table-status">● Proposal Sent</span>
                    <span className="crm-dash-table-val">₹3,20,000</span>
                  </div>
                  <div className="crm-dash-table-row">
                    <span className="crm-dash-table-label">Raj Mehta — Nexus Solutions</span>
                    <span className="crm-dash-table-status">● Demo Scheduled</span>
                    <span className="crm-dash-table-val">₹1,85,000</span>
                  </div>
                  <div className="crm-dash-table-row">
                    <span className="crm-dash-table-label">Anita Singh — BuildFast Pvt</span>
                    <span className="crm-dash-table-status">● Deal Won ✓</span>
                    <span className="crm-dash-table-val">₹5,60,000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Row */}
          <motion.div
            className="crm-stat-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="crm-stat-item">
              <div className="crm-stat-number">60+</div>
              <div className="crm-stat-label">Enterprise Products Delivered</div>
            </div>
            <div className="crm-stat-item">
              <div className="crm-stat-number">40%</div>
              <div className="crm-stat-label">Avg Operational Cost Savings</div>
            </div>
            <div className="crm-stat-item">
              <div className="crm-stat-number">99.8%</div>
              <div className="crm-stat-label">System Uptime SLA</div>
            </div>
            <div className="crm-stat-item">
              <div className="crm-stat-number">4.9/5★</div>
              <div className="crm-stat-label">Client Satisfaction Score</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. SERVICES SECTION
         ========================================== */}
      <section id="services" className="crm-services">
        <div className="crm-container">
          <motion.div
            className="crm-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="crm-badge">Enterprise Software Services</div>
            <h2 className="crm-section-title">
              Custom Systems Built For <span>Operational Efficiency</span>
            </h2>
            <p className="crm-section-subtitle">
              We build enterprise-grade software that replaces fragmented SaaS subscriptions with a single,
              unified system — tailored entirely to your business logic and data structure.
            </p>
          </motion.div>

          <div className="crm-services-grid">
            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><Users size={24} /></div>
                <h3 className="crm-service-title">Custom CRM Systems</h3>
                <p className="crm-service-desc">
                  Full-featured customer relationship management platforms with pipeline management, automated follow-ups, lead scoring, and territory assignment — designed around your sales cycle.
                </p>
              </div>
              <div className="crm-service-tag"><Database size={13} /> Custom Data Architecture</div>
            </motion.div>

            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><Boxes size={24} /></div>
                <h3 className="crm-service-title">ERP & Inventory Software</h3>
                <p className="crm-service-desc">
                  Integrated enterprise resource planning with stock control, multi-location warehouse management, purchase order automation, and real-time financial tracking.
                </p>
              </div>
              <div className="crm-service-tag"><Boxes size={13} /> Real-Time Inventory Engine</div>
            </motion.div>

            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><Workflow size={24} /></div>
                <h3 className="crm-service-title">Business Process Automation</h3>
                <p className="crm-service-desc">
                  Eliminate manual workflows with intelligent automation for approvals, notifications, document generation, task routing, and multi-step process triggers.
                </p>
              </div>
              <div className="crm-service-tag"><GitMerge size={13} /> Workflow Automation Engine</div>
            </motion.div>

            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><BarChart3 size={24} /></div>
                <h3 className="crm-service-title">Analytics & BI Dashboards</h3>
                <p className="crm-service-desc">
                  Interactive business intelligence dashboards with real-time KPI tracking, custom reports, revenue forecasting, and drill-down data visualization built for decision makers.
                </p>
              </div>
              <div className="crm-service-tag"><BarChart3 size={13} /> Live BI Reporting</div>
            </motion.div>

            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><Cpu size={24} /></div>
                <h3 className="crm-service-title">API & Third-Party Integration</h3>
                <p className="crm-service-desc">
                  Connect your custom software with payment gateways, WhatsApp Business API, accounting tools like Tally/Zoho, logistics APIs, and existing enterprise systems.
                </p>
              </div>
              <div className="crm-service-tag"><Code2 size={13} /> Headless API Architecture</div>
            </motion.div>

            <motion.div className="crm-service-card">
              <div>
                <div className="crm-service-icon-box"><ShieldCheck size={24} /></div>
                <h3 className="crm-service-title">Enterprise Security & Hosting</h3>
                <p className="crm-service-desc">
                  Role-based access control, end-to-end data encryption, audit trail logging, GDPR compliance, automated daily backups, and 99.8% SLA-backed cloud infrastructure.
                </p>
              </div>
              <div className="crm-service-tag"><Lock size={13} /> SOC-2 Level Security</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. PROCESS & COMPARISON
         ========================================== */}
      <section id="process" className="crm-process-section">
        <div className="crm-container">
          <motion.div
            className="crm-section-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="crm-badge">How We Engineer Enterprise Solutions</div>
            <h2 className="crm-section-title">
              Our 4-Step <span>Enterprise Software Delivery</span>
            </h2>
            <p className="crm-section-subtitle">
              A battle-tested agile delivery process designed for complex enterprise requirements and zero-downtime production launches.
            </p>
          </motion.div>

          <div className="crm-process-grid">
            <motion.div className="crm-process-card">
              <div className="crm-process-step-num">01</div>
              <div className="crm-service-icon-box" style={{ marginBottom: '12px' }}>
                <Compass size={22} />
              </div>
              <h3 className="crm-process-title">Discovery & Process Mapping</h3>
              <p className="crm-process-desc">
                Deep-dive into your current workflows, team structure, and data flows to architect a system that mirrors and improves your actual operations.
              </p>
            </motion.div>

            <motion.div className="crm-process-card">
              <div className="crm-process-step-num">02</div>
              <div className="crm-service-icon-box" style={{ marginBottom: '12px' }}>
                <Layers size={22} />
              </div>
              <h3 className="crm-process-title">Data Modeling & UI Design</h3>
              <p className="crm-process-desc">
                Custom database schema design, entity-relationship modeling, and pixel-perfect enterprise UI design approved by your team before a single line of code is written.
              </p>
            </motion.div>

            <motion.div className="crm-process-card">
              <div className="crm-process-step-num">03</div>
              <div className="crm-service-icon-box" style={{ marginBottom: '12px' }}>
                <Cpu size={22} />
              </div>
              <h3 className="crm-process-title">Agile Engineering Sprints</h3>
              <p className="crm-process-desc">
                2-week sprint cycles with live demos after each sprint, ensuring full transparency, predictable delivery, and zero scope surprise at project end.
              </p>
            </motion.div>

            <motion.div className="crm-process-card">
              <div className="crm-process-step-num">04</div>
              <div className="crm-service-icon-box" style={{ marginBottom: '12px' }}>
                <Rocket size={22} />
              </div>
              <h3 className="crm-process-title">Deployment, Training & Support</h3>
              <p className="crm-process-desc">
                Zero-downtime production deployment, live team training sessions, documentation, and ongoing maintenance SLA with a dedicated support engineer.
              </p>
            </motion.div>
          </div>

          <motion.div className="crm-comparison-box">
            <div className="crm-comparison-header">
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--crm-text-heading)', marginBottom: '6px' }}>
                Custom Software vs Off-The-Shelf SaaS Products
              </h3>
              <p style={{ color: 'var(--crm-text-body)', fontSize: '14px' }}>
                See how a purpose-built solution compares to generic, one-size-fits-all SaaS subscriptions.
              </p>
            </div>

            <div className="crm-comparison-grid">
              <div className="crm-comparison-row">
                <div className="crm-comparison-feature">Data Ownership & Control</div>
                <div className="crm-comparison-bad"><XCircle size={16} /> Locked In Vendor's Servers</div>
                <div className="crm-comparison-good"><CheckCircle2 size={16} /> 100% Your Data, Your Servers 🔒</div>
              </div>

              <div className="crm-comparison-row">
                <div className="crm-comparison-feature">Feature Customization</div>
                <div className="crm-comparison-bad"><XCircle size={16} /> Fixed Modules, No Flexibility</div>
                <div className="crm-comparison-good"><CheckCircle2 size={16} /> Every Feature Built To Spec 🎯</div>
              </div>

              <div className="crm-comparison-row">
                <div className="crm-comparison-feature">Monthly SaaS Licensing Cost</div>
                <div className="crm-comparison-bad"><XCircle size={16} /> ₹50K–₹2L/month Forever</div>
                <div className="crm-comparison-good"><CheckCircle2 size={16} /> One-Time Build Cost, Zero Recurring 💰</div>
              </div>

              <div className="crm-comparison-row">
                <div className="crm-comparison-feature">Workflow & Process Match</div>
                <div className="crm-comparison-bad"><XCircle size={16} /> Adapt Your Business to Software</div>
                <div className="crm-comparison-good"><CheckCircle2 size={16} /> Software Adapts to Your Business 🚀</div>
              </div>

              <div className="crm-comparison-row">
                <div className="crm-comparison-feature">Integration & API Access</div>
                <div className="crm-comparison-bad"><XCircle size={16} /> Limited Premium Add-Ons Required</div>
                <div className="crm-comparison-good"><CheckCircle2 size={16} /> Native Integrations to Any System ⚙️</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. CONTACT SECTION
         ========================================== */}
      <section id="contact" className="crm-contact-section">
        <div className="crm-container">
          <motion.div className="crm-section-header">
            <div className="crm-badge">Start Your Enterprise Project</div>
            <h2 className="crm-section-title">
              Ready To Build A <span>Custom Software System?</span>
            </h2>
            <p className="crm-section-subtitle">
              Skip long inquiry forms. Talk directly with our senior software architect on WhatsApp or phone — get a free scope assessment.
            </p>
          </motion.div>

          <div className="crm-contact-wrapper">
            {/* Contact Info */}
            <motion.div className="crm-contact-info-box">
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--crm-text-heading)', marginBottom: '12px' }}>
                  Reach Out Directly
                </h3>
                <p style={{ marginBottom: '20px', fontSize: '15px', color: 'var(--crm-text-body)' }}>
                  From single-module CRM tools to full enterprise ERP platforms — we have built it all and can build yours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--crm-teal-light)', border: '1px solid var(--crm-teal-border)', color: 'var(--crm-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--crm-text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>Call Us</div>
                      <a href="tel:+918502888838" style={{ fontSize: 15, fontWeight: 600, color: 'var(--crm-text-heading)', display: 'block', textDecoration: 'none' }}>+91 8502888838</a>
                      <a href="tel:+918502888839" style={{ fontSize: 13, fontWeight: 600, color: 'var(--crm-text-muted)', display: 'block', textDecoration: 'none' }}>+91 8502888839</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--crm-teal-light)', border: '1px solid var(--crm-teal-border)', color: 'var(--crm-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--crm-text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>Email Us</div>
                      <a href="mailto:info@gatecode.in" style={{ fontSize: 15, fontWeight: 600, color: 'var(--crm-text-heading)', display: 'block', textDecoration: 'none' }}>info@gatecode.in</a>
                      <a href="mailto:support@gatecode.in" style={{ fontSize: 13, fontWeight: 600, color: 'var(--crm-text-muted)', display: 'block', textDecoration: 'none' }}>support@gatecode.in</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--crm-teal-light)', border: '1px solid var(--crm-teal-border)', color: 'var(--crm-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--crm-text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>Visit Us</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--crm-text-heading)' }}>412, Sumer Nagar, Mansarovar, Jaipur, India</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--crm-teal-light)', border: '1px solid var(--crm-teal-border)', color: 'var(--crm-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--crm-text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>Office Hours</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--crm-text-heading)' }}>Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--crm-text-muted)' }}>Sat: 10:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '8px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', color: '#16a34a', fontWeight: 600, fontSize: 13, display: 'inline-block' }}>
                ● Accepting new enterprise CRM & software projects
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
