'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import e from './styles/editor.module.css';
import {
  HeroBlockEditor, IntroBlockEditor, OfferCardsBlockEditor, WhyChooseUsBlockEditor,
  ProcessBlockEditor, TechnologiesBlockEditor, TextBlockEditor, BulletsBlockEditor,
  ImageGridBlockEditor, CTABlockEditor, TwoColumnBlockEditor, DividerBlockEditor,
  ButtonsBlockEditor, XIcon, PlusIcon, GripIcon,
} from './blocks/TEBlockEditors';
import type { TEBlockType } from '@/models/TechnicalExpertise';

const SaveIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
const BackIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const EyeIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon= () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
const TrashIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const ChevUp    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>;
const ChevDown  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;

// ── Block registry ────────────────────────────────────────────────────────
const BLOCK_TYPES: { type: TEBlockType; emoji: string; label: string; desc: string; defaultData: Record<string,unknown> }[] = [
  { type:'hero',         emoji:'🖼️',  label:'Hero Banner',       desc:'Banner + title + CTA button',          defaultData:{ title:'', subtitle:'', bannerImage:'', ctaLabel:'Get Free Consultation', ctaUrl:'' } },
  { type:'intro',        emoji:'📝',  label:'Introduction',       desc:'Rich text intro paragraph',             defaultData:{ body:'' } },
  { type:'offerCards',   emoji:'🃏',  label:'What We Offer',      desc:'Icon + title + description cards',      defaultData:{ title:'WHAT WE OFFER', subtitle:'', cards:[] } },
  { type:'whyChooseUs',  emoji:'⭐',  label:'Why Choose Us',      desc:'Image + title grid',                    defaultData:{ title:'WHY CHOOSE US', subtitle:'', cards:[] } },
  { type:'process',      emoji:'⚙️',  label:'Our Process',        desc:'Numbered step list',                    defaultData:{ title:'OUR DEVELOPMENT PROCESS', steps:[] } },
  { type:'technologies', emoji:'💻',  label:'Technologies',       desc:'Grouped tech table (Frontend, Backend…)',defaultData:{ title:'TECHNOLOGIES WE USE', groups:[] } },
  { type:'text',         emoji:'✍️',  label:'Text Section',       desc:'Generic rich text',                     defaultData:{ title:'', body:'' } },
  { type:'bullets',      emoji:'•',   label:'Bullet List',        desc:'Section + list items',                  defaultData:{ title:'', items:[] } },
  { type:'imageGrid',    emoji:'🌄',  label:'Image Grid',         desc:'Photo grid',                            defaultData:{ images:[], columns:'3' } },
  { type:'cta',          emoji:'📣',  label:'CTA Banner',         desc:'Call-to-action block',                  defaultData:{ headline:'', subheadline:'', btnLabel:'', btnUrl:'', bgImage:'' } },
  { type:'twoColumn',    emoji:'◫',   label:'Two Columns',        desc:'Left + right layout',                   defaultData:{ leftBody:'', rightType:'text', rightBody:'', rightImage:'' } },
  { type:'buttons',      emoji:'🔘',  label:'Buttons',            desc:'Row of CTA buttons',                    defaultData:{ buttons:[] } },
  { type:'divider',      emoji:'—',   label:'Divider / Space',    desc:'Spacing / horizontal rule',             defaultData:{ spacing:'md' } },
];

const TYPE_CLS: Record<TEBlockType, string> = {
  hero:e.typeHero, intro:e.typeIntro, offerCards:e.typeCards, whyChooseUs:e.typeTextWithImage,
  process:e.typeProcess, technologies:e.typeTechnologies, text:e.typeText, bullets:e.typeBullets,
  imageGrid:e.typeImageGrid, cta:e.typeCta, twoColumn:e.typeTwoColumn, divider:e.typeDivider, buttons:e.typeButtons,
};

function uid() { return Math.random().toString(36).slice(2,10); }

