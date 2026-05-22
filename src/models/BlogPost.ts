import mongoose, { Document, Model, Schema } from 'mongoose';

// ── Block types ────────────────────────────────────────────────────────────
// paragraph      → { text: string }
// heading        → { text: string, level: 'h2'|'h3'|'h4', style: 'normal'|'yellow' }
// bulletList     → { title?: string, items: string[] }
// numberedList   → { title?: string, items: string[] }
// numberedSection→ { number: string, title: string, body: string, subItems?: string[] }
// imageGrid      → { images: { url: string, alt: string }[] }
// singleImage    → { url: string, alt: string, caption?: string }
// quote          → { text: string, author?: string }
// divider        → {}
// callout        → { text: string, style: 'info'|'warning'|'tip' }

export interface IContentBlock {
  _id: mongoose.Types.ObjectId;
  type: 'paragraph'|'heading'|'bulletList'|'numberedList'|'numberedSection'|'imageGrid'|'singleImage'|'quote'|'divider'|'callout';
  order: number;
  isVisible: boolean;
  data: Record<string, unknown>;
}

export interface IBlogPost extends Document {
  _id: mongoose.Types.ObjectId;
  // ── Core ──
  title: string;
  subtitle: string;
  slug: string;
  categoryId: mongoose.Types.ObjectId | null;
  // ── Media ──
  coverImage: string;
  coverImageAlt: string;
  // ── Author ──
  authorName: string;
  authorImage: string;
  authorRole: string;
  // ── Content blocks ──
  contentBlocks: IContentBlock[];
  // ── SEO ──
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalUrl: string;
  ogImage: string;
  // ── Status ──
  status: 'draft' | 'published';
  publishedAt: Date | null;
  isActive: boolean;
  isFeatured: boolean;
  readingTimeMinutes: number;
  viewCount: number;
  commentCount: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const contentBlockSchema = new Schema<IContentBlock>(
  {
    type:      { type: String, required: true, enum: ['paragraph','heading','bulletList','numberedList','numberedSection','imageGrid','singleImage','quote','divider','callout'] },
    order:     { type: Number, default: 0 },
    isVisible: { type: Boolean, default: true },
    data:      { type: Schema.Types.Mixed, default: {} },
  },
  { _id: true, versionKey: false }
);

const blogPostSchema = new Schema<IBlogPost>(
  {
    title:          { type: String, required: [true, 'Title is required'], trim: true, maxlength: [200, 'Max 200 chars'] },
    subtitle:       { type: String, trim: true, maxlength: [300, 'Max 300 chars'], default: '' },
    slug:           { type: String, required: true, unique: true, lowercase: true, trim: true, match: [/^[a-z0-9-]+$/, 'Slug: lowercase, numbers, hyphens only'], index: true },
    categoryId:     { type: Schema.Types.ObjectId, ref: 'BlogCategory', default: null, index: true },
    // Media
    coverImage:     { type: String, default: '' },
    coverImageAlt:  { type: String, trim: true, maxlength: [200, 'Max 200 chars'], default: '' },
    // Author
    authorName:     { type: String, trim: true, maxlength: [100, 'Max 100 chars'], default: '' },
    authorImage:    { type: String, default: '' },
    authorRole:     { type: String, trim: true, maxlength: [100, 'Max 100 chars'], default: '' },
    // Content
    contentBlocks:  { type: [contentBlockSchema], default: [] },
    // SEO
    metaTitle:        { type: String, trim: true, maxlength: [70, 'Max 70 chars — Google truncates beyond this'], default: '' },
    metaDescription:  { type: String, trim: true, maxlength: [160, 'Max 160 chars — Google truncates beyond this'], default: '' },
    metaKeywords:     { type: [String], default: [] },
    canonicalUrl:     { type: String, trim: true, default: '' },
    ogImage:          { type: String, default: '' },
    // Status
    status:           { type: String, enum: ['draft','published'], default: 'draft', index: true },
    publishedAt:      { type: Date, default: null },
    isActive:         { type: Boolean, default: true, index: true },
    isFeatured:       { type: Boolean, default: false, index: true },
    readingTimeMinutes: { type: Number, default: 0 },
    viewCount:        { type: Number, default: 0 },
    commentCount:     { type: Number, default: 0 },
    order:            { type: Number, default: 0, index: true },
  },
  { timestamps: true, versionKey: false }
);

blogPostSchema.index({ status: 1, isActive: 1, publishedAt: -1 });
blogPostSchema.index({ categoryId: 1, status: 1, isActive: 1 });
blogPostSchema.index({ isFeatured: 1, status: 1 });

const BlogPost: Model<IBlogPost> =
  (mongoose.models['BlogPost'] as Model<IBlogPost>) ??
  mongoose.model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
