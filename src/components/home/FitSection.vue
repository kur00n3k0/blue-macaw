<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="fit" aria-labelledby="fit-title" class="fit container">
    <div class="fit__panel">
      <div v-reveal class="fit__intro">
        <h2 id="fit-title" class="fit__title">
          {{ t.fit.title }} <span class="text-muted">{{ t.fit.titleMuted }}</span>
        </h2>
        <p class="fit__body">{{ t.fit.body }}</p>
      </div>
      <ul class="fit__points">
        <li v-for="(point, i) in t.fit.points" :key="i" v-reveal="100 + i * 100" class="point">
          <svg
            aria-hidden="true"
            class="point__icon"
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
          <h3 class="point__title">{{ point.title }}</h3>
          <p class="point__body">{{ point.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.fit {
  padding-block: 96px;
}

.fit__panel {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: clamp(28px, 5vw, 56px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(
      120% 140% at 0% 0%,
      color-mix(in oklch, var(--color-accent-strong) 14%, transparent),
      transparent 60%
    ),
    var(--color-background);
}

.fit__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fit__title {
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.03em;
  max-width: 24ch;
}

.fit__body {
  font-size: 16px;
  line-height: 26px;
  color: var(--color-muted-foreground);
  max-width: 62ch;
}

.fit__points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 32px;
}

.point {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.point__icon {
  color: var(--color-accent);
  margin-bottom: 4px;
}

.point__title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
}

.point__body {
  font-size: 15px;
  line-height: 22px;
  color: var(--color-muted-foreground);
}
</style>
