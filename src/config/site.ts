// Central source of truth for contact data and website technical features.
// Impressum and Datenschutz pages import from here — update once, all pages reflect it.

export const contact = {
  name: 'Elias Wilkening',
  company: 'Slowcraft',
  addressLine1: 'c/o Impressumservice Dein-Impressum',
  addressLine2: 'Stettiner Str. 41',
  city: '35410 Hungen',
  country: 'Deutschland',
  email: 'support@rosterapp.tech',
  phone: '+49 152 25393437',
  ustId: 'DE334938867',
} as const;

// Website technical features — update this object when you add or remove services.
// The Datenschutz page renders sections conditionally based on these values.
export const websiteFeatures = {
  // Hosting provider name shown in the privacy policy server-logs section.
  // Set to null if not yet decided.
  hosting: 'Vercel' as string | null,

  // Analytics tool, e.g. 'Plausible', 'Fathom', 'Vercel Analytics'.
  // Set to null = no analytics (section is omitted from privacy policy).
  analytics: 'Vercel Analytics' as string | null,

  // Is the hosting/analytics provider based outside the EU (e.g. Vercel = USA)?
  // true renders the mandatory "international data transfer" section (Art. 44 ff. GDPR).
  thirdCountryTransfer: true,

  // Cookie consent / cookie banner.
  cookies: false,

  // Are fonts loaded from an external CDN (e.g. Google Fonts)?
  externalFonts: false,

  // Contact form present on the website?
  contactForm: false,

  // Newsletter or mailing list?
  newsletter: false,
} as const;

export type WebsiteFeatures = typeof websiteFeatures;
