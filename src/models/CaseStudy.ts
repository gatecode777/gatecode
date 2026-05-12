import mongoose, { Document, Model, Schema } from 'mongoose';

/**
 * BLOCK-BASED CaseStudy model
 * Each case study has a `contentBlocks` array.
 * Every block has a `type` and a `data` payload.
 * Blocks can be added, removed, and reordered freely.
 *
 * Supported block types (matches reference UI):
 *   hero          – banner image + title + subtitle
 *   text          – rich-text paragraph (intro, conclusion, any prose)
 *   challenge     – title + rich-text body
 *   solution      – title + rich-text body + optional image (side-by-side)
 *   keyFeatures   – section title + bullet list
 *   results       – section title + bullet list
 *   technologies  – section title + [{name, icon}]
 *   image         – standalone image block (caption optional)
 *   buttons       – row of CTA buttons
 *   divider       – horizontal rule / spacer
 *   twoColumn     – left rich-text + right image (or two rich-text cols)
 */

// ── Block data interfaces ──────────────────────────────────────────────────
export type BlockType =
  | 'hero'
  | 'text'
  | 'challenge'
  | 'solution'
  | 'keyFeatures'
  | 'results'
  | 'technologies'
  | 'image'
  | 'buttons'
  | 'divider'
  | 'twoColumn';

export interface HeroData       { title: string; subtitle: string; bannerImage: string; }
export interface TextData       { title?: string; body: string; }               // rich html
export interface ChallengeData  { title: string; body: string; }
export interface SolutionData   { title: string; body: string; image?: string; imagePosition?: 'left' | 'right'; }
export interface KeyFeaturesData{ title: string; items: string[]; }
export interface ResultsData    { title: string; items: string[]; }
export interface TechnologiesData { title: string; items: Array<{ name: string; icon: string }> }
export interface ImageData      { url: string; caption?: string; alt?: string; width?: 'full' | 'medium' | 'small'; }
export interface ButtonsData    { buttons: Array<{ label: string; url: string; openInNewTab: boolean; style: 'primary' | 'secondary' | 'outline'; }> }
export interface DividerData    { spacing?: 'sm' | 'md' | 'lg'; }
export interface TwoColumnData  { leftBody: string; rightBody?: string; rightImage?: string; }

export type BlockData =
  | HeroData | TextData | ChallengeData | SolutionData
  | KeyFeaturesData | ResultsData | TechnologiesData
  | ImageData | ButtonsData | DividerData | TwoColumnData;

export interface IContentBlock {
  _id: mongoose.Types.ObjectId;
  type: BlockType;
  order: number;
  isVisible: boolean;
  data: BlockData;
}

const contentBlockSchema = new Schema<IContentBlock>(
  {
    type:      { type: String, required: true, enum: ['hero','text','challenge','solution','keyFeatures','results','technologies','image','buttons','divider','twoColumn'] },
    order:     { type: Number, required: true, default: 0 },
    isVisible: { type: Boolean, default: true },
    data:      { type: Schema.Types.Mixed, required: true, default: {} },
  },
  { _id: true, versionKey: false }
);

// ── Main document ──────────────────────────────────────────────────────────
export interface ICaseStudy extends Document {
  _id: mongoose.Types.ObjectId;
  title:       string;
  slug:        string;
  shortDesc:   string;
  thumbnail:   string;
  isFeatured:  boolean;
  isActive:    boolean;
  order:       number;
  contentBlocks: IContentBlock[];
  createdAt: Date;
  updatedAt: Date;
}

const caseStudySchema = new Schema<ICaseStudy>(
  {
    title:     { type: String, required: [true,'Title is required'], trim: true, maxlength: [200,'Title max 200 chars'] },
    slug:      { type: String, required: [true,'Slug is required'], unique: true, lowercase: true, trim: true, match:[/^[a-z0-9-]+$/,'Slug: lowercase, numbers, hyphens only'], index: true },
    shortDesc: { type: String, trim: true, maxlength:[500,'Short desc max 500 chars'], default:'' },
    thumbnail: { type: String, required:[true,'Thumbnail is required'] },
    isFeatured:{ type: Boolean, default: false, index: true },
    isActive:  { type: Boolean, default: true,  index: true },
    order:     { type: Number,  default: 0,     index: true },
    contentBlocks: { type: [contentBlockSchema], default: [] },
  },
  { timestamps: true, versionKey: false }
);

caseStudySchema.index({ isActive:1, order:1 });
caseStudySchema.index({ isFeatured:1, isActive:1 });

const CaseStudy: Model<ICaseStudy> =
  (mongoose.models['CaseStudy'] as Model<ICaseStudy>) ??
  mongoose.model<ICaseStudy>('CaseStudy', caseStudySchema);

export default CaseStudy;
