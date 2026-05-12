import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPortfolioCategory extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description: string;
  icon: string | null;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioCategorySchema = new Schema<IPortfolioCategory>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
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
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true, versionKey: false }
);

portfolioCategorySchema.index({ isActive: 1, order: 1 });

const PortfolioCategory: Model<IPortfolioCategory> =
  (mongoose.models['PortfolioCategory'] as Model<IPortfolioCategory>) ??
  mongoose.model<IPortfolioCategory>('PortfolioCategory', portfolioCategorySchema);

export default PortfolioCategory;