function BlockRouter({ type, data, onChange }: { type: TEBlockType; data: Record<string,unknown>; onChange: (d: Record<string,unknown>) => void }) {
  switch(type) {
    case 'hero':         return <HeroBlockEditor         data={data} onChange={onChange} />;
    case 'intro':        return <IntroBlockEditor        data={data} onChange={onChange} />;
    case 'offerCards':   return <OfferCardsBlockEditor   data={data} onChange={onChange} />;
    case 'whyChooseUs':  return <WhyChooseUsBlockEditor  data={data} onChange={onChange} />;
    case 'process':      return <ProcessBlockEditor      data={data} onChange={onChange} />;
    case 'technologies': return <TechnologiesBlockEditor data={data} onChange={onChange} />;
    case 'text':         return <TextBlockEditor         data={data} onChange={onChange} />;
    case 'bullets':      return <BulletsBlockEditor      data={data} onChange={onChange} />;
    case 'imageGrid':    return <ImageGridBlockEditor    data={data} onChange={onChange} />;
    case 'cta':          return <CTABlockEditor          data={data} onChange={onChange} />;
    case 'twoColumn':    return <TwoColumnBlockEditor    data={data} onChange={onChange} />;
    case 'divider':      return <DividerBlockEditor      data={data} onChange={onChange} />;
    case 'buttons':      return <ButtonsBlockEditor      data={data} onChange={onChange} />;
    default:             return <div style={{padding:12,fontSize:13,color:'var(--color-text-muted)'}}>Unknown block</div>;
  }
}

function getLabel(type: TEBlockType, data: Record<string,unknown>): string {
  const t = (data.title as string|undefined)?.trim();
  const h = (data.headline as string|undefined)?.trim();
  if (t) return t.slice(0,60);
  if (h) return h.slice(0,60);
  if (type === 'intro') return 'Introduction';
  if (type === 'divider') return `Spacer (${data.spacing ?? 'md'})`;
  return BLOCK_TYPES.find(b => b.type === type)?.label ?? type;
}

interface Block { id:string; type:TEBlockType; isVisible:boolean; collapsed:boolean; data:Record<string,unknown>; }

