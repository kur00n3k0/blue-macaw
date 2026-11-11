<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md'
  }>(),
  { variant: 'primary', size: 'sm' },
)
</script>

<template>
  <a :href="href" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <slot />
  </a>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
}

.btn--sm {
  height: 32px;
  padding: 0 12px;
}

.btn--md {
  height: 40px;
  padding: 0 18px;
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  box-shadow: var(--shadow-xs);
}

.btn--primary.btn--sm {
  padding: 0 14px;
}

.btn--primary:hover {
  background: var(--color-primary-hover);
  color: var(--color-primary-foreground);
}

.btn--secondary {
  border-color: var(--color-border);
  background: var(--color-secondary);
  color: var(--color-foreground);
  box-shadow: var(--shadow-xs);
}

.btn--outline {
  border-color: var(--color-border);
  background: transparent;
  color: var(--color-foreground);
  box-shadow: var(--shadow-xs);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--ghost {
  padding: 0 10px;
  color: var(--color-muted-foreground);
}

.btn--ghost:hover {
  background: var(--color-secondary);
  color: var(--color-foreground);
}
</style>
