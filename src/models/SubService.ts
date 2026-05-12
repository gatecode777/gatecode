import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISubService extends Document {
  _id: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const subServiceSchema = new Schema<ISubService>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'ServiceCategory',
      required: [true, 'Category is required'],
      index: true,
    },
    name:     { type: String, required: [true, 'Name is required'], trim: true, maxlength: [200, 'Name max 200 chars'] },
    slug:     { type: String, required: [true, 'Slug is required'], unique: true, lowercase: true, trim: true, match: [/^[a-z0-9-]+$/, 'Slug: lowercase, numbers, hyphens only'], index: true },
    order:    { type: Number, default: 0, index: true },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

subServiceSchema.index({ categoryId: 1, isActive: 1, order: 1 });
subServiceSchema.index({ isActive: 1, order: 1 });

const SubService: Model<ISubService> =
  (mongoose.models['SubService'] as Model<ISubService>) ??
  mongoose.model<ISubService>('SubService', subServiceSchema);

export default SubService;
