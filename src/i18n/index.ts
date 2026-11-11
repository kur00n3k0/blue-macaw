import { computed, readonly, ref, watchEffect } from 'vue'
import en, { type Messages } from './locales/en'
import ja from './locales/ja'
import ptBR from './locales/pt-BR'

export type { Messages }

export const LOCALES = ['en', 'pt-BR', 'ja'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** How each language names itself in the switcher, plus a short code for the button. */
export const LOCALE_NAMES: Record<Locale, { name: string; short: string }> = {
  en: { name: 'English', short: 'EN' },
  'pt-BR': { name: 'Português (Brasil)', short: 'PT' },
  ja: { name: '日本語', short: 'JA' },
}

const MESSAGES: Record<Locale, Messages> = { en, 'pt-BR': ptBR, ja }

const STORAGE_KEY = 'blue-macaw:locale'

// Time zones are the closest thing to a location the browser gives without asking
// for permission or calling a geolocation service.
const BRAZIL_TIME_ZONES = new Set([
  'America/Araguaina',
  'America/Bahia',
  'America/Belem',
  'America/Boa_Vista',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Eirunepe',
  'America/Fortaleza',
  'America/Maceio',
  'America/Manaus',
  'America/Noronha',
  'America/Porto_Velho',
  'America/Recife',
  'America/Rio_Branco',
  'America/Santarem',
  'America/Sao_Paulo',
  'Brazil/Acre',
  'Brazil/DeNoronha',
  'Brazil/East',
  'Brazil/West',
])
const JAPAN_TIME_ZONES = new Set(['Asia/Tokyo', 'Japan'])

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/**
 * Picks the starting language for a first-time visitor.
 *
 * 1. A browser language ranked above English: Portuguese (any region) or Japanese.
 * 2. Otherwise the visitor's location, read from their time zone: Brazil or Japan.
 * 3. Otherwise English.
 *
 * English in the browser list doesn't settle it on its own, because many people in
 * Brazil and Japan run their browser in English; their location then decides.
 */
export function detectLocale(languages: readonly string[], timeZone?: string): Locale {
  for (const tag of languages) {
    const lang = tag.toLowerCase()
    if (lang === 'pt' || lang.startsWith('pt-')) return 'pt-BR'
    if (lang === 'ja' || lang.startsWith('ja-')) return 'ja'
    if (lang === 'en' || lang.startsWith('en-')) break
  }
  if (timeZone && BRAZIL_TIME_ZONES.has(timeZone)) return 'pt-BR'
  if (timeZone && JAPAN_TIME_ZONES.has(timeZone)) return 'ja'
  return DEFAULT_LOCALE
}

function readSaved(): Locale | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(saved) ? saved : null
  } catch {
    return null
  }
}

function initialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const saved = readSaved()
  if (saved) return saved
  let timeZone: string | undefined
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    timeZone = undefined
  }
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return detectLocale(languages.filter(Boolean), timeZone)
}

const current = ref<Locale>(initialLocale())
const messages = computed(() => MESSAGES[current.value])

/** Switches language and remembers the choice for the next visit. */
export function setLocale(locale: Locale) {
  current.value = locale
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the switch still applies.
  }
}

// Instrument Sans has no Japanese glyphs. Noto Sans JP is loaded only the first time
// Japanese is shown, so other visitors don't pay for the stylesheet.
const JAPANESE_FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600&display=swap'

function ensureJapaneseFont() {
  if (document.querySelector(`link[href="${JAPANESE_FONT_HREF}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = JAPANESE_FONT_HREF
  document.head.append(link)
}

/** Keeps <html lang>, the title and the meta description in step with the language. */
export function syncDocumentLocale() {
  watchEffect(() => {
    const locale = current.value
    const { meta } = messages.value
    document.documentElement.lang = locale
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    if (locale === 'ja') ensureJapaneseFont()
  })
}

/**
 * `t` is the active language's messages object, so templates read `t.hero.title`.
 * `locale` is read-only; change it with `setLocale`.
 */
export function useI18n() {
  return { t: messages, locale: readonly(current), setLocale }
}
