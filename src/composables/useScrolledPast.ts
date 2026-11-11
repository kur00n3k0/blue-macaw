import { onBeforeUnmount, onMounted, ref } from 'vue'

/** True once the page has scrolled further than `threshold` pixels. */
export function useScrolledPast(threshold: number) {
  const scrolled = ref(false)

  function update() {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', update))

  return scrolled
}
