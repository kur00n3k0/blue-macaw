// Language-independent details shared by the header, footer and page sections.
// Translatable copy lives in src/i18n/locales.
// Bracketed values are placeholders carried over from the design; replace them before launch.

export const site = {
  name: 'Blue Macaw',
  legalName: 'Blue Macaw Cybersecurity',
  email: 'contact@bluemacawsec.com',
  emailHref: 'mailto:',
  bookingHref: '#book',
}

/** In-page sections in the main nav; labels come from `t.nav[key]`. */
export const mainNav = [
  { key: 'services', href: '#services' },
  { key: 'why', href: '#why' },
  { key: 'how', href: '#how' },
  { key: 'about', href: '#about' },
] as const
