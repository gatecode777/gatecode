import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IClientInquiry extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

const clientInquirySchema = new Schema<IClientInquiry>(
  {
    name:        { type: String, required: [true, 'Name is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    phone:       { type: String, required: [true, 'Phone is required'], trim: true, maxlength: [20, 'Max 20 chars'] },
    email:       { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'] },
    requirement: { type: String, required: [true, 'Requirement is required'], trim: true, maxlength: [200, 'Max 200 chars'] },
    budget:      { type: String, required: [true, 'Budget is required'], trim: true, maxlength: [50, 'Max 50 chars'] },
    status:      { type: String, enum: ['new', 'read', 'replied'], default: 'new', index: true },
  },
  { timestamps: true, versionKey: false }
);

clientInquirySchema.index({ status: 1, createdAt: -1 });

const ClientInquiry: Model<IClientInquiry> =
  (mongoose.models['ClientInquiry'] as Model<IClientInquiry>) ??
  mongoose.model<IClientInquiry>('ClientInquiry', clientInquirySchema);

export default ClientInquiry;
