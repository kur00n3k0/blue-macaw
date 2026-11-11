<script setup lang="ts">
// [left %, top px, size px]. Durations and delays come from the nth-child rules below,
// so neighbouring particles drift out of step.
const particles: [number, number, number][] = [
  [8, 180, 3],
  [22, 60, 2],
  [41, 440, 2],
  [63, 40, 3],
  [78, 530, 2],
  [91, 220, 3],
  [34, 720, 3],
  [56, 300, 2],
  [3, 420, 2],
  [12, 560, 3],
  [17, 330, 2],
  [27, 470, 2],
  [30, 120, 3],
  [37, 250, 2],
  [46, 90, 2],
  [49, 600, 3],
  [52, 400, 2],
  [59, 180, 3],
  [66, 360, 2],
  [70, 640, 2],
  [73, 100, 2],
  [75, 270, 3],
  [82, 450, 2],
  [85, 150, 3],
  [88, 580, 2],
  [95, 380, 2],
  [97, 70, 3],
  [6, 40, 2],
  [43, 690, 2],
  [61, 500, 3],
  [20, 650, 2],
  [90, 700, 3],
]

const waves = [
  {
    d: 'M0 360 C 240 260, 480 470, 760 350 S 1280 230, 1600 330 S 2040 420, 2200 340',
    opacity: 0.3,
  },
  {
    d: 'M0 390 C 260 300, 500 500, 780 380 S 1300 260, 1600 360 S 2060 450, 2200 370',
    opacity: 0.22,
  },
  {
    d: 'M0 420 C 280 340, 520 530, 800 410 S 1320 290, 1600 390 S 2080 480, 2200 400',
    opacity: 0.15,
  },
  {
    d: 'M0 450 C 300 380, 540 560, 820 440 S 1340 320, 1600 420 S 2100 510, 2200 430',
    opacity: 0.1,
  },
]
</script>

<template>
  <div aria-hidden="true" class="dots" />
  <div aria-hidden="true" class="motion">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" class="waves">
      <g class="waves__group" fill="none" stroke="currentColor" stroke-width="1.5">
        <path
          v-for="wave in waves"
          :key="wave.d"
          :d="wave.d"
          :stroke-opacity="wave.opacity"
          class="waves__line"
        />
      </g>
    </svg>
    <div class="particles">
      <div
        v-for="([left, top, size], i) in particles"
        :key="i"
        class="particle"
        :style="{ left: `${left}%`, top: `${top}px`, width: `${size}px`, height: `${size}px` }"
      />
    </div>
  </div>
</template>

<style scoped>
.dots {
  position: absolute;
  top: -72px; /* reach up behind the header */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(
    color-mix(in oklch, var(--color-foreground) 9%, transparent) 1px,
    transparent 1.5px
  );
  background-size: 22px 22px;
  background-attachment: fixed;
  mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - 320px), transparent 100%);
}

.motion {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - 200px), transparent 100%);
}

.waves {
  position: absolute;
  left: -40px;
  top: 260px;
  width: calc(100% + 160px);
  overflow: visible; /* the paths run past the viewBox so the drift never shows an end */
  height: 560px;
  color: var(--color-accent);
}

.waves__group {
  animation: flow 16s ease-in-out infinite alternate;
}

/* Each line also rises and falls on its own period, so the bundle
   spreads and gathers instead of moving as one rigid block. */
.waves__line {
  animation: swell 7s ease-in-out infinite alternate;
}
.waves__line:nth-child(2) {
  animation-duration: 8.5s;
  animation-delay: -2s;
}
.waves__line:nth-child(3) {
  animation-duration: 10s;
  animation-delay: -5s;
}
.waves__line:nth-child(4) {
  animation-duration: 12s;
  animation-delay: -3s;
}

.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  border-radius: var(--radius-full);
  background: #fff;
  box-shadow:
    0 0 4px 1px rgba(255, 255, 255, 0.9),
    0 0 12px 3px rgba(130, 180, 255, 0.55),
    0 0 24px 6px rgba(130, 180, 255, 0.18);
  opacity: 0.15;
  animation-name: rise-a, sway-a, twinkle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate, alternate, normal;
}

.particle:nth-child(3n + 2) {
  animation-name: rise-b, sway-b, twinkle;
}
.particle:nth-child(3n) {
  animation-name: rise-c, sway-c, twinkle;
}

.particle:nth-child(4n + 1) {
  animation-duration: 34s, 13s, 6s;
}
.particle:nth-child(4n + 2) {
  animation-duration: 28s, 9s, 4.5s;
}
.particle:nth-child(4n + 3) {
  animation-duration: 41s, 15s, 7s;
}
.particle:nth-child(4n) {
  animation-duration: 23s, 11s, 5.5s;
}

.particle:nth-child(5n + 1) {
  animation-delay:
    -3s,
    -7s,
    -1s;
}
.particle:nth-child(5n + 2) {
  animation-delay:
    -17s,
    -2s,
    -3s;
}
.particle:nth-child(5n + 3) {
  animation-delay:
    -9s,
    -11s,
    -2s;
}
.particle:nth-child(5n + 4) {
  animation-delay:
    -25s,
    -5s,
    -4s;
}
.particle:nth-child(5n) {
  animation-delay:
    -13s,
    -8s,
    -0.5s;
}

@keyframes rise-a {
  0% {
    translate: 0 0;
  }
  30% {
    translate: 6px -22px;
  }
  55% {
    translate: -5px -38px;
  }
  80% {
    translate: 4px -61px;
  }
  100% {
    translate: -2px -80px;
  }
}
@keyframes rise-b {
  0% {
    translate: 0 0;
  }
  25% {
    translate: -8px -14px;
  }
  50% {
    translate: 3px -35px;
  }
  75% {
    translate: -6px -52px;
  }
  100% {
    translate: 5px -70px;
  }
}
@keyframes rise-c {
  0% {
    translate: 0 0;
  }
  35% {
    translate: 4px 18px;
  }
  60% {
    translate: -7px 6px;
  }
  100% {
    translate: 3px -40px;
  }
}
@keyframes sway-a {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(12px);
  }
}
@keyframes sway-b {
  0% {
    transform: translateX(14px);
  }
  50% {
    transform: translateX(-6px);
  }
  100% {
    transform: translateX(9px);
  }
}
@keyframes sway-c {
  0% {
    transform: translateX(-6px);
  }
  100% {
    transform: translateX(18px);
  }
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.08;
  }
  50% {
    opacity: 0.3;
  }
}
@keyframes flow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200px);
  }
}
@keyframes swell {
  0% {
    transform: translateY(-14px);
  }
  100% {
    transform: translateY(16px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .particle,
  .waves__group,
  .waves__line {
    animation: none;
  }
}
</style>
