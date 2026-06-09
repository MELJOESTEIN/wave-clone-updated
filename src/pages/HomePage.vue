<script setup>
/**
 * HomePage — PAGE.
 * On assemble les organismes de contenu. Le bandeau, la navbar et le footer
 * sont fournis par le template (DefaultLayout).
 */
import HeroSection from '@/components/organisms/HeroSection.vue'
import FeaturesSection from '@/components/organisms/FeaturesSection.vue'
import TestimonialsSection from '@/components/organisms/TestimonialsSection.vue'
</script>

<template>
  <HeroSection />
  <FeaturesSection />
  <TestimonialsSection />
</template>
