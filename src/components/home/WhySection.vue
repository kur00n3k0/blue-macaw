<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="why" aria-labelledby="why-title" class="why container">
    <h2 v-reveal id="why-title" class="why__title">
      {{ t.why.title }} <span class="text-muted">{{ t.why.titleMuted }}</span>
    </h2>
    <div class="why__grid">
      <div v-for="(reason, i) in t.why.reasons" :key="i" v-reveal="100 + i * 100" class="reason">
        <span class="reason__index">0.{{ i + 1 }}</span>
        <h3 class="reason__title">{{ reason.title }}</h3>
        <p class="reason__body">{{ reason.body }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  padding-block: 96px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.why__title {
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.03em;
  max-width: 22ch;
}

.why__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 32px;
}

.reason {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 24px;
  border-left: 1px solid var(--color-border);
}

.reason__index {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--color-accent);
}

.reason__title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
}

.reason__body {
  font-size: 15px;
  line-height: 22px;
  color: var(--color-muted-foreground);
}
</style>
