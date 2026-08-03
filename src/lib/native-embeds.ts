/**
 * real live widget embeds for a subset of native types.
 *
 * sourced from pawr prod public_embeds for the bento/openpawr demo page;
 * embeds with an empty domain allowlist are frameable anywhere.
 * types not listed here keep their hardcoded mock previews.
 */
export const NATIVE_EMBEDS: Record<string, string> = {
  link: 'we_7z_4kETov8GHeE0hYNpXdA',
  image: 'we_uXDrAx3HDSQ1ldz02ASCcw',
  'text-quote': 'we_5Z5dsRJjxyHxBt7AsqYoiA',
  countdown: 'we_hcx1mi2iDWwNSCm9lMfxFQ',
  map: 'we_6A6JHkmPrQ4RJmaP0lUcSA',
  video: 'we_kvc89DjLb693_pPgh-G-ww',
  'youtube-video': 'we_JL_NJKeMY6oQh-CTGZ_3Sw',
  'x-profile': 'we_nn0rKQ2yhDXSRQZ9EBdnkQ',
  'instagram-profile': 'we_pikaLarjgg3EhX2TKluh9A',
  'github-profile': 'we_yrDqqrWb6Wn5yBIYKHxoHQ',
  'farcaster-profile': 'we_Tq94xSYCsn_k4mu1b6keAg',
  'ens-profile': 'we_nUIdmu1AVS482ZJ7iJ-oNA',
  'profile-link': 'we_1qHv7-oT5H1iokz5s-w6WA',
  'bluesky-profile': 'we_1t5Izk8wCPRgFzK2qaNHig',
  discord: 'we_NyaIYdXYL4I2IjKkmS7eEA',
  'facebook-profile': 'we_3v9YtJi1gauUykabCLlviQ',
  'icebreaker-profile': 'we_6p80T2ujlxqN2qEGedVINg',
  'lens-profile': 'we_2T_9P964R3X5N5u0LAqcmA',
  linkedin: 'we_CMzhlwmfRafZbg7ANXlClA',
  'mastodon-profile': 'we_OinC8jNXcwGKtNu9jJBgGA',
  'medium-profile': 'we_S7aiusVhDEE1EfLavqiduA',
  'paragraph-profile': 'we_IKjbfkd0K1Ko665orAuN4A',
  'substack-profile': 'we_bo1aX7tKJ3YyJGSKRsk5xA',
  telegram: 'we_GYzYA8PX23aiUr0jDHRyTw',
  threads: 'we_s1MBRhjncvhdgBKJbvL2TA',
  'tiktok-profile': 'we_uu2K3oK3dIZOajsRa17i7Q',
  whatsapp: 'we_MVxr8L9edc3UZmWz-uZ1xw',
  'youtube-profile': 'we_-uEAgXJbQs1kK3VKlV-gwg',
  'opensea-item': 'we_4chlDVS7HyQnmpyInk16gA',
}

export function embedUrl(publicId: string): string {
  return `https://embed.pawr.link/embed/w/${publicId}?size=1x1`
}
