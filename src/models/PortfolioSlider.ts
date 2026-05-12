import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPortfolioSlider extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  subtitle: string;
  description: string;
  desktopImage: string;      // stored path / URL
  mobileImage: string | null;
  altText: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioSliderSchema = new Schema<IPortfolioSlider>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    subtitle: {
      type: String,
      trim: true,
      maxlength: [200, 'Subtitle cannot exceed 200 characters'],
      default: '',
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: '',
    },
    desktopImage: {
      type: String,
      required: [true, 'Desktop image is required'],
    },
    mobileImage: {
      type: String,
      default: null,
    },
    altText: {
      type: String,
      trim: true,
      maxlength: [200, 'Alt text cannot exceed 200 characters'],
      default: '',
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

// Compound index for efficient sorted active-only queries
portfolioSliderSchema.index({ isActive: 1, order: 1 });

const PortfolioSlider: Model<IPortfolioSlider> =
  (mongoose.models['PortfolioSlider'] as Model<IPortfolioSlider>) ??
  mongoose.model<IPortfolioSlider>('PortfolioSlider', portfolioSliderSchema);

export default PortfolioSlider;
