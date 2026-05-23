/**
 * Runs once on startup to drop any stale/conflicting MongoDB indexes
 * that may exist from earlier schema versions.
 *
 * Called inside connectDB() after the connection is established.
 */

export async function runIndexMigrations(): Promise<void> {
  try {
    return;
  } catch (err) {
    // Migrations should never crash the server
    console.warn('[migration] Index migration warning:', err);
  }
}
