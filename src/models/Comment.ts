import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IComment extends Document {
  _id: mongoose.Types.ObjectId;
  postId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  website?: string;
  content: string;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    postId:    { type: Schema.Types.ObjectId, ref: 'BlogPost', required: true, index: true },
    name:      { type: String, required: [true, 'Name is required'], trim: true, maxlength: 100 },
    email:     { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    website:   { type: String, trim: true, default: '' },
    content:   { type: String, required: [true, 'Comment is required'], trim: true, maxlength: 2000 },
    isApproved:{ type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

commentSchema.index({ postId: 1, createdAt: -1 });
commentSchema.index({ postId: 1, isApproved: 1, createdAt: -1 });

const Comment: Model<IComment> =
  (mongoose.models['Comment'] as Model<IComment>) ??
  mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
