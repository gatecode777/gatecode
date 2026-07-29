'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Tablet,
  Cpu,
  Zap,
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
  Layers,
  Rocket,
  Activity,
  Layers3,
  MessageSquare,
  Check
} from 'lucide-react';
import './AppLandingPage.css';

export default function AppLandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/918502888838?text=${encodeURIComponent('Hello Gatecode Team, I would like to discuss a mobile app development project.')}`;

  return (
    <div className="app-page-root">
      {/* HERO SECTION */}
      <section className="app-hero">
        <div className="app-container">
          <motion.div
            className="app-hero-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="app-badge">
              <span className="app-badge-dot" />
              Custom iOS & Android Mobile Apps
            </div>

            <h1 className="app-hero-headline">
              Mobile Apps Engineered For{' '}
              <span className="highlight-text">High Scale & Engagement</span>
            </h1>

            <p className="app-hero-subheadline">
              We design and develop native iOS, Android, and cross-platform Flutter/React Native mobile applications.
              Built for 60fps fluid performance, offline data sync, and instant App Store approval.
            </p>

            <div className="app-hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="app-btn app-btn-primary"
              >
                Chat on WhatsApp Now
                <ArrowRight size={18} />
              </a>

              <button
                onClick={() => scrollToSection('process')}
                className="app-btn app-btn-secondary"
              >
                How We Build Apps
              </button>
            </div>
          </motion.div>

          {/* Mobile Phone Mockup Showcase */}
          <motion.div
            className="app-phone-wrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="app-phone-mockup">
              <div className="app-phone-notch" />
              <div className="app-phone-screen">
                <div>
                  <div className="app-screen-nav">
                    <span className="app-screen-title">📱 PulseFit App</span>
                    <Activity size={18} style={{ color: 'var(--app-teal)' }} />
                  </div>

                  <div className="app-screen-card">
                    <div className="app-screen-metric">99.9%</div>
                    <div className="app-screen-lbl">Uptime & Crash-Free Rate</div>
                  </div>

                  <div className="app-screen-card">
                    <div className="app-screen-metric">60 FPS</div>
                    <div className="app-screen-lbl">Fluid Native Animations</div>
                  </div>
                </div>

                <div className="app-screen-action">
                  Launch Native iOS & Android App
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Row */}
          <motion.div
            className="app-stat-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="app-stat-item">
              <div className="app-stat-number">80+</div>
              <div className="app-stat-label">Mobile Apps Launched</div>
            </div>
            <div className="app-stat-item">
              <div className="app-stat-number">4.9/5★</div>
              <div className="app-stat-label">App Store Average Rating</div>
            </div>
            <div className="app-stat-item">
              <div className="app-stat-number">99.9%</div>
              <div className="app-stat-label">Crash-Free Execution</div>
            </div>
            <div className="app-stat-item">
              <div className="app-stat-number">2M+</div>
              <div className="app-stat-label">Active Users Served</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="app-services">
        <div className="app-container">
          <motion.div className="app-section-header">
            <div className="app-badge">Mobile Engineering Services</div>
            <h2 className="app-section-title">
              Full-Lifecycle <span>App Solutions</span>
            </h2>
            <p className="app-section-subtitle">
              From initial product architecture to app store deployment, we build high-performing mobile apps tailored for iOS & Android.
            </p>
          </motion.div>

          <div className="app-services-grid">
            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><Smartphone size={24} /></div>
                <h3 className="app-service-title">iOS Native Apps</h3>
                <p className="app-service-desc">
                  Swift & Swift UI native iOS apps engineered for Apple ecosystem integration, FaceID, Apple Pay, and iPad optimization.
                </p>
              </div>
              <div className="app-service-tag"><Code2 size={13} /> Swift / iOS SDK</div>
            </motion.div>

            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><Tablet size={24} /></div>
                <h3 className="app-service-title">Android Native Apps</h3>
                <p className="app-service-desc">
                  Kotlin native Android applications optimized for hardware acceleration, background services, and diverse screen sizes.
                </p>
              </div>
              <div className="app-service-tag"><Code2 size={13} /> Kotlin / Jetpack</div>
            </motion.div>

            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><Layers3 size={24} /></div>
                <h3 className="app-service-title">Cross-Platform Apps</h3>
                <p className="app-service-desc">
                  Single codebase cross-platform apps built with React Native or Flutter, delivering 95%+ code sharing without speed compromises.
                </p>
              </div>
              <div className="app-service-tag"><Layers size={13} /> React Native / Flutter</div>
            </motion.div>

            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><Cpu size={24} /></div>
                <h3 className="app-service-title">App UI/UX Engineering</h3>
                <p className="app-service-desc">
                  Intuitive touch-first mobile interfaces, custom gesture controls, dark mode support, and micro-interaction animations.
                </p>
              </div>
              <div className="app-service-tag"><TrendingUp size={13} /> Touch-First UX</div>
            </motion.div>

            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><Zap size={24} /></div>
                <h3 className="app-service-title">Enterprise App Modernization</h3>
                <p className="app-service-desc">
                  Refactor legacy mobile apps with modern architecture, offline database caching, biometric security, and fast API integration.
                </p>
              </div>
              <div className="app-service-tag"><Zap size={13} /> Enterprise Mobility</div>
            </motion.div>

            <motion.div className="app-service-card">
              <div>
                <div className="app-service-icon-box"><ShieldCheck size={24} /></div>
                <h3 className="app-service-title">App Store Care & Security</h3>
                <p className="app-service-desc">
                  Guaranteed Apple App Store & Google Play Store publishing, push notification setup, security encryption, and crash monitoring.
                </p>
              </div>
              <div className="app-service-tag"><ShieldCheck size={13} /> Store Approval Care</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS & COMPARISON */}
      <section id="process" className="app-process-section">
        <div className="app-container">
          <motion.div className="app-section-header">
            <div className="app-badge">Our Mobile Workflow</div>
            <h2 className="app-section-title">
              Our 4-Step <span>App Development Process</span>
            </h2>
            <p className="app-section-subtitle">
              A disciplined, agile app development process built for high performance and smooth App Store publishing.
            </p>
          </motion.div>

          <div className="app-process-grid">
            <div className="app-process-card">
              <div className="app-process-step-num">01</div>
              <h3 className="app-process-title">Architecture & Wireframing</h3>
              <p className="app-process-desc">Mapping app navigation, offline storage strategy, API endpoints, and touch UX wireframes.</p>
            </div>

            <div className="app-process-card">
              <div className="app-process-step-num">02</div>
              <h3 className="app-process-title">Interactive UI Design</h3>
              <p className="app-process-desc">Crafting pixel-perfect mobile screens, gesture interactions, and branded micro-animations.</p>
            </div>

            <div className="app-process-card">
              <div className="app-process-step-num">03</div>
              <h3 className="app-process-title">Native App Coding</h3>
              <p className="app-process-desc">Coding clean, modular Swift/Kotlin or Flutter/React Native components with push notification logic.</p>
            </div>

            <div className="app-process-card">
              <div className="app-process-step-num">04</div>
              <h3 className="app-process-title">App Store QA & Launch</h3>
              <p className="app-process-desc">Simultaneous iOS & Android device testing, security auditing, and guaranteed store approval publishing.</p>
            </div>
          </div>

          <div className="app-comparison-box">
            <div className="app-comparison-header">
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--app-text-heading)', marginBottom: '6px' }}>
                Native & Modern App Tech vs Outdated Web Views
              </h3>
              <p style={{ color: 'var(--app-text-body)', fontSize: '14px' }}>Compare our engineered mobile app standards with sluggish web wrapper apps.</p>
            </div>

            <div className="app-comparison-grid">
              <div className="app-comparison-row">
                <div className="app-comparison-feature">App Frame Rate</div>
                <div className="app-comparison-bad"><XCircle size={16} /> 24-30 FPS Laggy Scroll</div>
                <div className="app-comparison-good"><CheckCircle2 size={16} /> 60-120 FPS Fluid Native Motion ⚡</div>
              </div>

              <div className="app-comparison-row">
                <div className="app-comparison-feature">Offline Capability</div>
                <div className="app-comparison-bad"><XCircle size={16} /> Breaks Without Internet</div>
                <div className="app-comparison-good"><CheckCircle2 size={16} /> Full Offline Sync & SQLite DB 📱</div>
              </div>

              <div className="app-comparison-row">
                <div className="app-comparison-feature">App Store Approval</div>
                <div className="app-comparison-bad"><XCircle size={16} /> High Rejection Risk</div>
                <div className="app-comparison-good"><CheckCircle2 size={16} /> 100% Guaranteed Store Acceptance 🚀</div>
              </div>

              <div className="app-comparison-row">
                <div className="app-comparison-feature">Biometric & Push Features</div>
                <div className="app-comparison-bad"><XCircle size={16} /> Limited Device Hardware Access</div>
                <div className="app-comparison-good"><CheckCircle2 size={16} /> FaceID, Push Notifications & GPS 🎯</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="app-contact-section">
        <div className="app-container">
          <motion.div className="app-section-header">
            <div className="app-badge">Build Your Mobile App</div>
            <h2 className="app-section-title">
              Ready To Launch A <span>High-Scale Mobile App?</span>
            </h2>
            <p className="app-section-subtitle">
              Skip long inquiry forms. Talk directly with our senior mobile app architect on WhatsApp or phone.
            </p>
          </motion.div>

          <div className="app-contact-wrapper">
            <div className="app-contact-info-box">
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--app-text-heading)', marginBottom: '12px' }}>
                  Reach Out Directly
                </h3>
                <p style={{ marginBottom: '20px', fontSize: '15px' }}>
                  From MVP prototypes to million-user mobile platforms, our engineers are ready to build.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px', fontSize: '14px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--app-text-muted)', textTransform: 'uppercase' }}>Call Us</div>
                    <a href="tel:+918502888838" style={{ fontWeight: 600, color: 'var(--app-text-heading)', textDecoration: 'none', display: 'block' }}>+91 8502888838</a>
                    <a href="tel:+918502888839" style={{ fontWeight: 600, color: 'var(--app-text-muted)', textDecoration: 'none', display: 'block' }}>+91 8502888839</a>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--app-text-muted)', textTransform: 'uppercase' }}>Email Us</div>
                    <a href="mailto:info@gatecode.in" style={{ fontWeight: 600, color: 'var(--app-text-heading)', textDecoration: 'none', display: 'block' }}>info@gatecode.in</a>
                    <a href="mailto:support@gatecode.in" style={{ fontWeight: 600, color: 'var(--app-text-muted)', textDecoration: 'none', display: 'block' }}>support@gatecode.in</a>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--app-text-muted)', textTransform: 'uppercase' }}>Visit Us</div>
                    <div style={{ fontWeight: 600, color: 'var(--app-text-heading)' }}>412, Sumer Nagar, Mansarovar, Jaipur, India</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--app-text-muted)', textTransform: 'uppercase' }}>Office Hours</div>
                    <div style={{ fontWeight: 600, color: 'var(--app-text-heading)' }}>Mon - Fri: 9:00 AM - 6:00 PM</div>
                    <div style={{ fontWeight: 600, color: 'var(--app-text-muted)' }}>Sat: 10:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '8px 16px', borderRadius: '100px', background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a', fontWeight: 600, fontSize: '13px', display: 'inline-block' }}>
                ● Accepting new iOS & Android app projects
              </div>
            </div>

            {/* Direct WhatsApp Action Box */}
            <div className="app-contact-action-box">
              <div>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.12)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <MessageSquare size={28} />
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--app-text-heading)', marginBottom: '10px' }}>
                  Talk To Us On WhatsApp
                </h3>

                <p style={{ color: 'var(--app-text-body)', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>
                  Get an immediate response! Chat with our mobile app architect right now to get a transparent estimate and build timeline.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--app-text-body)' }}>
                    <Check size={16} style={{ color: '#25D366' }} /> Average response time: <strong>under 15 minutes</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--app-text-body)' }}>
                    <Check size={16} style={{ color: '#25D366' }} /> Direct 1-on-1 discussion with senior iOS & Android engineers
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--app-text-body)' }}>
                    <Check size={16} style={{ color: '#25D366' }} /> Free initial app scope & architecture review
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-whatsapp-btn"
                >
                  <MessageSquare size={20} />
                  Chat on WhatsApp (+91 8502888838)
                </a>

                <a
                  href="tel:+918502888838"
                  className="app-btn app-btn-secondary"
                  style={{ width: '100%' }}
                >
                  <Phone size={18} />
                  Call Directly: +91 8502888838
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
