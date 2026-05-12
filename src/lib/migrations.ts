/**
 * Runs once on startup to drop any stale/conflicting MongoDB indexes
 * that may exist from earlier schema versions.
 *
 * Called inside connectDB() after the connection is established.
 */
import mongoose from 'mongoose';

export async function runIndexMigrations(): Promise<void> {
  try {
    const db = mongoose.connection.db;
    if (!db) return;

    // ── ServicePage collection ───────────────────────────────────────────────
    // Earlier schema had a global unique index on subServiceId_1 WITHOUT a
    // partialFilterExpression. This must be dropped so category pages
    // (subServiceId = null) don't collide with each other.
    try {
      const spCollection = db.collection('servicepages');
      const indexes = await spCollection.indexes();

      for (const idx of indexes) {
        const isSub = idx.key && 'subServiceId' in idx.key && Object.keys(idx.key).length === 1;
        const isOldUniqueWithoutPartial = isSub && idx.unique === true && !idx.partialFilterExpression;

        if (isOldUniqueWithoutPartial) {
          await spCollection.dropIndex(idx.name as string);
          console.log(`[migration] Dropped stale index "${idx.name}" on servicepages`);
        }
      }
    } catch {
      // Collection may not exist yet — that's fine
    }
  } catch (err) {
    // Migrations should never crash the server
    console.warn('[migration] Index migration warning:', err);
  }
}
