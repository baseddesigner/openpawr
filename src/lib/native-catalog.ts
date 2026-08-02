import catalog from '../generated/native-catalog.json'
import type { NativeCatalog, NativeCatalogEntry } from './types'

const snapshot = catalog as NativeCatalog

/**
 * native widgets shown on the playground: every renderable catalog entry
 * except the `community` wrapper (that one is the mount point for the
 * community widgets above, not a native widget itself).
 */
export function listNativeWidgets(): NativeCatalogEntry[] {
  return snapshot.widgets
    .filter((entry) => entry.renderable !== false && entry.type !== 'community')
    .sort((a, b) => a.label.localeCompare(b.label))
}
