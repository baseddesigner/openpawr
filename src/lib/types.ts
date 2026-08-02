import type { ComponentType } from 'react'

export type WidgetSize = '1x1'

export type WidgetCategory = 'utility' | 'social' | 'media' | 'links'

export interface WidgetProfile {
  displayName: string
  slug: string
  avatarUrl: string | null
  ensName: string | null
  walletAddress: string | null
}

export interface WidgetProps<TConfig = Record<string, unknown>> {
  config: TConfig
  profile: WidgetProfile
  size: WidgetSize
  isPreview?: boolean
}

export interface WidgetAuthor {
  name: string
  url: string
}

export interface WidgetManifest<TConfig = unknown> {
  slug: string
  version: string
  name: string
  description: string
  category: WidgetCategory
  allowedSizes: WidgetSize[]
  defaultSize: WidgetSize
  author: WidgetAuthor
  likeCount: number
  addCount: number
  defaultConfig: TConfig
}

export interface WidgetFixture<TConfig = unknown> {
  /** export name from fixture.ts, used as the preview label */
  name: string
  config: TConfig
}

export interface RegistryEntry {
  manifest: WidgetManifest
  Component: ComponentType<WidgetProps<never>>
  fixtures: WidgetFixture[]
}

/**
 * one entry from the pawr.link native widget catalog
 * (https://pawr.link/api/widgets/catalog, snapshotted to
 * src/generated/native-catalog.json by scripts/fetch-native-catalog.mjs).
 * only the fields the playground displays are typed – the catalog
 * carries more (action, surfaces, data) that we don't need here.
 */
export interface NativeCatalogEntry {
  type: string
  label: string
  category: string
  family: string
  renderable: boolean
  allowedSizes: string[]
  defaultSize: string
}

export interface NativeCatalog {
  schema: string
  fetchedAt: string
  widgets: NativeCatalogEntry[]
}
