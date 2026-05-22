import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IQuoteRequest extends Document {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  companyName: string;
  mobileNumber: string;
  email: string;
  additionalDetail?: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

const quoteRequestSchema = new Schema<IQuoteRequest>(
  {
    fullName:        { type: String, required: [true, 'Full name is required'], trim: true, maxlength: 100 },
    companyName:     { type: String, required: [true, 'Company name is required'], trim: true, maxlength: 200 },
    mobileNumber:    { type: String, required: [true, 'Mobile number is required'], trim: true, maxlength: 20 },
    email:           { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    additionalDetail:{ type: String, trim: true, maxlength: 2000, default: '' },
    status:          { type: String, enum: ['new', 'read', 'replied'], default: 'new', index: true },
  },
  { timestamps: true, versionKey: false }
);

const QuoteRequest: Model<IQuoteRequest> =
  (mongoose.models['QuoteRequest'] as Model<IQuoteRequest>) ??
  mongoose.model<IQuoteRequest>('QuoteRequest', quoteRequestSchema);

export default QuoteRequest;
