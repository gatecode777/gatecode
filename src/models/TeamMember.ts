import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITeamMember extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  designation: string;
  image: string;          // uploaded URL
  stars: number;          // 1–5
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name:        { type: String, required: [true, 'Name is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    designation: { type: String, required: [true, 'Designation is required'], trim: true, maxlength: [100, 'Max 100 chars'] },
    image:       { type: String, required: [true, 'Image is required'], trim: true },
    stars:       { type: Number, required: true, min: 1, max: 5, default: 5 },
    order:       { type: Number, default: 0, index: true },
    isActive:    { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false }
);

teamMemberSchema.index({ isActive: 1, order: 1 });

const TeamMember: Model<ITeamMember> =
  (mongoose.models['TeamMember'] as Model<ITeamMember>) ??
  mongoose.model<ITeamMember>('TeamMember', teamMemberSchema);

export default TeamMember;
