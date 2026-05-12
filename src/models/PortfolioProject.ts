import mongoose, { Document, Model, Schema } from 'mongoose';

// ── Button sub-document ────────────────────────────────────────────────────
export interface IProjectButton {
  _id: mongoose.Types.ObjectId;
  label: string;
  url: string;
  openInNewTab: boolean;
  isActive: boolean;
  order: number;
}

const projectButtonSchema = new Schema<IProjectButton>(
  {
    label: {
      type: String,
      required: [true, 'Button label is required'],
      trim: true,
      maxlength: [60, 'Button label cannot exceed 60 characters'],
    },
    url: {
      type: String,
      required: [true, 'Button URL is required'],
      trim: true,
      maxlength: [2048, 'URL cannot exceed 2048 characters'],
    },
    openInNewTab: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: true, versionKey: false }
);

// ── Portfolio Project main document ───────────────────────────────────────
export interface IPortfolioProject extends Document {
  _id: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId | null;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;            // stored path / URL
  technologies: string[];
  buttons: IProjectButton[];
  isFeatured: boolean;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioProjectSchema = new Schema<IPortfolioProject>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'PortfolioCategory',
      default: null,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers, and hyphens'],
      index: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
      default: '',
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail image is required'],
    },
    technologies: {
      type: [String],
      default: [],
      validate: {
        validator: (arr: string[]) => arr.length <= 30,
        message: 'Cannot list more than 30 technologies',
      },
    },
    buttons: {
      type: [projectButtonSchema],
      default: [],
      validate: {
        validator: (arr: IProjectButton[]) => arr.length <= 10,
        message: 'Cannot have more than 10 buttons per project',
      },
    },
    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    order: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Compound indexes for common query patterns
portfolioProjectSchema.index({ isActive: 1, order: 1 });
portfolioProjectSchema.index({ categoryId: 1, isActive: 1, order: 1 });
portfolioProjectSchema.index({ isFeatured: 1, isActive: 1 });

const PortfolioProject: Model<IPortfolioProject> =
  (mongoose.models['PortfolioProject'] as Model<IPortfolioProject>) ??
  mongoose.model<IPortfolioProject>('PortfolioProject', portfolioProjectSchema);

export default PortfolioProject;
