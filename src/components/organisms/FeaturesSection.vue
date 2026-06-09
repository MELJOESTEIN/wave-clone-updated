<script setup>
/**
 * FeaturesSection — ORGANISME.
 * Titre + grille de 6 FeatureCard (molécules) générée par v-for sur les
 * données. C'est l'illustration directe de l'écran 2 de la maquette.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import FeatureCard from '@/components/molecules/FeatureCard.vue'
import { features } from '@/data/features.js'
</script>

<template>
  <section class="features">
    <!-- Décor : « pyramide » de traits jaunes en haut à droite -->
    <svg class="features__squiggle" viewBox="0 0 200 240" aria-hidden="true">
      <g stroke="#FBD24E" stroke-width="9" stroke-linecap="round" fill="none">
        <path d="M150 20 q14 -6 28 0" />
        <path d="M132 48 q30 -8 56 0" />
        <path d="M118 76 q44 -10 80 0" />
        <path d="M104 104 q56 -10 96 0" />
        <path d="M92 132 q66 -12 112 0" />
        <path d="M80 160 q76 -12 128 0" />
        <path d="M70 188 q84 -12 142 0" />
      </g>
    </svg>
    <!-- Décor : empreinte bleue en bas à gauche -->
    <svg class="features__fp" viewBox="0 0 200 200" aria-hidden="true">
      <g stroke="#18BEF2" stroke-width="10" fill="none" stroke-linecap="round">
        <path d="M20 180 A70 70 0 0 1 160 175" />
        <path d="M20 150 A52 52 0 0 1 134 148" />
        <path d="M20 120 A34 34 0 0 1 108 120" />
        <path d="M20 92 A16 16 0 0 1 80 94" />
      </g>
    </svg>

    <div class="container">
      <BaseHeading :level="2" class="features__title">
        What you can do with Wave
      </BaseHeading>

      <div class="features__grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :title="feature.title"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  position: relative;
  overflow: hidden;
  background: var(--paper);
  padding-top: 96px;
  padding-bottom: 120px;
}
.features .container {
  position: relative;
  z-index: 2;
}
.features__squiggle {
  position: absolute;
  top: 30px;
  right: 60px;
  width: 210px;
  height: 250px;
  z-index: 1;
}
.features__fp {
  position: absolute;
  left: -40px;
  bottom: -30px;
  width: 240px;
  height: 240px;
  z-index: 1;
}
.features__title {
  font-size: clamp(34px, 4vw, 52px);
  margin-bottom: 56px;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
