'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/wordpress-editor.module.css';

interface WordPressRichEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

// Upload file helper to /api/admin/upload
async function uploadMediaFile(file: File): Promise<string> {
  try {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    const d = await res.json();
    if (d.success) return d.data.url;
    alert(d.message || 'Image upload failed');
    return '';
  } catch (err) {
    console.error('Image upload error:', err);
    alert('Upload failed. Please check file size and internet connection.');
    return '';
  }
}

export default function WordPressRichEditor({
  value,
  onChange,
  placeholder = 'Start typing your article content here...',
  minHeight = 460,
}: WordPressRichEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [rawHtml, setRawHtml] = useState(value || '');

  // Modals state
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [linkNewTab, setLinkNewTab] = useState(true);

  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [imageAlign, setImageAlign] = useState<'center' | 'left' | 'right'>('center');
  const [isUploading, setIsUploading] = useState(false);

  // Saved selection range
  const savedSelection = useRef<Range | null>(null);

  // Initialize content once
  useEffect(() => {
    if (editorRef.current && !isInitialized.current) {
      editorRef.current.innerHTML = value || '';
      isInitialized.current = true;
    }
  }, []); // eslint-disable-line

  // Sync external value updates
  useEffect(() => {
    if (editorRef.current && !editorRef.current.contains(document.activeElement)) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || '';
      }
    }
    setRawHtml(value || '');
  }, [value]);

  const saveCurrentSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedSelection.current = sel.getRangeAt(0).cloneRange();
    }
  };

  const restoreSelection = () => {
    if (savedSelection.current) {
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(savedSelection.current);
      }
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      setRawHtml(html);
      onChange(html);
    }
  };

  const handleRawHtmlChange = (newHtml: string) => {
    setRawHtml(newHtml);
    onChange(newHtml);
    if (editorRef.current) {
      editorRef.current.innerHTML = newHtml;
    }
  };

  const exec = (cmd: string, val: string | undefined = undefined) => {
    if (isHtmlMode) return;
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
    handleInput();
  };

  // Link Insertion
  const openLinkModal = () => {
    saveCurrentSelection();
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) {
      setLinkText(sel.toString());
    } else {
      setLinkText('');
    }
    setLinkUrl('');
    setLinkNewTab(true);
    setShowLinkModal(true);
  };

  const applyLink = () => {
    restoreSelection();
    if (!linkUrl.trim()) {
      setShowLinkModal(false);
      return;
    }

    const cleanUrl = linkUrl.startsWith('http') || linkUrl.startsWith('/') ? linkUrl : `https://${linkUrl}`;
    const sel = window.getSelection();

    if (sel && savedSelection.current && !savedSelection.current.collapsed) {
      const a = document.createElement('a');
      a.href = cleanUrl;
      if (linkNewTab) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.style.color = '#2563eb';
      a.style.textDecoration = 'underline';
      a.appendChild(savedSelection.current.extractContents());
      savedSelection.current.insertNode(a);
    } else {
      const a = document.createElement('a');
      a.href = cleanUrl;
      a.textContent = linkText.trim() || cleanUrl;
      if (linkNewTab) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      a.style.color = '#2563eb';
      a.style.textDecoration = 'underline';

      if (savedSelection.current) {
        savedSelection.current.insertNode(a);
      } else if (editorRef.current) {
        editorRef.current.appendChild(a);
      }
    }

    handleInput();
    setShowLinkModal(false);
  };

  // Inline Image Insertion
  const openImageModal = () => {
    saveCurrentSelection();
    setImageUrl('');
    setImageAlt('');
    setImageCaption('');
    setImageAlign('center');
    setShowImageModal(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const uploadedUrl = await uploadMediaFile(file);
    setIsUploading(false);
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  };

  const applyImage = () => {
    restoreSelection();
    if (!imageUrl.trim()) {
      setShowImageModal(false);
      return;
    }

    const figure = document.createElement('figure');
    figure.className = `wp-inline-image-wrapper wp-align-${imageAlign}`;
    figure.style.margin = '18px 0';
    if (imageAlign === 'center') {
      figure.style.textAlign = 'center';
    } else if (imageAlign === 'left') {
      figure.style.float = 'left';
      figure.style.margin = '8px 18px 14px 0';
      figure.style.maxWidth = '48%';
    } else if (imageAlign === 'right') {
      figure.style.float = 'right';
      figure.style.margin = '8px 0 14px 18px';
      figure.style.maxWidth = '48%';
    }

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = imageAlt.trim() || 'Article illustration';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '6px';
    figure.appendChild(img);

    if (imageCaption.trim()) {
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = imageCaption.trim();
      figcaption.style.fontSize = '13px';
      figcaption.style.color = '#64748b';
      figcaption.style.marginTop = '6px';
      figcaption.style.fontStyle = 'italic';
      figcaption.style.textAlign = 'center';
      figure.appendChild(figcaption);
    }

    if (savedSelection.current) {
      savedSelection.current.insertNode(figure);
    } else if (editorRef.current) {
      editorRef.current.appendChild(figure);
    }

    handleInput();
    setShowImageModal(false);
  };

  // Insert Table helper
  const insertTable = () => {
    const tableHtml = `
      <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:14px;">
        <thead>
          <tr style="background:#f8fafc;">
            <th style="border:1px solid #cbd5e1; padding:10px 14px; text-align:left;">Header 1</th>
            <th style="border:1px solid #cbd5e1; padding:10px 14px; text-align:left;">Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #cbd5e1; padding:10px 14px;">Cell 1</td>
            <td style="border:1px solid #cbd5e1; padding:10px 14px;">Cell 2</td>
          </tr>
        </tbody>
      </table>
      <p></p>
    `;
    exec('insertHTML', tableHtml);
  };

  return (
    <div className={styles.editorWrapper}>
      {/* Exact Toolbar from the user screenshot */}
      <div className={styles.toolbar}>
        {/* Format: Normal / Headings dropdown */}
        <select
          className={styles.toolbarSelect}
          onChange={(e) => {
            const v = e.target.value;
            if (v === 'p') exec('formatBlock', 'p');
            else exec('formatBlock', v);
          }}
          defaultValue="p"
          title="Paragraph / Heading Format"
        >
          <option value="p">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="blockquote">Quote</option>
        </select>

        <span className={styles.toolbarSep} />

        {/* Bold, Italic, Underline, Strikethrough, Quote */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Bold (Ctrl+B)"
          onMouseDown={(e) => { e.preventDefault(); exec('bold'); }}
        >
          <b>B</b>
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Italic (Ctrl+I)"
          onMouseDown={(e) => { e.preventDefault(); exec('italic'); }}
        >
          <i>I</i>
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Underline (Ctrl+U)"
          onMouseDown={(e) => { e.preventDefault(); exec('underline'); }}
        >
          <u>U</u>
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Strikethrough"
          onMouseDown={(e) => { e.preventDefault(); exec('strikeThrough'); }}
        >
          <s>S</s>
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Quote"
          onMouseDown={(e) => { e.preventDefault(); exec('formatBlock', 'blockquote'); }}
        >
          <b>”</b>
        </button>

        <span className={styles.toolbarSep} />

        {/* Bullet list & Numbered list */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Bullet List"
          onMouseDown={(e) => { e.preventDefault(); exec('insertUnorderedList'); }}
        >
          •≡
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Numbered List"
          onMouseDown={(e) => { e.preventDefault(); exec('insertOrderedList'); }}
        >
          1≡
        </button>

        <span className={styles.toolbarSep} />

        {/* Subscript & Superscript */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Subscript"
          onMouseDown={(e) => { e.preventDefault(); exec('subscript'); }}
        >
          x₂
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Superscript"
          onMouseDown={(e) => { e.preventDefault(); exec('superscript'); }}
        >
          x²
        </button>

        <span className={styles.toolbarSep} />

        {/* Outdent & Indent */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Decrease Indent"
          onMouseDown={(e) => { e.preventDefault(); exec('outdent'); }}
        >
          ⇤
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Increase Indent"
          onMouseDown={(e) => { e.preventDefault(); exec('indent'); }}
        >
          ⇥
        </button>

        {/* Paragraph Break Symbol */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="New Paragraph"
          onMouseDown={(e) => { e.preventDefault(); exec('insertParagraph'); }}
        >
          ¶
        </button>

        <span className={styles.toolbarSep} />

        {/* Text Color (A) */}
        <label className={styles.colorPickerLabel} title="Text Color">
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>A</span>
          <input
            type="color"
            className={styles.colorPickerInput}
            defaultValue="#0f172a"
            onChange={(e) => exec('foreColor', e.target.value)}
          />
        </label>

        {/* Background Highlight Color (A with fill) */}
        <label className={styles.colorPickerLabel} title="Highlight Background Color">
          <span style={{ fontSize: 13, fontWeight: 700, background: '#fef08a', padding: '0 3px', borderRadius: 2 }}>A</span>
          <input
            type="color"
            className={styles.colorPickerInput}
            defaultValue="#fef08a"
            onChange={(e) => exec('hiliteColor', e.target.value)}
          />
        </label>

        {/* Alignment */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Align Left"
          onMouseDown={(e) => { e.preventDefault(); exec('justifyLeft'); }}
        >
          ⯸
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Align Center"
          onMouseDown={(e) => { e.preventDefault(); exec('justifyCenter'); }}
        >
          ≡
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Align Right"
          onMouseDown={(e) => { e.preventDefault(); exec('justifyRight'); }}
        >
          ⯹
        </button>

        <span className={styles.toolbarSep} />

        {/* Link, Image, Table, Clear Formatting, Code/HTML */}
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Insert Link"
          onClick={openLinkModal}
        >
          🔗
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Insert Inline Image with Alt text"
          onClick={openImageModal}
        >
          🖼️
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Insert Table"
          onClick={insertTable}
        >
          ▦
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          title="Clear Formatting"
          onMouseDown={(e) => { e.preventDefault(); exec('removeFormat'); }}
        >
          Tₓ
        </button>
        <button
          type="button"
          className={`${styles.toolbarBtn} ${isHtmlMode ? styles.toolbarBtnActive : ''}`}
          title="Toggle HTML Source Code View"
          onClick={() => setIsHtmlMode(!isHtmlMode)}
        >
          &lt;&gt;
        </button>
      </div>

      {/* Main Content Editable Writing Area */}
      {isHtmlMode ? (
        <textarea
          className={styles.htmlTextarea}
          style={{ minHeight }}
          value={rawHtml}
          onChange={(e) => handleRawHtmlChange(e.target.value)}
          placeholder="<p>Write or paste raw HTML code here...</p>"
        />
      ) : (
        <div
          ref={editorRef}
          className={styles.editableContent}
          contentEditable
          suppressContentEditableWarning
          style={{ minHeight }}
          data-placeholder={placeholder}
          onInput={handleInput}
        />
      )}

      {/* Inline Link Modal */}
      {showLinkModal && (
        <div className={styles.modalOverlay} onClick={() => setShowLinkModal(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span>Insert / Edit Link</span>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setShowLinkModal(false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Anchor Text</label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="Text to display"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>URL</label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      applyLink();
                    }
                  }}
                />
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#334155', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={linkNewTab}
                  onChange={(e) => setLinkNewTab(e.target.checked)}
                />
                <span>Open link in new tab (target=&quot;_blank&quot;)</span>
              </label>
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.btnDraft}
                onClick={() => setShowLinkModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.btnPublish}
                onClick={applyLink}
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline Image Modal with Alt Text */}
      {showImageModal && (
        <div className={styles.modalOverlay} onClick={() => setShowImageModal(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span>Insert Image</span>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setShowImageModal(false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Upload File</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ fontSize: 13 }}
                />
                {isUploading && <span style={{ fontSize: 12, color: '#2563eb' }}>Uploading...</span>}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Or Image URL</label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="https://example.com/photo.webp"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Image Alt Text
                  <span className={styles.labelHint} style={{ color: '#2563eb' }}>Required for SEO & Accessibility</span>
                </label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="Clear description of the image"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Caption (Optional)</label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="Caption text displayed below image"
                  value={imageCaption}
                  onChange={(e) => setImageCaption(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Alignment</label>
                <select
                  className={styles.toolbarSelect}
                  value={imageAlign}
                  onChange={(e) => setImageAlign(e.target.value as 'center' | 'left' | 'right')}
                >
                  <option value="center">Center</option>
                  <option value="left">Float Left</option>
                  <option value="right">Float Right</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.btnDraft}
                onClick={() => setShowImageModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.btnPublish}
                disabled={!imageUrl.trim()}
                onClick={applyImage}
              >
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
