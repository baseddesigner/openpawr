import { manifest } from './manifest'
import type { LaunchNoteConfig } from './manifest'

export const defaultConfig: LaunchNoteConfig = manifest.defaultConfig

export const dropAnnouncement: LaunchNoteConfig = {
  title: 'midnight paws tee – live now',
  body: 'first 50 orders ship with a signed print. gone sunday night.',
  tag: 'drop',
}
