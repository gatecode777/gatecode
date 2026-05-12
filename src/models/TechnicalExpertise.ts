import mongoose, { Document, Model, Schema } from 'mongoose';

// ── Block types specific to Technical Expertise pages ─────────────────────
// From reference UI: hero, intro, whatWeOffer (cards with icon), whyChooseUs
// (image+title grid), process (step list), technologies (grouped table), plus
// the generic text / bullets / imageGrid / cta / twoColumn / divider / buttons
export type TEBlockType =
  | 'hero'
  | 'intro'
  | 'offerCards'     // "What We Offer" — icon + title + description cards
  | 'whyChooseUs'    // image + title grid
  | 'process'        // horizontal step list
  | 'technologies'   // grouped table (Frontend, Backend, etc.)
  | 'text'
  | 'bullets'
  | 'imageGrid'
  | 'cta'
  | 'twoColumn'
  | 'divider'
  | 'buttons';

export interface ITEBlock {
  _id: mongoose.Types.ObjectId;
  type: TEBlockType;
  order: number;
  isVisible: boolean;
  data: Record<string, unknown>;
}

const teBlockSchema = new Schema<ITEBlock>(
  {
    type: {
      type: String, required: true,
      enum: ['hero','intro','offerCards','whyChooseUs','process','technologies',
             'text','bullets','imageGrid','cta','twoColumn','divider','buttons'],
    },
    order:     { type: Number, required: true, default: 0 },
    isVisible: { type: Boolean, default: true },
    data:      { type: Schema.Types.Mixed, required: true, default: {} },
  },
  { _id: true, versionKey: false }
);

// ── Menu item ──────────────────────────────────────────────────────────────
export interface ITechnicalExpertise extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const technicalExpertiseSchema = new Schema<ITechnicalExpertise>(
  {
    name:     { type: String, required: [true, 'Name is required'], trim: true, maxlength: [150, 'Name max 150 chars'] },
    slug:     { type: String, required: [true, 'Slug is required'], unique: true, lowercase: true, trim: true, match: [/^[a-z0-9-]+$/, 'Slug: lowercase, numbers, hyphens only'], index: true },
    order:    { type: Number, default: 0, index: true },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

technicalExpertiseSchema.index({ isActive: 1, order: 1 });

// ── Detail page ────────────────────────────────────────────────────────────
export interface ITEPage extends Document {
  _id: mongoose.Types.ObjectId;
  expertiseId: mongoose.Types.ObjectId;   // FK → TechnicalExpertise (unique)
  slug: string;                            // mirrors expertise slug
  contentBlocks: ITEBlock[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const tePageSchema = new Schema<ITEPage>(
  {
    expertiseId: {
      type: Schema.Types.ObjectId,
      ref: 'TechnicalExpertise',
      required: true,
      unique: true,  // one page per expertise item
      index: true,
    },
    slug:          { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    contentBlocks: { type: [teBlockSchema], default: [] },
    isActive:      { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

// ── Models ─────────────────────────────────────────────────────────────────
export const TechnicalExpertise: Model<ITechnicalExpertise> =
  (mongoose.models['TechnicalExpertise'] as Model<ITechnicalExpertise>) ??
  mongoose.model<ITechnicalExpertise>('TechnicalExpertise', technicalExpertiseSchema);

export const TEPage: Model<ITEPage> =
  (mongoose.models['TEPage'] as Model<ITEPage>) ??
  mongoose.model<ITEPage>('TEPage', tePageSchema);

export default TechnicalExpertise;
