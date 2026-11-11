<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import DisclosureList from '@/components/ui/DisclosureList.vue'

withDefaults(
  defineProps<{
    tag: string
    title: string
    description: string
    items: { title: string; body: string }[]
    linkLabel: string
    linkHref?: string
    /** Put the illustration before the copy (in DOM order, so it also leads on mobile). */
    visualFirst?: boolean
  }>(),
  { linkHref: '#book', visualFirst: false },
)
</script>

<template>
  <article class="feature">
    <slot v-if="visualFirst" name="visual" />
    <div v-reveal class="feature__copy">
      <span class="tag">{{ tag }}</span>
      <h3 class="feature__title">{{ title }}</h3>
      <p class="feature__description">{{ description }}</p>
      <DisclosureList :items="items" />
      <a :href="linkHref" class="text-link feature__link">{{ linkLabel }} →</a>
    </div>
    <slot v-if="!visualFirst" name="visual" />
  </article>
</template>

<style scoped>
.feature {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: 48px 64px;
  align-items: center;
}

.feature__copy {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature__title {
  font-size: clamp(24px, 2.6vw, 32px);
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.feature__description {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-muted-foreground);
  max-width: 46ch;
}

.feature__link {
  align-self: flex-start;
  font-weight: 500;
}
</style>
