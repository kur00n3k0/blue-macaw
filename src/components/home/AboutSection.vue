<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" aria-labelledby="about-title" class="about container">
    <h2 v-reveal id="about-title" class="about__title">
      {{ t.about.title }}
      <span class="text-muted">{{ t.about.titleMuted }}</span>
    </h2>
    <dl class="facts">
      <div v-for="(fact, i) in t.about.facts" :key="i" v-reveal="100 + i * 80" class="fact">
        <dt class="caption">{{ fact.term }}</dt>
        <dd class="fact__value">{{ fact.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.about {
  padding-block: 112px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.about__title {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.025em;
  max-width: 34ch;
}

.facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 24px;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.fact__value {
  font-weight: 500;
}
</style>
