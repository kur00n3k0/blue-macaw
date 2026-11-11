import type { Directive } from 'vue'

/**
 * `v-reveal` fades an element up into place the first time it scrolls into view.
 * The optional value is a delay in milliseconds, for staggering siblings:
 * `v-reveal="i * 100"`. The hidden and shown states live in assets/main.css.
 *
 * Nothing is hidden unless the animation can run: without IntersectionObserver,
 * or with reduced motion requested, elements are left exactly as they are.
 */

const DURATION = 800

let observer: IntersectionObserver | null = null

function reveal(el: HTMLElement) {
  el.classList.add('is-revealed')
  const delay = Number(el.style.getPropertyValue('--reveal-delay').replace('ms', '')) || 0

  // Once it has settled, drop every trace so the element's own styles take over again.
  window.setTimeout(
    () => {
      el.removeAttribute('data-reveal')
      el.classList.remove('is-revealed')
      el.style.removeProperty('--reveal-delay')
    },
    delay + DURATION + 100,
  )
}

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries, io) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        io.unobserve(entry.target)
        reveal(entry.target as HTMLElement)
      }
    },
    // Wait until the element is a little way above the bottom edge.
    { rootMargin: '0px 0px -10% 0px' },
  )
  return observer
}

function canAnimate() {
  return (
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, { value }) {
    if (!canAnimate()) return
    el.setAttribute('data-reveal', '')
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
