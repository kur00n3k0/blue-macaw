<script setup lang="ts">
import GlassPanel from './GlassPanel.vue'

defineProps<{
  title: string
  meta: string
}>()
</script>

<template>
  <GlassPanel class="visual-card">
    <div class="visual-card__header">
      <span class="visual-card__title">{{ title }}</span>
      <span class="caption">{{ meta }}</span>
    </div>
    <slot />
  </GlassPanel>
</template>

<style scoped>
.visual-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.visual-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.visual-card__title {
  font-size: 13px;
  font-weight: 600;
}
</style>
