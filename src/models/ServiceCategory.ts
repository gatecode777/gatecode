import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IServiceCategory extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const serviceCategorySchema = new Schema<IServiceCategory>(
  {
    name:     { type: String, required: [true, 'Name is required'], trim: true, maxlength: [120, 'Name max 120 chars'] },
    slug:     { type: String, required: [true, 'Slug is required'], unique: true, lowercase: true, trim: true, match: [/^[a-z0-9-]+$/, 'Slug: lowercase, numbers, hyphens only'], index: true },
    order:    { type: Number, default: 0, index: true },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

serviceCategorySchema.index({ isActive: 1, order: 1 });

const ServiceCategory: Model<IServiceCategory> =
  (mongoose.models['ServiceCategory'] as Model<IServiceCategory>) ??
  mongoose.model<IServiceCategory>('ServiceCategory', serviceCategorySchema);

export default ServiceCategory;
