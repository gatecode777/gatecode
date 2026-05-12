'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import e from './styles/editor.module.css';
import {
  HeroBlockEditor, TextBlockEditor, ChallengeBlockEditor, SolutionBlockEditor,
  KeyFeaturesBlockEditor, ResultsBlockEditor, TechnologiesBlockEditor,
  ImageBlockEditor, ButtonsBlockEditor, DividerBlockEditor, TwoColumnBlockEditor,
  XIcon, PlusIcon, GripIcon,
} from './blocks/BlockEditors';
import type { BlockType } from '@/models/CaseStudy';

const SaveIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>);
const BackIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>);
const EyeIcon    = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>);
const EyeOffIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>);
const TrashIcon  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>);
const ChevDown   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>);
const ChevUp     = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>);
const UploadIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>);

const BLOCK_TYPES: { type: BlockType; emoji: string; label: string; desc: string; defaultData: Record<string,unknown> }[] = [
  { type: 'hero',         emoji: '🖼️',  label: 'Hero Banner',    desc: 'Full-width hero image + title',       defaultData: { title:'', subtitle:'', bannerImage:'' } },
  { type: 'text',         emoji: '📝',  label: 'Text / Intro',   desc: 'Rich text paragraph',                 defaultData: { title:'', body:'' } },
  { type: 'challenge',    emoji: '⚡',  label: 'Challenge',      desc: 'Challenge / problem section',         defaultData: { title:'CHALLENGE', body:'' } },
  { type: 'solution',     emoji: '✅',  label: 'Solution',       desc: 'Solution with optional image',        defaultData: { title:'SOLUTION', body:'', imagePosition:'right', image:'' } },
  { type: 'keyFeatures',  emoji: '🔑',  label: 'Key Features',   desc: 'Bullet list of features',             defaultData: { title:'KEY FEATURES', items:[] } },
  { type: 'results',      emoji: '📈',  label: 'Results',        desc: 'Outcome bullet points',               defaultData: { title:'RESULTS', items:[] } },
  { type: 'technologies', emoji: '💻',  label: 'Technologies',   desc: 'Tech stack with icons',               defaultData: { title:'TECHNOLOGIES USED', items:[] } },
  { type: 'image',        emoji: '🌄',  label: 'Image',          desc: 'Standalone image block',              defaultData: { url:'', caption:'', alt:'', width:'full' } },
  { type: 'buttons',      emoji: '🔘',  label: 'Buttons',        desc: 'CTA button row',                      defaultData: { buttons:[] } },
  { type: 'twoColumn',    emoji: '◫',   label: 'Two Columns',    desc: 'Side-by-side content',                defaultData: { leftBody:'', rightType:'text', rightBody:'', rightImage:'' } },
  { type: 'divider',      emoji: '—',   label: 'Divider / Space',desc: 'Spacing / horizontal rule',           defaultData: { spacing:'md' } },
];

const TYPE_CLS: Record<BlockType,string> = {
  hero: e.typeHero, text: e.typeText, challenge: e.typeChallenge, solution: e.typeSolution,
  keyFeatures: e.typeKeyFeatures, results: e.typeResults, technologies: e.typeTechnologies,
  image: e.typeImage, buttons: e.typeButtons, divider: e.typeDivider, twoColumn: e.typeTwoColumn,
};

function uid()  { return Math.random().toString(36).slice(2,10); }
function slugify(s: string) { return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-{2,}/g,'-').replace(/^-|-$/g,''); }

async function uploadFile(file: File): Promise<string|null> {
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method:'POST', body:fd });
  const d = await res.json(); return d.success ? d.data.url : null;
}

function getLabel(type: BlockType, data: Record<string,unknown>): string {
  const t = data.title as string|undefined;
  if (t?.trim()) return t.trim().slice(0,60);
  if (type === 'image')   return (data.caption as string) || (data.url ? 'Image' : 'Empty image');
  if (type === 'text')    return data.body ? 'Text block' : 'Empty text';
  if (type === 'divider') return `Spacer (${data.spacing??'md'})`;
  return BLOCK_TYPES.find(b=>b.type===type)?.label ?? type;
}

