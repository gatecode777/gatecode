import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IJobApplication extends Document {
  _id: mongoose.Types.ObjectId;
  applicationType: 'job' | 'internship';
  fullName: string;
  email: string;
  phone: string;
  position: string;
  resumeUrl: string;
  resumeOriginalName: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const jobApplicationSchema = new Schema<IJobApplication>(
  {
    applicationType:    { type: String, enum: ['job', 'internship'], required: true, index: true },
    fullName:           { type: String, required: [true, 'Full name is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    email:              { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'] },
    phone:              { type: String, required: [true, 'Phone is required'], trim: true, maxlength: [20, 'Max 20 chars'] },
    position:           { type: String, required: [true, 'Position is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    resumeUrl:          { type: String, required: [true, 'Resume is required'], trim: true },
    resumeOriginalName: { type: String, trim: true, default: '' },
    status:             { type: String, enum: ['new', 'reviewed', 'shortlisted', 'rejected'], default: 'new', index: true },
  },
  { timestamps: true, versionKey: false }
);

jobApplicationSchema.index({ applicationType: 1, status: 1, createdAt: -1 });

const JobApplication: Model<IJobApplication> =
  (mongoose.models['JobApplication'] as Model<IJobApplication>) ??
  mongoose.model<IJobApplication>('JobApplication', jobApplicationSchema);

export default JobApplication;