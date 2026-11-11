<script setup lang="ts">
import { RouterView } from 'vue-router'
import BackToTop from '@/components/layout/BackToTop.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
</script>

<template>
  <div class="site">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.site {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
</style>
