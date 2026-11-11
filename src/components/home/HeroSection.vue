<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import GlassPanel from '@/components/ui/GlassPanel.vue'
import { useI18n } from '@/i18n'
import HeroBackdrop from './HeroBackdrop.vue'

const { t } = useI18n()
</script>

<template>
  <div class="hero-wrap">
    <HeroBackdrop />
    <div class="hero container">
      <section aria-labelledby="hero-title" class="hero__intro">
        <a v-reveal href="#services" class="announce">
          <span class="announce__label">{{ t.hero.announceLabel }}</span>
          {{ t.hero.announce }} →
        </a>
        <h1 v-reveal="80" id="hero-title" class="hero__title">
          {{ t.hero.title }}
        </h1>
        <p v-reveal="160" class="hero__lede">
          {{ t.hero.lede }}
        </p>
      </section>

      <GlassPanel v-reveal="260" as="section" aria-labelledby="stack-title" class="stack">
        <h2 id="stack-title" class="stack__title">{{ t.hero.stackTitle }}</h2>
        <ul class="stack__list">
          <li v-for="(platform, i) in t.hero.platforms" :key="i" class="stack__item">
            <span aria-hidden="true" class="stack__dot" />{{ platform }}
          </li>
        </ul>
      </GlassPanel>
    </div>
  </div>
</template>

<style scoped>
.hero-wrap {
  position: relative;
}

.hero {
  position: relative;
  z-index: 1;
  padding-block: 88px 96px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.hero__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.announce {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px 12px 4px 4px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: color-mix(in oklch, var(--color-background) 60%, transparent);
  color: var(--color-muted-foreground);
  text-decoration: none;
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
}

.announce__label {
  padding: 3px 8px;
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  color: var(--color-foreground);
  font-size: 12px;
  line-height: 16px;
}

.hero__title {
  font-size: clamp(44px, 6.2vw, 80px);
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.035em;
  max-width: 16ch;
}

.hero__lede {
  font-size: 18px;
  line-height: 28px;
  color: var(--color-muted-foreground);
  max-width: 52ch;
}

.stack {
  padding: 14px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 32px;
  border: 1px solid color-mix(in oklch, var(--color-foreground) 14%, transparent);
  border-radius: 16px;
}

.stack__title {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--color-muted-foreground);
  white-space: nowrap;
}

.stack__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
}

.stack__item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.stack__dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--color-accent);
}
</style>
