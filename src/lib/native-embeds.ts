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
}

export function embedUrl(publicId: string): string {
  return `https://embed.pawr.link/embed/w/${publicId}?size=1x1`
}
