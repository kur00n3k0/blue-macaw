<script setup lang="ts">
import GlassPanel from '@/components/ui/GlassPanel.vue'
import { useScrolledPast } from '@/composables/useScrolledPast'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const visible = useScrolledPast(600)

function backToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })

  // Move keyboard focus to the start of the page too, so the next Tab
  // continues from the header rather than from the bottom of the page.
  document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true })
}
</script>

<template>
  <GlassPanel
    as="button"
    type="button"
    :aria-label="t.actions.backToTop"
    class="to-top"
    :class="{ 'is-on': visible }"
    :inert="!visible"
    @click="backToTop"
  >
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  </GlassPanel>
</template>

<style scoped>
.glass.to-top {
  position: fixed;
  right: calc(24px + env(safe-area-inset-right, 0px));
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: var(--radius-full);
  color: var(--color-foreground);
  background: color-mix(in oklch, var(--color-background) 55%, transparent);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(16px) scale(0.9);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    background-color 0.2s ease,
    visibility 0s linear 0.25s;
}

.glass.to-top.is-on {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    background-color 0.2s ease,
    visibility 0s;
}

.glass.to-top:hover {
  background: color-mix(in oklch, var(--color-secondary) 80%, transparent);
}

.to-top:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

@media (max-width: 640px) {
  .glass.to-top {
    right: calc(16px + env(safe-area-inset-right, 0px));
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    width: 44px;
    height: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glass.to-top,
  .glass.to-top.is-on {
    transition: none;
  }
}
</style>
