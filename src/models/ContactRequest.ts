import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IContactRequest extends Document {
  _id: mongoose.Types.ObjectId;
  projectDetails: string;
  name: string;
  email: string;
  phone: string;
  agreePrivacy: boolean;
  requestNda: boolean;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

const contactRequestSchema = new Schema<IContactRequest>(
  {
    projectDetails: { type: String, required: [true, 'Project details are required'], trim: true, maxlength: [2000, 'Max 2000 chars'] },
    name:           { type: String, required: [true, 'Name is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    email:          { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'] },
    phone:          { type: String, required: [true, 'Phone is required'], trim: true, maxlength: [20, 'Max 20 chars'] },
    agreePrivacy:   { type: Boolean, required: [true, 'Privacy policy agreement required'] },
    requestNda:     { type: Boolean, default: false },
    status:         { type: String, enum: ['new', 'read', 'replied'], default: 'new', index: true },
  },
  { timestamps: true, versionKey: false }
);

contactRequestSchema.index({ status: 1, createdAt: -1 });

const ContactRequest: Model<IContactRequest> =
  (mongoose.models['ContactRequest'] as Model<IContactRequest>) ??
  mongoose.model<IContactRequest>('ContactRequest', contactRequestSchema);

export default ContactRequest;