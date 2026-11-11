import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'
import { detectLocale, setLocale, useI18n } from '@/i18n'
import en from '@/i18n/locales/en'
import ja from '@/i18n/locales/ja'
import ptBR from '@/i18n/locales/pt-BR'

describe('detectLocale', () => {
  it('uses Portuguese or Japanese when the browser prefers it', () => {
    expect(detectLocale(['pt-BR', 'en'], 'America/New_York')).toBe('pt-BR')
    expect(detectLocale(['pt-PT'], 'Europe/Lisbon')).toBe('pt-BR')
    expect(detectLocale(['ja'], 'America/Sao_Paulo')).toBe('ja')
    expect(detectLocale(['fr-FR', 'ja-JP'], 'Europe/Paris')).toBe('ja')
  })

  it('falls back to the time zone when English comes first', () => {
    expect(detectLocale(['en-US'], 'America/Sao_Paulo')).toBe('pt-BR')
    expect(detectLocale(['en-US', 'pt-BR'], 'America/Manaus')).toBe('pt-BR')
    expect(detectLocale(['en-GB'], 'Asia/Tokyo')).toBe('ja')
  })

  it('defaults to English everywhere else', () => {
    expect(detectLocale(['en-US', 'pt-BR'], 'America/New_York')).toBe('en')
    expect(detectLocale(['de-DE'], 'Europe/Berlin')).toBe('en')
    expect(detectLocale([], undefined)).toBe('en')
  })
})

describe('setLocale', () => {
  it('remembers the choice', () => {
    // Recent Node versions shadow jsdom's localStorage with their own, which is
    // undefined unless Node is given a storage file, so supply one here.
    const store = new Map<string, string>()
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => void store.set(key, value),
    })

    setLocale('ja')
    expect(useI18n().locale.value).toBe('ja')
    expect(window.localStorage.getItem('blue-macaw:locale')).toBe('ja')
    vi.unstubAllGlobals()
  })
})

describe('locale files', () => {
  // TypeScript checks the keys; this catches lists that lost or gained an entry,
  // which would leave a row of the page blank or out of step with its layout.
  function shape(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(shape)
    if (value && typeof value === 'object')
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
    return typeof value
  }

  it('match the English structure', () => {
    expect(shape(ptBR)).toEqual(shape(en))
    expect(shape(ja)).toEqual(shape(en))
  })
})

describe('LanguageSwitcher', () => {
  beforeEach(() => setLocale('en'))

  it('opens a menu with every language and switches on click', async () => {
    const wrapper = mount(LanguageSwitcher, { attachTo: document.body })
    const trigger = wrapper.get('button[aria-haspopup="menu"]')
    expect(trigger.attributes('aria-expanded')).toBe('false')
    expect(trigger.attributes('aria-label')).toBe('Language: English')

    await trigger.trigger('click')
    const items = wrapper.findAll('[role="menuitemradio"]')
    expect(items.map((item) => item.text())).toEqual(['English', 'Português (Brasil)', '日本語'])
    expect(items[0]?.attributes('aria-checked')).toBe('true')

    await items[2]?.trigger('click')
    await nextTick()
    expect(useI18n().locale.value).toBe('ja')
    expect(wrapper.find('[role="menu"]').exists()).toBe(false)
    expect(trigger.attributes('aria-label')).toBe('言語: 日本語')
    wrapper.unmount()
  })

  it('closes on Escape and returns focus to the button', async () => {
    const wrapper = mount(LanguageSwitcher, { attachTo: document.body })
    const trigger = wrapper.get('button[aria-haspopup="menu"]')
    await trigger.trigger('click')
    await nextTick()
    expect(document.activeElement?.textContent?.trim()).toBe('English')

    await wrapper.get('[role="menu"]').trigger('keydown', { key: 'ArrowDown' })
    expect(document.activeElement?.textContent?.trim()).toBe('Português (Brasil)')

    await wrapper.get('[role="menu"]').trigger('keydown', { key: 'Escape' })
    expect(wrapper.find('[role="menu"]').exists()).toBe(false)
    expect(document.activeElement).toBe(trigger.element)
    wrapper.unmount()
  })
})
