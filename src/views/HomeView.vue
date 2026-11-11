<script setup lang="ts">
import AboutSection from '@/components/home/AboutSection.vue'
import BookSection from '@/components/home/BookSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import HowSection from '@/components/home/HowSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import WhySection from '@/components/home/WhySection.vue'
</script>

<template>
  <main id="top">
    <HeroSection />
    <WhySection />
    <ServicesSection />
    <HowSection />
    <AboutSection />
    <BookSection />
  </main>
</template>