function BlockRouter({ type, data, onChange }: { type:BlockType; data:Record<string,unknown>; onChange:(d:Record<string,unknown>)=>void }) {
  const sd = data as Record<string,string>;
  const sc = onChange as (d:Record<string,string>)=>void;
  switch(type){
    case 'hero':         return <HeroBlockEditor         data={sd} onChange={sc}/>;
    case 'text':         return <TextBlockEditor         data={sd} onChange={sc}/>;
    case 'challenge':    return <ChallengeBlockEditor    data={sd} onChange={sc}/>;
    case 'solution':     return <SolutionBlockEditor     data={sd} onChange={sc}/>;
    case 'keyFeatures':  return <KeyFeaturesBlockEditor  data={data} onChange={onChange}/>;
    case 'results':      return <ResultsBlockEditor      data={data} onChange={onChange}/>;
    case 'technologies': return <TechnologiesBlockEditor data={data} onChange={onChange}/>;
    case 'image':        return <ImageBlockEditor        data={sd} onChange={sc}/>;
    case 'buttons':      return <ButtonsBlockEditor      data={data} onChange={onChange}/>;
    case 'twoColumn':    return <TwoColumnBlockEditor    data={sd} onChange={sc}/>;
    case 'divider':      return <DividerBlockEditor      data={sd} onChange={sc}/>;
    default:             return <div style={{padding:12,fontSize:13,color:'var(--color-text-muted)'}}>Unknown block</div>;
  }
}

interface Block { id:string; type:BlockType; isVisible:boolean; collapsed:boolean; data:Record<string,unknown>; }
interface Form  { title:string; slug:string; shortDesc:string; thumbnail:string; isFeatured:boolean; isActive:boolean; order:string; blocks:Block[]; }

const EMPTY: Form = { title:'', slug:'', shortDesc:'', thumbnail:'', isFeatured:false, isActive:true, order:'0', blocks:[] };

