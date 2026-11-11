<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="how" aria-labelledby="how-title" class="how container">
    <div v-reveal class="how__intro">
      <h2 id="how-title" class="how__title">{{ t.how.title }}</h2>
      <p class="how__lede">{{ t.how.lede }}</p>
    </div>
    <ol class="steps">
      <li v-for="(step, i) in t.how.steps" :key="i" v-reveal="100 + i * 100" class="step">
        <span class="step__number">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="step__text">
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__body">{{ step.body }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.how {
  padding-block: 96px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: 40px 64px;
  align-items: start;
}

.how__intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.how__title {
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.how__lede {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-muted-foreground);
  max-width: 40ch;
}

.steps {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
}

.step {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
}

.step__number {
  font-size: 13px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-accent);
}

.step__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.step__title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
}

.step__body {
  font-size: 15px;
  line-height: 22px;
  color: var(--color-muted-foreground);
}
</style>
