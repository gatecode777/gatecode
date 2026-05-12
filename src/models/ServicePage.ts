import mongoose, { Document, Model, Schema } from 'mongoose';

export type ServiceBlockType =
  | 'hero' | 'intro' | 'cards' | 'textWithImage' | 'process'
  | 'industries' | 'text' | 'bullets' | 'imageGrid' | 'cta'
  | 'twoColumn' | 'divider' | 'buttons';

/** Distinguishes a category-level page from a sub-service page */
export type ServicePageType = 'category' | 'subservice';

export interface IServiceBlock {
  _id: mongoose.Types.ObjectId;
  type: ServiceBlockType;
  order: number;
  isVisible: boolean;
  data: Record<string, unknown>;
}

const serviceBlockSchema = new Schema<IServiceBlock>(
  {
    type:      { type: String, required: true, enum: ['hero','intro','cards','textWithImage','process','industries','text','bullets','imageGrid','cta','twoColumn','divider','buttons'] },
    order:     { type: Number, required: true, default: 0 },
    isVisible: { type: Boolean, default: true },
    data:      { type: Schema.Types.Mixed, required: true, default: {} },
  },
  { _id: true, versionKey: false }
);

export interface IServicePage extends Document {
  _id: mongoose.Types.ObjectId;
  /**
   * pageType = 'subservice' → subServiceId holds a SubService ObjectId
   * pageType = 'category'   → subServiceId holds the ServiceCategory ObjectId
   *                           (kept as subServiceId for schema simplicity, but
   *                            NOT indexed as unique when pageType = 'category')
   */
  pageType:     ServicePageType;
  subServiceId: mongoose.Types.ObjectId | null;  // null for category pages
  categoryId:   mongoose.Types.ObjectId;
  slug:         string;
  contentBlocks: IServiceBlock[];
  isActive:     boolean;
  createdAt:    Date;
  updatedAt:    Date;
}

const servicePageSchema = new Schema<IServicePage>(
  {
    pageType:     { type: String, enum: ['category', 'subservice'], required: true, default: 'subservice', index: true },
    // NOT unique globally — uniqueness enforced by sparse partial indexes below
    subServiceId: { type: Schema.Types.ObjectId, default: null, index: true },
    categoryId:   { type: Schema.Types.ObjectId, ref: 'ServiceCategory', required: true, index: true },
    slug:         { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    contentBlocks:{ type: [serviceBlockSchema], default: [] },
    isActive:     { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

// Unique sub-service pages: one page per subServiceId (only when pageType = 'subservice')
servicePageSchema.index(
  { subServiceId: 1 },
  { unique: true, partialFilterExpression: { pageType: 'subservice', subServiceId: { $ne: null } } }
);

// Unique category pages: one page per categoryId (only when pageType = 'category')
servicePageSchema.index(
  { categoryId: 1 },
  { unique: true, partialFilterExpression: { pageType: 'category' } }
);

servicePageSchema.index({ categoryId: 1, isActive: 1 });

const ServicePage: Model<IServicePage> =
  (mongoose.models['ServicePage'] as Model<IServicePage>) ??
  mongoose.model<IServicePage>('ServicePage', servicePageSchema);

export default ServicePage;
