<script setup lang="ts">
import logoMark from '@/assets/logo-mark.png'
import AppButton from '@/components/ui/AppButton.vue'
import GlassPanel from '@/components/ui/GlassPanel.vue'
import { useScrolledPast } from '@/composables/useScrolledPast'
import { mainNav, site } from '@/content/site'
import { useI18n } from '@/i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const scrolled = useScrolledPast(80)
</script>

<template>
  <header class="header container">
    <div class="header__group">
      <a href="#top" class="brand">
        <img :src="logoMark" alt="" class="brand__mark" />
        <span class="brand__name">{{ site.name }}</span>
      </a>
      <nav :aria-label="t.nav.label" class="nav-links">
        <AppButton v-for="link in mainNav" :key="link.href" :href="link.href" variant="ghost">
          {{ t.nav[link.key] }}
        </AppButton>
      </nav>
    </div>
    <div class="header__actions">
      <LanguageSwitcher />
      <AppButton :href="site.emailHref" variant="ghost" class="header__contact">
        {{ t.actions.contact }}
      </AppButton>
      <AppButton :href="site.bookingHref" variant="primary">{{ t.actions.bookCall }}</AppButton>
    </div>
  </header>

  <!-- Compact nav that floats in once the full header has scrolled away -->
  <GlassPanel
    as="nav"
    :aria-label="t.nav.compactLabel"
    class="float-nav"
    :class="{ 'is-on': scrolled }"
    :inert="!scrolled"
  >
    <a href="#top" :aria-label="t.nav.homeLabel" class="float-nav__home">
      <img :src="logoMark" alt="" class="float-nav__mark" />
    </a>
    <div class="nav-links">
      <AppButton v-for="link in mainNav" :key="link.href" :href="link.href" variant="ghost">
        {{ t.nav[link.key] }}
      </AppButton>
    </div>
    <AppButton :href="site.bookingHref" variant="secondary" class="float-nav__cta">
      {{ t.actions.bookCall }}
    </AppButton>
  </GlassPanel>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 2;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.header__group {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand__mark {
  width: 28px;
  height: 32px;
  object-fit: contain;
}

.brand__name {
  white-space: nowrap;
  font-size: 15px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.float-nav {
  position: fixed;
  top: calc(16px + env(safe-area-inset-top, 0px));
  left: 50%;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 56px;
  max-width: calc(100vw - 32px);
  padding: 0 10px 0 12px;
  white-space: nowrap;
  background: color-mix(in oklch, var(--color-background) 55%, transparent);
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -24px) scale(0.96);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0s linear 0.25s;
}

.float-nav.is-on {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0) scale(1);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0s;
}

.float-nav__home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 4px;
  border-radius: var(--radius-md);
}

.float-nav__mark {
  width: 24px;
  height: 27px;
  object-fit: contain;
}

.float-nav__cta {
  margin-left: 6px;
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
}

/* Contact is also in the closing section and the footer; dropping it here leaves
   room for the language menu and the longer Portuguese and Japanese labels. */
@media (max-width: 480px) {
  .header__contact {
    display: none;
  }
}

/* On the smallest phones the logo mark alone carries the brand; the name stays for
   screen readers. */
@media (max-width: 374px) {
  .brand__name {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .float-nav,
  .float-nav.is-on {
    transition: none;
  }
}
</style>
