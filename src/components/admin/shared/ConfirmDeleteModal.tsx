'use client';

import styles from '../portfolio/styles/shared.module.css';

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface ConfirmDeleteModalProps {
  title: string;
  message: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDeleteModal({
  title, message, isLoading, onConfirm, onCancel,
}: ConfirmDeleteModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onCancel}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div />
          <button className={styles.modalClose} onClick={onCancel} aria-label="Close">
            <XIcon />
          </button>
        </div>
        <div className={styles.modalBody} style={{ textAlign: 'center', paddingTop: 8 }}>
          <div className={styles.deleteModalIcon} style={{ margin: '0 auto 16px' }}>
            <TrashIcon />
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 8 }}>
            {title}
          </div>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{message}</p>
        </div>
        <div className={styles.modalFooter} style={{ justifyContent: 'center', gap: 12, paddingBottom: 28 }}>
          <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button className={`${styles.btn} ${styles.btnDanger}`} onClick={onConfirm} disabled={isLoading}>
            {isLoading ? 'Deleting…' : 'Yes, Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
