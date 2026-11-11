<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import VisualCard from '@/components/ui/VisualCard.vue'
import { useI18n } from '@/i18n'
import ServiceFeature from './ServiceFeature.vue'

const { t } = useI18n()

// Gantt-style bars, one per phase name: offset and width as a percentage of the track.
const phaseBars = [
  { start: 0, width: 22 },
  { start: 16, width: 26 },
  { start: 36, width: 30 },
  { start: 56, width: 26 },
  { start: 78, width: 22, current: true },
]
</script>

<template>
  <div class="services-wrap">
    <div aria-hidden="true" class="glow">
      <div class="glow__field">
        <div class="glow__blob glow__blob--a" />
        <div class="glow__blob glow__blob--b" />
        <div class="glow__blob glow__blob--c" />
      </div>
    </div>

    <section id="services" aria-labelledby="services-title" class="services container">
      <div v-reveal class="services__intro">
        <h2 id="services-title" class="services__title">{{ t.services.title }}</h2>
        <p class="services__lede">{{ t.services.lede }}</p>
      </div>

      <ServiceFeature
        :tag="t.services.deployment.tag"
        :title="t.services.deployment.title"
        :description="t.services.deployment.description"
        :items="t.services.deployment.items"
        :link-label="t.services.deployment.link"
      >
        <template #visual>
          <VisualCard
            v-reveal="120"
            :title="t.services.deployment.card.title"
            :meta="t.services.deployment.card.meta"
          >
            <div class="rows">
              <div v-for="(bar, i) in phaseBars" :key="i" class="phase">
                <span class="text-muted">{{ t.services.deployment.card.phases[i] }}</span>
                <span
                  class="phase__bar"
                  :class="{ 'phase__bar--current': bar.current }"
                  :style="{ marginLeft: `${bar.start}%`, width: `${bar.width}%` }"
                />
              </div>
            </div>
            <span class="caption">{{ t.services.deployment.card.note }}</span>
          </VisualCard>
        </template>
      </ServiceFeature>

      <ServiceFeature
        :tag="t.services.configuration.tag"
        :title="t.services.configuration.title"
        :description="t.services.configuration.description"
        :items="t.services.configuration.items"
        :link-label="t.services.configuration.link"
        visual-first
      >
        <template #visual>
          <VisualCard
            v-reveal="120"
            :title="t.services.configuration.card.title"
            :meta="t.services.configuration.card.meta"
          >
            <ul class="rows">
              <li
                v-for="(item, i) in t.services.configuration.card.checklist"
                :key="i"
                class="check"
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
                  class="check__icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </VisualCard>
        </template>
      </ServiceFeature>

      <ServiceFeature
        :tag="t.services.support.tag"
        :title="t.services.support.title"
        :description="t.services.support.description"
        :items="t.services.support.items"
        :link-label="t.services.support.link"
      >
        <template #visual>
          <VisualCard
            v-reveal="120"
            :title="t.services.support.card.title"
            :meta="t.services.support.card.meta"
          >
            <ol class="flow">
              <li class="flow__step">
                <span aria-hidden="true" class="flow__dot" />
                <div class="flow__text">
                  <span class="flow__label">{{ t.services.support.card.received.label }}</span>
                  <span class="caption">{{ t.services.support.card.received.caption }}</span>
                </div>
              </li>
              <li class="flow__step">
                <span aria-hidden="true" class="flow__dot" />
                <div class="flow__text">
                  <span class="flow__label">{{ t.services.support.card.triage.label }}</span>
                  <span class="caption">{{ t.services.support.card.triage.caption }}</span>
                </div>
              </li>
              <li class="flow__step">
                <span aria-hidden="true" class="flow__dot" />
                <div class="flow__outcomes">
                  <span class="flow__outcome flow__outcome--primary">
                    {{ t.services.support.card.resolved }}
                  </span>
                  <span class="flow__outcome">{{ t.services.support.card.escalated }}</span>
                </div>
              </li>
              <li class="flow__step">
                <span aria-hidden="true" class="flow__dot flow__dot--end" />
                <div class="flow__text">
                  <span class="flow__label">{{ t.services.support.card.closed.label }}</span>
                  <span class="caption">{{ t.services.support.card.closed.caption }}</span>
                </div>
              </li>
            </ol>
          </VisualCard>
        </template>
      </ServiceFeature>
    </section>
  </div>
</template>

<style scoped>
.services-wrap {
  position: relative;
}

/* Blurred colour blobs pinned to the viewport, visible only behind this section */
.glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  clip-path: inset(0);
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 320px,
    #000 calc(100% - 320px),
    transparent 100%
  );
}

.glow__field {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.glow__blob {
  position: absolute;
  border-radius: var(--radius-full);
  animation: blob 30s ease-in-out infinite alternate;
}

.glow__blob--a {
  left: 4%;
  top: 36%;
  width: 440px;
  height: 440px;
  background: var(--color-accent);
  opacity: 0.32;
  filter: blur(90px);
}

.glow__blob--b {
  left: 38%;
  top: 26%;
  width: 560px;
  height: 520px;
  background: var(--color-accent-strong);
  opacity: 0.5;
  filter: blur(100px);
  animation-duration: 34s;
  animation-delay: -8s;
}

.glow__blob--c {
  right: 2%;
  top: 52%;
  width: 400px;
  height: 400px;
  background: var(--color-accent);
  opacity: 0.28;
  filter: blur(90px);
  animation-duration: 26s;
  animation-delay: -14s;
}

@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(40px, -30px) scale(1.08);
  }
  100% {
    transform: translate(-30px, 20px) scale(0.95);
  }
}

.services {
  position: relative;
  z-index: 1;
  padding-block: 120px;
  display: flex;
  flex-direction: column;
  gap: 112px;
}

.services__intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
}

.services__title {
  font-size: clamp(32px, 4.2vw, 52px);
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: -0.035em;
}

.services__lede {
  font-size: 18px;
  line-height: 28px;
  color: var(--color-muted-foreground);
}

/* Ruled rows shared by the plan and checklist cards */
.rows {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
}

.phase,
.check {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.phase {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
}

.phase__bar {
  display: block;
  height: 22px;
  border-radius: var(--radius-sm);
  background: color-mix(in oklch, var(--color-accent) 22%, transparent);
  border: 1px solid color-mix(in oklch, var(--color-accent) 55%, transparent);
}

.phase__bar--current {
  background: var(--color-accent-strong);
  border-color: var(--color-accent);
}

.check {
  display: flex;
  align-items: center;
  gap: 12px;
}

.check__icon {
  flex: none;
  color: var(--color-accent);
}

.flow {
  display: flex;
  flex-direction: column;
}

.flow__step {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 14px;
  padding-bottom: 20px;
}

.flow__step:last-child {
  padding-bottom: 0;
}

.flow__dot {
  width: 10px;
  height: 10px;
  margin: 5px 0 0 5px;
  border-radius: var(--radius-full);
  background: var(--color-accent);
  box-shadow: 0 0 0 4px color-mix(in oklch, var(--color-accent) 20%, transparent);
}

.flow__dot--end {
  background: var(--color-foreground);
  box-shadow: none;
}

.flow__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.flow__label {
  font-weight: 500;
}

.flow__outcomes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.flow__outcome {
  padding: 6px 10px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-muted-foreground);
  font-weight: 500;
}

.flow__outcome--primary {
  border: 0;
  background: var(--color-secondary);
  color: var(--color-foreground);
}

@media (prefers-reduced-motion: reduce) {
  .glow__blob {
    animation: none;
  }
}
</style>
