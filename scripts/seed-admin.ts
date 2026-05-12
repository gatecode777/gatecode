/**
 * Seed Script: Create Initial Admin User
 *
 * Usage:
 *   npx tsx scripts/seed-admin.ts
 *
 * Requires MONGODB_URI in .env.local
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require('mongoose');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcryptjs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const MONGODB_URI: string = process.env.MONGODB_URI ?? '';
if (!MONGODB_URI) {
  console.error('❌  MONGODB_URI not found in .env.local');
  process.exit(1);
}

const adminSchema = new mongoose.Schema(
  {
    email:     { type: String, required: true, unique: true, lowercase: true },
    password:  { type: String, required: true },
    name:      { type: String, required: true },
    role:      { type: String, default: 'admin' },
    isActive:  { type: Boolean, default: true },
    lastLogin: { type: Date,   default: null },
  },
  { timestamps: true }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminModel = mongoose.models?.Admin ?? mongoose.model('Admin', adminSchema);

async function seed() {
  const adminEmail    = process.env.ADMIN_EMAIL    ?? 'admin@company.com';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Admin@123456';
  const adminName     = 'Super Admin';

  try {
    console.log('🔗  Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅  Connected\n');

    const existing = await AdminModel.findOne({ email: adminEmail });
    if (existing) {
      console.log(`⚠️   Admin already exists: ${adminEmail}`);
      console.log('    Delete the existing record or use a different email.\n');
      await mongoose.disconnect();
      return;
    }

    const salt           = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    const admin = await AdminModel.create({
      email:    adminEmail,
      password: hashedPassword,
      name:     adminName,
      role:     'admin',
      isActive: true,
    });

    console.log('🎉  Admin created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`   ID:       ${admin._id}`);
    console.log(`   Name:     ${adminName}`);
    console.log(`   Email:    ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🔐  Change your password after first login!\n');
  } catch (error) {
    console.error('❌  Seed failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌  Disconnected from MongoDB');
  }
}

seed();
