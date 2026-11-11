<script setup lang="ts">
defineProps<{
  items: { title: string; body: string }[]
}>()

// <details> can't transition between closed and open on its own, so the summary click
// is intercepted and the content's height animated with the Web Animations API.
// While closing, the element stays open until the animation ends; `data-closing`
// marks that state so the icon turns back straight away.
const running = new WeakMap<HTMLElement, Animation>()

function toggle(event: MouseEvent) {
  const details = (event.currentTarget as HTMLElement).parentElement as HTMLDetailsElement
  const content = details.querySelector<HTMLElement>('.disclosure__content')
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (!content || typeof content.animate !== 'function' || reduceMotion) return

  event.preventDefault()
  const opening = !details.open || details.dataset.closing === 'true'

  // Start from wherever an interrupted animation left off. A closed <details> still
  // reports its content's full height (the browser lays out hidden content when
  // asked), so start a fresh open from 0 explicitly.
  const fromHeight = details.open ? `${content.offsetHeight}px` : '0px'
  const fromOpacity = details.open ? getComputedStyle(content).opacity : '0'
  running.get(content)?.cancel()

  if (opening) {
    details.open = true
    delete details.dataset.closing
  } else {
    details.dataset.closing = 'true'
  }

  const animation = content.animate(
    {
      height: [fromHeight, opening ? `${content.scrollHeight}px` : '0px'],
      opacity: [fromOpacity, opening ? '1' : '0'],
    },
    { duration: 320, easing: 'cubic-bezier(0.2, 0, 0, 1)' },
  )
  running.set(content, animation)

  animation.onfinish = () => {
    running.delete(content)
    if (!opening) {
      details.open = false
      delete details.dataset.closing
    }
  }
}
</script>

<template>
  <div class="disclosures">
    <details v-for="(item, i) in items" :key="i" class="disclosure">
      <summary @click="toggle">
        {{ item.title }}
        <svg
          class="disclosure__icon"
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
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </summary>
      <div class="disclosure__content">
        <p class="disclosure__body">{{ item.body }}</p>
      </div>
    </details>
  </div>
</template>

<style scoped>
.disclosures {
  border-bottom: 1px solid var(--color-border);
}

.disclosure {
  border-top: 1px solid var(--color-border);
}

summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: var(--color-foreground);
}

summary::-webkit-details-marker {
  display: none;
}

summary:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: var(--radius-sm);
}

.disclosure__icon {
  flex: none;
  color: var(--color-muted-foreground);
  transition: transform 0.32s cubic-bezier(0.2, 0, 0, 1);
}

.disclosure[open]:not([data-closing]) .disclosure__icon {
  transform: rotate(45deg);
}

/* Clips the body while its height animates */
.disclosure__content {
  overflow: hidden;
}

/* Padding rather than margin, so the spacing is part of the animated height */
.disclosure__body {
  margin: 0;
  padding-bottom: 16px;
  color: var(--color-muted-foreground);
  font-size: 15px;
  line-height: 22px;
}

@media (prefers-reduced-motion: reduce) {
  .disclosure__icon {
    transition: none;
  }
}
</style>
