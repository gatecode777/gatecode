'use client';

import { useEffect, useRef } from 'react';
import e from './styles/editor.module.css';

interface Props { value: string; onChange: (html: string) => void; placeholder?: string; minHeight?: number; }

export default function RichEditor({ value, onChange, placeholder = 'Write here…', minHeight = 100 }: Props) {
  const ref  = useRef<HTMLDivElement>(null);
  const init = useRef(false);

  useEffect(() => { if (ref.current && !init.current) { ref.current.innerHTML = value || ''; init.current = true; } }, []); // eslint-disable-line

  // sync on external reset
  useEffect(() => {
    if (ref.current && !ref.current.contains(document.activeElement)) ref.current.innerHTML = value || '';
  }, [value]);

  const exec = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); ref.current?.focus(); if (ref.current) onChange(ref.current.innerHTML); };

  const tools = [
    { l: 'B',    cmd: 'bold',                  title: 'Bold' },
    { l: 'I',    cmd: 'italic',                title: 'Italic' },
    { l: 'U',    cmd: 'underline',             title: 'Underline' },
    { l: 'sep' },
    { l: 'H2',   cmd: 'formatBlock', val: 'h2', title: 'Heading 2' },
    { l: 'H3',   cmd: 'formatBlock', val: 'h3', title: 'Heading 3' },
    { l: 'sep' },
    { l: '• UL', cmd: 'insertUnorderedList',   title: 'Bullet list' },
    { l: '1. OL',cmd: 'insertOrderedList',     title: 'Ordered list' },
    { l: 'sep' },
    { l: '¶',    cmd: 'formatBlock', val: 'p', title: 'Paragraph' },
  ];

  return (
    <div className={e.richEditor}>
      <div className={e.richToolbar}>
        {tools.map((t, i) =>
          t.l === 'sep' ? <span key={i} className={e.rtSep} /> :
          <button key={i} type="button" className={e.rtBtn} title={t.title}
            onMouseDown={ev => { ev.preventDefault(); exec(t.cmd!, t.val); }}>
            {t.l}
          </button>
        )}
      </div>
      <div
        ref={ref}
        className={e.richContent}
        contentEditable
        suppressContentEditableWarning
        style={{ minHeight }}
        data-placeholder={placeholder}
        onInput={() => { if (ref.current) onChange(ref.current.innerHTML); }}
      />
    </div>
  );
}
