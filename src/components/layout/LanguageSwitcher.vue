<script setup lang="ts">
/**
 * Language menu for the header, following the WAI-ARIA menu button pattern:
 * the button opens a menu of radio items, focus moves to the active language,
 * arrows/Home/End move between items, Escape closes and returns focus to the
 * button, and Tab or a click outside closes it.
 */
import { nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import GlassPanel from '@/components/ui/GlassPanel.vue'
import { LOCALES, LOCALE_NAMES, useI18n, type Locale } from '@/i18n'

const { t, locale, setLocale } = useI18n()

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
const menuId = `language-menu-${useId()}`

function menuItems() {
  return [...(root.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [])]
}

function focusItem(index: number) {
  const items = menuItems()
  items[(index + items.length) % items.length]?.focus()
}

async function openMenu(focusIndex = LOCALES.indexOf(locale.value)) {
  open.value = true
  await nextTick()
  focusItem(focusIndex)
}

function closeMenu({ returnFocus = false } = {}) {
  open.value = false
  if (returnFocus) trigger.value?.focus()
}

function toggle() {
  if (open.value) closeMenu()
  else openMenu()
}

function choose(next: Locale) {
  setLocale(next)
  closeMenu({ returnFocus: true })
}

function onTriggerKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    openMenu(0)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    openMenu(LOCALES.length - 1)
  }
}

function onMenuKeydown(event: KeyboardEvent) {
  const index = menuItems().indexOf(document.activeElement as HTMLButtonElement)
  const moves: Record<string, number> = {
    ArrowDown: index + 1,
    ArrowUp: index - 1,
    Home: 0,
    End: LOCALES.length - 1,
  }
  if (event.key in moves) {
    event.preventDefault()
    focusItem(moves[event.key]!)
  } else if (event.key === 'Escape') {
    event.preventDefault()
    closeMenu({ returnFocus: true })
  } else if (event.key === 'Tab') {
    closeMenu()
  }
}

function onPointerDown(event: PointerEvent) {
  if (!root.value?.contains(event.target as Node)) closeMenu()
}

watch(open, (isOpen) => {
  if (isOpen) document.addEventListener('pointerdown', onPointerDown)
  else document.removeEventListener('pointerdown', onPointerDown)
})

onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
</script>

<template>
  <div ref="root" class="lang">
    <button
      ref="trigger"
      type="button"
      class="lang__trigger"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-controls="open ? menuId : undefined"
      :aria-label="`${t.language.label}: ${LOCALE_NAMES[locale].name}`"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
      <span aria-hidden="true" class="lang__code">{{ LOCALE_NAMES[locale].short }}</span>
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lang__chevron"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <Transition name="lang-menu">
      <GlassPanel
        v-if="open"
        :id="menuId"
        role="menu"
        :aria-label="t.language.label"
        class="lang__menu"
        @keydown="onMenuKeydown"
      >
        <button
          v-for="code in LOCALES"
          :key="code"
          type="button"
          role="menuitemradio"
          :aria-checked="code === locale"
          :lang="code"
          tabindex="-1"
          class="lang__item"
          @click="choose(code)"
        >
          {{ LOCALE_NAMES[code].name }}
          <svg
            v-if="code === locale"
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </button>
      </GlassPanel>
    </Transition>
  </div>
</template>

<style scoped>
.lang {
  position: relative;
}

/* Matches AppButton's ghost variant */
.lang__trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 8px 0 10px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-muted-foreground);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.lang__trigger:hover,
.lang__trigger[aria-expanded='true'] {
  background: var(--color-secondary);
  color: var(--color-foreground);
}

.lang__trigger:focus-visible,
.lang__item:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.lang__chevron {
  transition: rotate 0.2s ease;
}

.lang__trigger[aria-expanded='true'] .lang__chevron {
  rotate: 180deg;
}

.lang__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 200px;
  padding: 6px;
  background: color-mix(in oklch, var(--color-background) 70%, transparent);
  transform-origin: top right;
}

.lang__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-muted-foreground);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.lang__item:hover,
.lang__item:focus-visible {
  background: var(--color-secondary);
  color: var(--color-foreground);
}

.lang__item[aria-checked='true'] {
  color: var(--color-foreground);
  font-weight: 500;
}

.lang-menu-enter-active,
.lang-menu-leave-active {
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
}

.lang-menu-enter-from,
.lang-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

/* Phones: the globe alone opens the menu, and the menu spans the header's width
   instead of hanging off one button, so it never runs off the screen edge. */
@media (max-width: 480px) {
  .lang {
    position: static;
  }

  .lang__trigger {
    padding: 0 8px;
  }

  .lang__code,
  .lang__chevron {
    display: none;
  }

  .lang__menu {
    top: calc(100% - 8px);
    left: var(--gutter);
    right: var(--gutter);
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lang__chevron,
  .lang-menu-enter-active,
  .lang-menu-leave-active {
    transition: none;
  }
}
</style>
