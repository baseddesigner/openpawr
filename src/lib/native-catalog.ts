import catalog from '../generated/native-catalog.json'
import type { NativeCatalog, NativeCatalogEntry } from './types'

const snapshot = catalog as NativeCatalog

/** retired native types we don't show on the playground */
const EXCLUDED_TYPES = new Set(['community', 'codex-pet'])

/**
 * native widgets shown on the playground: renderable catalog entries that
 * can render in a 1x1 cell, minus the `community` wrapper (the mount point
 * for the community widgets above) and retired types.
 * coverage of the hardcoded previews is enforced by
 * scripts/check-native-previews.mjs (runs in `pnpm check`).
 */
export function listNativeWidgets(): NativeCatalogEntry[] {
  return snapshot.widgets
    .filter(
      (entry) =>
        entry.renderable !== false &&
        !EXCLUDED_TYPES.has(entry.type) &&
        entry.allowedSizes.includes('1x1'),
    )
    .sort((a, b) => a.label.localeCompare(b.label))
}