function TEPageEditorInner({ pageId }: { pageId: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [blocks, setBlocks]     = useState<Block[]>([]);
  const [pageMeta, setPageMeta] = useState<{ expertiseName: string; slug: string } | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading]   = useState(true);
  const [saving, setSaving]     = useState(false);
  const [showAdd, setShowAdd]   = useState(false);
  const dragIdx  = useRef<number|null>(null);
  const dragOver = useRef<number|null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/admin/technical-expertise/pages/${pageId}`);
      const d = await res.json();
      if (cancelled) return;
      if (d.success) {
        const p = d.data;
        setPageMeta({ expertiseName: p.expertiseId?.name ?? 'Detail Page', slug: p.slug });
        setIsActive(p.isActive);
        setBlocks((p.contentBlocks ?? []).map((b: { type:TEBlockType; isVisible:boolean; data:Record<string,unknown> }) => ({ id:uid(), type:b.type, isVisible:b.isVisible??true, collapsed:false, data:b.data??{} })));
      } else { toast('error', 'Failed to load page'); router.push('/admin/technical-expertise'); }
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [pageId]); // eslint-disable-line

  const addBlock = (type: TEBlockType) => {
    const meta = BLOCK_TYPES.find(b => b.type === type);
    setBlocks(bs => [...bs, { id:uid(), type, isVisible:true, collapsed:false, data:{...meta?.defaultData??{}} }]);
    setShowAdd(false);
    setTimeout(() => window.scrollTo({ top:document.body.scrollHeight, behavior:'smooth' }), 80);
  };

  const removeBlock    = (id:string) => setBlocks(bs => bs.filter(b => b.id !== id));
  const toggleVis      = (id:string) => setBlocks(bs => bs.map(b => b.id===id ? {...b,isVisible:!b.isVisible} : b));
  const toggleCollapse = (id:string) => setBlocks(bs => bs.map(b => b.id===id ? {...b,collapsed:!b.collapsed} : b));
  const updateBlock    = (id:string, data:Record<string,unknown>) => setBlocks(bs => bs.map(b => b.id===id ? {...b,data} : b));
  const moveBlock = (from:number,to:number) => setBlocks(bs => { const a=[...bs]; const [m]=a.splice(from,1); a.splice(to,0,m); return a; });
  const onDragStart = (i:number) => { dragIdx.current=i; };
  const onDragEnter = (i:number) => { dragOver.current=i; };
  const onDragEnd   = () => {
    if (dragIdx.current!==null && dragOver.current!==null && dragIdx.current!==dragOver.current)
      moveBlock(dragIdx.current, dragOver.current);
    dragIdx.current=null; dragOver.current=null;
  };

  const handleSave = async () => {
    setSaving(true);
    const payload = {
      isActive,
      contentBlocks: blocks.map((b,i) => ({ type:b.type, order:i, isVisible:b.isVisible, data:b.data })),
    };
    const res = await fetch(`/api/admin/technical-expertise/pages/${pageId}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const d = await res.json();
    if (d.success) {
      toast('success', 'Page saved!');
      router.push('/admin/technical-expertise');
      return;
    }
    setSaving(false);
    toast('error', 'Save failed', d.message);
  };

  if (loading) return (
    <div className={e.editorLayout}><Sidebar />
      <div className={e.editorMain} style={{ display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, color:'var(--color-text-muted)' }}>Loading…</div>
    </div>
  );

  return (
    <div className={e.editorLayout}>
      <Sidebar />
      <div className={e.editorMain}>
        <header className={e.editorHeader}>
          <div className={e.editorHeaderLeft}>
            <span className={e.editorHeaderTitle}>{pageMeta?.expertiseName ?? 'TE Detail Page'}</span>
            <span className={e.editorHeaderBreadcrumb}>Technical Expertise / {pageMeta?.expertiseName}</span>
          </div>
          <div className={e.editorHeaderActions}>
            <button className={`${e.btn} ${e.btnSecondary}`} onClick={() => router.push('/admin/technical-expertise')} disabled={saving}><BackIcon /> Back</button>
            <button className={`${e.btn} ${e.btnPrimary}`} onClick={handleSave} disabled={saving}><SaveIcon /> {saving?'Saving…':'Save'}</button>
          </div>
        </header>

        <div className={e.editorBody}>
          {/* ── LEFT ── */}
          <div className={e.editorLeft}>
            {/* Page info */}
            <div className={e.listingCard}>
              <div className={e.listingCardTitle}>📋 Page Info</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, fontSize:13 }}>
                <div><div style={{ fontSize:11, fontWeight:700, color:'var(--color-text-muted)', marginBottom:3 }}>EXPERTISE</div><div style={{ fontWeight:600 }}>{pageMeta?.expertiseName}</div></div>
                <div><div style={{ fontSize:11, fontWeight:700, color:'var(--color-text-muted)', marginBottom:3 }}>SLUG</div><code style={{ fontSize:11, background:'var(--color-bg)', padding:'2px 6px', borderRadius:4, color:'var(--color-primary)' }}>{pageMeta?.slug}</code></div>
                <div><div style={{ fontSize:11, fontWeight:700, color:'var(--color-text-muted)', marginBottom:3 }}>STATUS</div>
                  <label className={e.toggleRow}><span className={e.toggle}><input type="checkbox" checked={isActive} onChange={ev => setIsActive(ev.target.checked)}/><span className={e.toggleSlider}/></span><span className={e.toggleLabel}>{isActive?'Published':'Draft'}</span></label>
                </div>
                <div><div style={{ fontSize:11, fontWeight:700, color:'var(--color-text-muted)', marginBottom:3 }}>BLOCKS</div><div style={{ fontWeight:600 }}>{blocks.length} block{blocks.length!==1?'s':''}</div></div>
              </div>
            </div>

            {/* Block list */}
            <div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--color-text-secondary)' }}>Content Blocks <span style={{ fontSize:12, fontWeight:500, color:'var(--color-text-muted)' }}>({blocks.length})</span></div>
                <button className={`${e.btn} ${e.btnPrimary} ${e.btnSm}`} type="button" onClick={() => setShowAdd(p => !p)}><PlusIcon /> Add Block</button>
              </div>

              {blocks.length === 0 && !showAdd && (
                <div style={{ padding:'32px 20px', textAlign:'center', background:'var(--color-surface)', border:'2px dashed var(--color-border)', borderRadius:'var(--radius-lg)', color:'var(--color-text-muted)', fontSize:13 }}>
                  No blocks yet.<br /><strong>Click &quot;Add Block&quot;</strong> to start building this page.
                </div>
              )}

              <div className={e.blockList}>
                {blocks.map((block, idx) => {
                  const meta = BLOCK_TYPES.find(bt => bt.type === block.type);
                  return (
                    <div key={block.id}
                      className={`${e.blockCard}${!block.isVisible?' '+e.blockCardHidden:''}${block.collapsed?' '+e.blockCollapsed:''}`}
                      draggable onDragStart={() => onDragStart(idx)} onDragEnter={() => onDragEnter(idx)}
                      onDragEnd={onDragEnd} onDragOver={ev => ev.preventDefault()}>
                      <div className={e.blockCardHeader}>
                        <span className={e.blockDragHandle} title="Drag to reorder"><GripIcon /></span>
                        <span className={`${e.blockTypeBadge} ${TYPE_CLS[block.type]}`}>{meta?.emoji} {meta?.label}</span>
                        <span className={e.blockHeaderLabel}>{getLabel(block.type, block.data)}</span>
                        <div className={e.blockHeaderControls}>
                          <button className={e.blockHeaderBtn} title={block.isVisible?'Hide':'Show'} onClick={() => toggleVis(block.id)}>{block.isVisible?<EyeIcon/>:<EyeOffIcon/>}</button>
                          <button className={e.blockHeaderBtn} title="Move up"   disabled={idx===0}               onClick={() => moveBlock(idx,idx-1)}><ChevUp /></button>
                          <button className={e.blockHeaderBtn} title="Move down" disabled={idx===blocks.length-1} onClick={() => moveBlock(idx,idx+1)}><ChevDown /></button>
                          <button className={`${e.blockHeaderBtn} ${e.danger}`} title="Delete" onClick={() => removeBlock(block.id)}><TrashIcon /></button>
                          <button className={e.blockHeaderBtn} title={block.collapsed?'Expand':'Collapse'} onClick={() => toggleCollapse(block.id)}>
                            <span style={{ display:'inline-flex', transform:block.collapsed?'rotate(-90deg)':'none', transition:'transform 0.15s' }}><ChevDown /></span>
                          </button>
                        </div>
                      </div>
                      {!block.collapsed && <BlockRouter type={block.type} data={block.data} onChange={data => updateBlock(block.id, data)} />}
                    </div>
                  );
                })}
              </div>

              {showAdd && (
                <div className={e.addBlockPanel} style={{ marginTop:12 }}>
                  <div className={e.addBlockTitle}>Choose a Block Type</div>
                  <div className={e.addBlockGrid}>
                    {BLOCK_TYPES.map(bt => (
                      <button key={bt.type} className={e.addBlockBtn} type="button" onClick={() => addBlock(bt.type)} title={bt.desc}>
                        <span className={e.addBlockBtnEmoji}>{bt.emoji}</span>
                        <span className={e.addBlockBtnLabel}>{bt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div style={{ textAlign:'center', marginTop:10 }}>
                    <button className={`${e.btn} ${e.btnGhost} ${e.btnSm}`} type="button" onClick={() => setShowAdd(false)}><XIcon /> Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT sidebar ── */}
          <div className={e.editorRight}>
            <div className={e.sideCard}>
              <div className={e.sideCardHeader}>Page Structure ({blocks.length})</div>
              <div className={e.sideCardBody} style={{ gap:5, padding:'10px 14px' }}>
                {blocks.length === 0
                  ? <span style={{ fontSize:12, color:'var(--color-text-muted)' }}>No blocks</span>
                  : blocks.map((b,i) => {
                      const meta = BLOCK_TYPES.find(bt => bt.type === b.type);
                      return (
                        <div key={b.id} style={{ display:'flex', alignItems:'center', gap:7, fontSize:12, cursor:'pointer', padding:'2px 0' }} onClick={() => toggleCollapse(b.id)}>
                          <span style={{ color:'var(--color-text-muted)', width:18, textAlign:'right' }}>{i+1}.</span>
                          <span style={{ flex:1, color:b.isVisible?'var(--color-text-secondary)':'var(--color-text-muted)', fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{meta?.emoji} {meta?.label}</span>
                          {!b.isVisible && <span style={{ fontSize:10, color:'var(--color-text-muted)' }}>hidden</span>}
                        </div>
                      );
                    })
                }
              </div>
            </div>

            <button className={`${e.btn} ${e.btnPrimary}`} style={{ width:'100%' }} onClick={handleSave} disabled={saving}>
              <SaveIcon /> {saving?'Saving…':'Save Changes'}
            </button>

            <div className={e.sideCard}>
              <div className={e.sideCardHeader}>Quick Add</div>
              <div className={e.sideCardBody} style={{ gap:5 }}>
                {BLOCK_TYPES.map(bt => (
                  <button key={bt.type} className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button"
                    style={{ width:'100%', justifyContent:'flex-start', gap:7 }} onClick={() => addBlock(bt.type)}>
                    {bt.emoji} {bt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TEPageEditor({ pageId }: { pageId: string }) {
  return <ToastProvider><TEPageEditorInner pageId={pageId} /></ToastProvider>;
}
