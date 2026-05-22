import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBlogCategory extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogCategorySchema = new Schema<IBlogCategory>(
  {
    name:        { type: String, required: [true, 'Name is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    slug:        { type: String, required: true, unique: true, lowercase: true, trim: true, match: [/^[a-z0-9-]+$/, 'Slug: lowercase, numbers, hyphens only'] },
    description: { type: String, trim: true, maxlength: [500, 'Max 500 chars'], default: '' },
    order:       { type: Number, default: 0, index: true },
    isActive:    { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

blogCategorySchema.index({ isActive: 1, order: 1 });

const BlogCategory: Model<IBlogCategory> =
  (mongoose.models['BlogCategory'] as Model<IBlogCategory>) ??
  mongoose.model<IBlogCategory>('BlogCategory', blogCategorySchema);

export default BlogCategory;