function EditorInner({ studyId }: { studyId?:string }) {
  const router = useRouter();
  const { toast } = useToast();
  const isEdit = !!studyId;
  const [form, setForm]       = useState<Form>(EMPTY);
  const [errors, setErrors]   = useState<Record<string,string>>({});
  const [saving, setSaving]   = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [slugManual, setSM]   = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [thumbUpl, setThumbUpl] = useState(false);
  const dragIdx  = useRef<number|null>(null);
  const dragOver = useRef<number|null>(null);

  const set = useCallback(<K extends keyof Form>(k: K, v: Form[K]) => setForm(f=>({...f,[k]:v})), []);

  useEffect(() => {
    if (!studyId) return;
    (async () => {
      const res = await fetch(`/api/admin/case-studies/${studyId}`);
      const d   = await res.json();
      if (d.success) {
        const cs = d.data;
        setForm({
          title:cs.title, slug:cs.slug, shortDesc:cs.shortDesc??'',
          thumbnail:cs.thumbnail, isFeatured:cs.isFeatured, isActive:cs.isActive, order:String(cs.order),
          blocks:(cs.contentBlocks??[]).map((b: { type:BlockType; isVisible:boolean; data:Record<string,unknown> })=>({ id:uid(), type:b.type, isVisible:b.isVisible??true, collapsed:false, data:b.data??{} })),
        });
        setSM(true);
      } else { toast('error','Failed to load'); router.push('/admin/case-studies'); }
      setLoading(false);
    })();
  }, [studyId]); // eslint-disable-line

  const changeTitle = (t:string) => setForm(f=>({...f, title:t, ...(!slugManual?{slug:slugify(t)}:{})}));
  const addBlock = (type:BlockType) => {
    const meta = BLOCK_TYPES.find(b=>b.type===type);
    setForm(f=>({...f, blocks:[...f.blocks, { id:uid(), type, isVisible:true, collapsed:false, data:{...meta?.defaultData??{}} }]}));
    setShowAdd(false);
    setTimeout(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}),80);
  };
  const removeBlock    = (id:string) => setForm(f=>({...f,blocks:f.blocks.filter(b=>b.id!==id)}));
  const toggleVis      = (id:string) => setForm(f=>({...f,blocks:f.blocks.map(b=>b.id===id?{...b,isVisible:!b.isVisible}:b)}));
  const toggleCollapse = (id:string) => setForm(f=>({...f,blocks:f.blocks.map(b=>b.id===id?{...b,collapsed:!b.collapsed}:b)}));
  const updateBlock    = (id:string, data:Record<string,unknown>) => setForm(f=>({...f,blocks:f.blocks.map(b=>b.id===id?{...b,data}:b)}));
  const moveBlock = (from:number,to:number) => setForm(f=>{
    const bl=[...f.blocks]; const [m]=bl.splice(from,1); bl.splice(to,0,m); return {...f,blocks:bl};
  });
  const onDragStart = (i:number) => { dragIdx.current=i; };
  const onDragEnter = (i:number) => { dragOver.current=i; };
  const onDragEnd   = () => {
    if(dragIdx.current!==null && dragOver.current!==null && dragIdx.current!==dragOver.current) moveBlock(dragIdx.current,dragOver.current);
    dragIdx.current=null; dragOver.current=null;
  };

  const validate = (): boolean => {
    const errs:Record<string,string>={};
    if(!form.title.trim())     errs.title='Title is required';
    if(!form.slug.trim())      errs.slug='Slug is required';
    else if(!/^[a-z0-9-]+$/.test(form.slug)) errs.slug='Lowercase letters, numbers, hyphens only';
    if(!form.thumbnail.trim()) errs.thumbnail='Thumbnail is required';
    setErrors(errs); return Object.keys(errs).length===0;
  };

  const handleSave = async () => {
    if(!validate()){ toast('warning','Fix validation errors first'); return; }
    setSaving(true);
    const payload = {
      title:form.title, slug:form.slug, shortDesc:form.shortDesc, thumbnail:form.thumbnail,
      isFeatured:form.isFeatured, isActive:form.isActive, order:parseInt(form.order)||0,
      contentBlocks:form.blocks.map((b,i)=>({ type:b.type, order:i, isVisible:b.isVisible, data:b.data })),
    };
    const url=isEdit?`/api/admin/case-studies/${studyId}`:'/api/admin/case-studies';
    const method=isEdit?'PATCH':'POST';
    const res=await fetch(url,{method,headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const d=await res.json();
    if(d.success){
      toast('success',isEdit?'Changes saved!':'Case study created!');
      // Always redirect to list after create; keep editing on update
      if(!isEdit){ router.push('/admin/case-studies'); return; }
      setSaving(false);
    } else {
      setSaving(false);
      if(d.message?.includes('Slug')) setErrors(ev=>({...ev,slug:d.message}));
      else toast('error','Save failed',d.message);
    }
  };

  const handleThumb = async (file:File) => {
    setThumbUpl(true); const url=await uploadFile(file); setThumbUpl(false);
    if(url) set('thumbnail',url); else toast('error','Upload failed');
  };

  if(loading) return (
    <div className={e.editorLayout}><Sidebar />
      <div className={e.editorMain} style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'var(--color-text-muted)'}}>Loading…</div>
    </div>
  );

  return (
    <div className={e.editorLayout}>
      <Sidebar />
      <div className={e.editorMain}>
        <header className={e.editorHeader}>
          <div className={e.editorHeaderLeft}>
            <span className={e.editorHeaderTitle}>{isEdit?'Edit Case Study':'New Case Study'}</span>
            <span className={e.editorHeaderBreadcrumb}>Case Studies / {form.title||(isEdit?'Edit':'New')}</span>
          </div>
          <div className={e.editorHeaderActions}>
            <button className={`${e.btn} ${e.btnSecondary}`} onClick={()=>router.push('/admin/case-studies')} disabled={saving}><BackIcon/> Back</button>
            <button className={`${e.btn} ${e.btnPrimary}`}   onClick={handleSave} disabled={saving}><SaveIcon/> {saving?'Saving…':'Save'}</button>
          </div>
        </header>

        <div className={e.editorBody}>
          {/* ── LEFT ── */}
          <div className={e.editorLeft}>
            {/* Listing info */}
            <div className={e.listingCard}>
              <div className={e.listingCardTitle}>📋 Listing Information</div>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Title <span className={e.fRequired}>*</span></label>
                  <input className={`${e.fInput}${errors.title?' '+e.err:''}`} value={form.title} onChange={ev=>changeTitle(ev.target.value)} placeholder="e.g. Damru By Namo Case Study"/>
                  {errors.title&&<span className={e.fError}>{errors.title}</span>}
                </div>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Slug <span className={e.fRequired}>*</span></label>
                  <input className={`${e.fInput}${errors.slug?' '+e.err:''}`} value={form.slug}
                    onChange={ev=>{setSM(true);set('slug',ev.target.value.toLowerCase().replace(/[^a-z0-9-]/g,''));}}
                    placeholder="auto-generated" style={{fontFamily:'var(--font-mono)',fontSize:12}}/>
                  {errors.slug?<span className={e.fError}>{errors.slug}</span>:<span className={e.fHint}>Auto-generated. Must be unique.</span>}
                </div>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Short Description <span className={e.fHint}>{form.shortDesc.length}/500</span></label>
                  <textarea className={e.fTextarea} value={form.shortDesc} onChange={ev=>set('shortDesc',ev.target.value)} placeholder="Brief summary for listing page…" rows={2} maxLength={500}/>
                </div>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Listing Thumbnail <span className={e.fRequired}>*</span></label>
                  {form.thumbnail?(
                    <div className={e.uploadPreview}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={form.thumbnail} alt="thumb" className={e.uploadPreviewImg} style={{height:140}}/>
                      <div className={e.uploadPreviewOverlay}>
                        <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={()=>set('thumbnail','')}>Remove</button>
                      </div>
                    </div>
                  ):(
                    <div className={e.uploadArea}>
                      <span className={e.uploadIcon}><UploadIcon/></span>
                      <span className={e.uploadText}>{thumbUpl?'Uploading…':'Click or drag to upload'}</span>
                      <span className={e.uploadHint}>JPEG · PNG · WebP · Max 5 MB</span>
                      <input className={e.uploadInput} type="file" accept="image/*" disabled={thumbUpl}
                        onChange={ev=>{const f=ev.target.files?.[0];if(f)handleThumb(f);ev.target.value='';}}/>
                    </div>
                  )}
                  {errors.thumbnail&&<span className={e.fError}>{errors.thumbnail}</span>}
                </div>
              </div>
            </div>

            {/* Block list */}
            <div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
                <div style={{fontSize:13,fontWeight:700,color:'var(--color-text-secondary)'}}>
                  Content Blocks <span style={{fontSize:12,fontWeight:500,color:'var(--color-text-muted)'}}>({form.blocks.length})</span>
                </div>
                <button className={`${e.btn} ${e.btnPrimary} ${e.btnSm}`} type="button" onClick={()=>setShowAdd(p=>!p)}>
                  <PlusIcon/> Add Block
                </button>
              </div>

              {form.blocks.length===0&&!showAdd&&(
                <div style={{padding:'32px 20px',textAlign:'center',background:'var(--color-surface)',border:'2px dashed var(--color-border)',borderRadius:'var(--radius-lg)',color:'var(--color-text-muted)',fontSize:13}}>
                  No content blocks yet.<br/><strong>Click &quot;Add Block&quot;</strong> to start building the page.
                </div>
              )}

              <div className={e.blockList}>
                {form.blocks.map((block,idx)=>{
                  const meta=BLOCK_TYPES.find(bt=>bt.type===block.type);
                  return (
                    <div key={block.id}
                      className={`${e.blockCard}${block.collapsed?' '+e.blockCollapsed:''}${!block.isVisible?' '+e.blockCardHidden:''}`}
                      draggable onDragStart={()=>onDragStart(idx)} onDragEnter={()=>onDragEnter(idx)}
                      onDragEnd={onDragEnd} onDragOver={ev=>ev.preventDefault()}>
                      <div className={e.blockCardHeader}>
                        <span className={e.blockDragHandle} title="Drag to reorder"><GripIcon/></span>
                        <span className={`${e.blockTypeBadge} ${TYPE_CLS[block.type]}`}>{meta?.emoji} {meta?.label}</span>
                        <span className={e.blockHeaderLabel}>{getLabel(block.type,block.data)}</span>
                        <div className={e.blockHeaderControls}>
                          <button className={e.blockHeaderBtn} title={block.isVisible?'Hide':'Show'} onClick={()=>toggleVis(block.id)}>{block.isVisible?<EyeIcon/>:<EyeOffIcon/>}</button>
                          <button className={e.blockHeaderBtn} title="Move up"   disabled={idx===0}                      onClick={()=>moveBlock(idx,idx-1)}><ChevUp/></button>
                          <button className={e.blockHeaderBtn} title="Move down" disabled={idx===form.blocks.length-1}   onClick={()=>moveBlock(idx,idx+1)}><ChevDown/></button>
                          <button className={`${e.blockHeaderBtn} ${e.danger}`} title="Delete" onClick={()=>removeBlock(block.id)}><TrashIcon/></button>
                          <button className={e.blockHeaderBtn} title={block.collapsed?'Expand':'Collapse'} onClick={()=>toggleCollapse(block.id)}>
                            <span style={{display:'inline-flex',transform:block.collapsed?'rotate(-90deg)':'none',transition:'transform 0.15s'}}><ChevDown/></span>
                          </button>
                        </div>
                      </div>
                      {!block.collapsed&&(
                        <BlockRouter type={block.type} data={block.data} onChange={data=>updateBlock(block.id,data)}/>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Add block panel */}
              {showAdd&&(
                <div className={e.addBlockPanel} style={{marginTop:12}}>
                  <div className={e.addBlockTitle}>Choose a Block Type</div>
                  <div className={e.addBlockGrid}>
                    {BLOCK_TYPES.map(bt=>(
                      <button key={bt.type} className={e.addBlockBtn} type="button" onClick={()=>addBlock(bt.type)} title={bt.desc}>
                        <span className={e.addBlockBtnIcon}>{bt.emoji}</span>
                        <span className={e.addBlockBtnLabel}>{bt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div style={{textAlign:'center',marginTop:10}}>
                    <button className={`${e.btn} ${e.btnGhost} ${e.btnSm}`} type="button" onClick={()=>setShowAdd(false)}>
                      <XIcon/> Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className={e.editorRight}>
            <div className={e.sideCard}>
              <div className={e.sideCardHeader}>Publish Settings</div>
              <div className={e.sideCardBody}>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Visibility</label>
                  <label className={e.toggleRow}>
                    <span className={e.toggle}><input type="checkbox" checked={form.isActive} onChange={ev=>set('isActive',ev.target.checked)}/><span className={e.toggleSlider}/></span>
                    <span className={e.toggleLabel}>{form.isActive?'Published':'Draft'}</span>
                  </label>
                </div>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Featured</label>
                  <label className={e.toggleRow}>
                    <span className={e.toggle}><input type="checkbox" checked={form.isFeatured} onChange={ev=>set('isFeatured',ev.target.checked)}/><span className={e.toggleSlider}/></span>
                    <span className={e.toggleLabel}>{form.isFeatured?'Featured':'Normal'}</span>
                  </label>
                </div>
                <div className={e.fGroup}>
                  <label className={e.fLabel}>Sort Order</label>
                  <input className={e.fInput} type="number" min="0" value={form.order} onChange={ev=>set('order',ev.target.value)}/>
                </div>
              </div>
            </div>

            {/* Block summary */}
            <div className={e.sideCard}>
              <div className={e.sideCardHeader}>Page Structure ({form.blocks.length} blocks)</div>
              <div className={e.sideCardBody} style={{gap:5,padding:'10px 14px'}}>
                {form.blocks.length===0
                  ?<span style={{fontSize:12,color:'var(--color-text-muted)'}}>No blocks yet</span>
                  :form.blocks.map((b,i)=>{
                    const meta=BLOCK_TYPES.find(bt=>bt.type===b.type);
                    return (
                      <div key={b.id} style={{display:'flex',alignItems:'center',gap:7,fontSize:12,cursor:'pointer',padding:'2px 0'}} onClick={()=>toggleCollapse(b.id)}>
                        <span style={{color:'var(--color-text-muted)',width:18,textAlign:'right',fontVariantNumeric:'tabular-nums'}}>{i+1}.</span>
                        <span style={{flex:1,color:b.isVisible?'var(--color-text-secondary)':'var(--color-text-muted)',fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{meta?.emoji} {meta?.label}</span>
                        {!b.isVisible&&<span style={{fontSize:10,color:'var(--color-text-muted)'}}>hidden</span>}
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <button className={`${e.btn} ${e.btnPrimary}`} style={{width:'100%'}} onClick={handleSave} disabled={saving}>
              <SaveIcon/> {saving?'Saving…':isEdit?'Save Changes':'Create'}
            </button>

            {/* Quick add */}
            <div className={e.sideCard}>
              <div className={e.sideCardHeader}>Quick Add Block</div>
              <div className={e.sideCardBody} style={{gap:5}}>
                {BLOCK_TYPES.map(bt=>(
                  <button key={bt.type} className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button"
                    style={{width:'100%',justifyContent:'flex-start',gap:7}} onClick={()=>addBlock(bt.type)}>
                    {bt.emoji} {bt.label}
                  </button>
                ))}
              </div>
            </div>

            {Object.keys(errors).length>0&&(
              <div style={{padding:'10px 12px',background:'var(--color-danger-pale)',borderRadius:'var(--radius-md)',border:'1px solid rgba(239,68,68,0.2)'}}>
                <div style={{fontSize:12,fontWeight:700,color:'var(--color-danger)',marginBottom:5}}>Fix errors:</div>
                {Object.entries(errors).slice(0,6).map(([k,v])=>(
                  <div key={k} style={{fontSize:12,color:'#b91c1c',marginBottom:2}}>• {v}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyEditor({ studyId }: { studyId?:string }) {
  return <ToastProvider><EditorInner studyId={studyId}/></ToastProvider>;
}
