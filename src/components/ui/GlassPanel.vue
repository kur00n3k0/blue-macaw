<script setup lang="ts">
/**
 * Frosted-glass surface. In Chromium browsers the backdrop is also refracted
 * along the panel's edges: a 9-slice displacement map (an 18px circular bevel
 * baked into the tiles in assets/glass) is stretched to the panel's size, and
 * red, green and blue are bent by slightly different amounts for dispersion.
 * Other browsers get the plain blur.
 */
import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue'
import cornerTl from '@/assets/glass/corner-tl.png'
import cornerTr from '@/assets/glass/corner-tr.png'
import cornerBl from '@/assets/glass/corner-bl.png'
import cornerBr from '@/assets/glass/corner-br.png'
import edgeTop from '@/assets/glass/edge-top.png'
import edgeBottom from '@/assets/glass/edge-bottom.png'
import edgeLeft from '@/assets/glass/edge-left.png'
import edgeRight from '@/assets/glass/edge-right.png'

const props = withDefaults(
  defineProps<{
    as?: string
    /** Index of refraction of the bevel. */
    ior?: number
    /** Spread of the IOR between the red and blue channels. */
    dispersion?: number
  }>(),
  { as: 'div', ior: 1.5, dispersion: 0.08 },
)

const TILE = 32
const BEVEL = 12
const BASE_FILTER = 'blur(14px) saturate(1.6)'

const filterId = `glass-${useId().replace(/[^\w-]/g, '-')}`
const el = ref<HTMLElement | null>(null)
const size = ref<{ w: number; h: number } | null>(null)
let observer: ResizeObserver | null = null

function supportsRefraction() {
  if (typeof window === 'undefined' || typeof ResizeObserver === 'undefined') return false
  return 'chrome' in window || /Chrome\//.test(navigator.userAgent)
}

/** Sideways shift of light leaving the bevel, by Snell's law. */
function shift(ior: number) {
  const k = Math.max(ior, 1.0001)
  return 2 * BEVEL * Math.tan(Math.PI / 2 - Math.asin(1 / k))
}

const map = computed(() => {
  const s = size.value
  if (!s || s.w < 64 || s.h < 40) return null
  return {
    w: s.w,
    h: s.h,
    xr: s.w - TILE,
    yb: s.h - TILE,
    iw: Math.max(0, s.w - 2 * TILE),
    ih: Math.max(0, s.h - 2 * TILE),
    sr: shift(props.ior - props.dispersion),
    sg: shift(props.ior),
    sb: shift(props.ior + props.dispersion),
  }
})

const backdrop = computed(() =>
  map.value ? `url(#${filterId}) blur(2.8px) saturate(1.6)` : BASE_FILTER,
)

onMounted(() => {
  if (!supportsRefraction() || !el.value) return
  observer = new ResizeObserver(([entry]) => {
    const target = entry?.target as HTMLElement | undefined
    if (target)
      size.value = { w: Math.round(target.offsetWidth), h: Math.round(target.offsetHeight) }
  })
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="glass"
    :style="{ backdropFilter: backdrop, WebkitBackdropFilter: backdrop }"
  >
    <slot />
    <Teleport v-if="map" to="body">
      <svg aria-hidden="true" width="0" height="0" class="glass-defs">
        <filter
          :id="filterId"
          x="0"
          y="0"
          :width="map.w"
          :height="map.h"
          filterUnits="userSpaceOnUse"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-color="rgb(128,128,128)"
            x="0"
            y="0"
            :width="map.w"
            :height="map.h"
            result="mn"
          />
          <feImage
            :href="cornerTl"
            x="0"
            y="0"
            :width="TILE"
            :height="TILE"
            preserveAspectRatio="none"
            result="mtl"
          />
          <feImage
            :href="cornerTr"
            :x="map.xr"
            y="0"
            :width="TILE"
            :height="TILE"
            preserveAspectRatio="none"
            result="mtr"
          />
          <feImage
            :href="cornerBl"
            x="0"
            :y="map.yb"
            :width="TILE"
            :height="TILE"
            preserveAspectRatio="none"
            result="mbl"
          />
          <feImage
            :href="cornerBr"
            :x="map.xr"
            :y="map.yb"
            :width="TILE"
            :height="TILE"
            preserveAspectRatio="none"
            result="mbr"
          />
          <feImage
            :href="edgeTop"
            :x="TILE"
            y="0"
            :width="map.iw"
            :height="TILE"
            preserveAspectRatio="none"
            result="mt"
          />
          <feImage
            :href="edgeBottom"
            :x="TILE"
            :y="map.yb"
            :width="map.iw"
            :height="TILE"
            preserveAspectRatio="none"
            result="mb"
          />
          <feImage
            :href="edgeLeft"
            x="0"
            :y="TILE"
            :width="TILE"
            :height="map.ih"
            preserveAspectRatio="none"
            result="ml"
          />
          <feImage
            :href="edgeRight"
            :x="map.xr"
            :y="TILE"
            :width="TILE"
            :height="map.ih"
            preserveAspectRatio="none"
            result="mr"
          />
          <feMerge x="0" y="0" :width="map.w" :height="map.h" result="map">
            <feMergeNode in="mn" />
            <feMergeNode in="mt" />
            <feMergeNode in="mb" />
            <feMergeNode in="ml" />
            <feMergeNode in="mr" />
            <feMergeNode in="mtl" />
            <feMergeNode in="mtr" />
            <feMergeNode in="mbl" />
            <feMergeNode in="mbr" />
          </feMerge>
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            :scale="map.sr"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dr"
          />
          <feColorMatrix
            in="dr"
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="cr"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            :scale="map.sg"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dg"
          />
          <feColorMatrix
            in="dg"
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="cg"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            :scale="map.sb"
            xChannelSelector="R"
            yChannelSelector="G"
            result="db"
          />
          <feColorMatrix
            in="db"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="cb"
          />
          <feBlend in="cr" in2="cg" mode="screen" result="crg" />
          <feBlend in="crg" in2="cb" mode="screen" />
        </filter>
      </svg>
    </Teleport>
  </component>
</template>

<style scoped>
.glass {
  background: color-mix(in oklch, var(--color-background) 52%, transparent);
  border: 1px solid color-mix(in oklch, var(--color-border) 80%, transparent);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-glass);
}

.glass-defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
