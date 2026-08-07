'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectInquiryForm from './ProjectInquiryForm';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonBg?: string;
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  buttonBg = '#0fb9b1',
}: ProjectInquiryModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="inquiry-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999999,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <motion.div
            className="inquiry-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              maxHeight: '90vh',
              borderRadius: '16px',
              backgroundColor: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 10000000,
            }}
          >
            {/* Corner Cross / Close Icon Button */}
            <button
              onClick={onClose}
              aria-label="Close form modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                border: '1px solid #cbd5e1',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e2e8f0';
                e.currentTarget.style.color = '#0f172a';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Scrollable Container for Form */}
            <div
              style={{
                overflowY: 'auto',
                maxHeight: '90vh',
                padding: '0',
                borderRadius: '16px',
                background: '#ffffff',
              }}
            >
              <ProjectInquiryForm buttonBg={buttonBg} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
