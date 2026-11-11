<script setup lang="ts">
import { vReveal } from '@/directives/reveal'
import AppButton from '@/components/ui/AppButton.vue'
import { site } from '@/content/site'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section id="book" aria-labelledby="book-title" class="book container">
    <div v-reveal class="book__text">
      <h2 id="book-title" class="book__title">
        {{ t.book.title }}<br /><span class="text-muted">{{ t.book.titleMuted }}</span>
      </h2>
    </div>
    <div v-reveal="120" class="book__actions">
      <AppButton :href="site.bookingHref" variant="primary" size="md">
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
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
        </svg>
        {{ t.book.bookCta }}
      </AppButton>
      <AppButton :href="site.emailHref" variant="outline" size="md">
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
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        {{ t.book.emailCta }} {{ site.email }}
      </AppButton>
    </div>
  </section>
</template>

<style scoped>
.book {
  padding-block: 112px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.book__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.book__title {
  font-size: clamp(32px, 4.2vw, 52px);
  line-height: 1.05;
  font-weight: 600;
  letter-spacing: -0.035em;
}

.book__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
