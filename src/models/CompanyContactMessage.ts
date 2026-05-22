import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICompanyContactMessage extends Document {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

const companyContactMessageSchema = new Schema<ICompanyContactMessage>(
  {
    firstName: { type: String, required: [true, 'First name is required'], trim: true, maxlength: [80, 'Max 80 chars'] },
    lastName:  { type: String, required: [true, 'Last name is required'], trim: true, maxlength: [80, 'Max 80 chars'] },
    email:     { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'] },
    phone:     { type: String, trim: true, maxlength: [20, 'Max 20 chars'], default: '' },
    subject:   { type: String, required: [true, 'Subject is required'], trim: true, maxlength: [120, 'Max 120 chars'] },
    message:   { type: String, required: [true, 'Message is required'], trim: true, maxlength: [2000, 'Max 2000 chars'] },
    status:    { type: String, enum: ['new', 'read', 'replied'], default: 'new', index: true },
  },
  { timestamps: true, versionKey: false }
);

companyContactMessageSchema.index({ status: 1, createdAt: -1 });
companyContactMessageSchema.index({ firstName: 'text', lastName: 'text', email: 'text', subject: 'text' });

const CompanyContactMessage: Model<ICompanyContactMessage> =
  (mongoose.models['CompanyContactMessage'] as Model<ICompanyContactMessage>) ??
  mongoose.model<ICompanyContactMessage>('CompanyContactMessage', companyContactMessageSchema);

export default CompanyContactMessage;
