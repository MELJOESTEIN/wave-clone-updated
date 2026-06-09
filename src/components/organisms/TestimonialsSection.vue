<script setup>
/**
 * TestimonialsSection — ORGANISME.
 * Fond marron, titre centré, une TestimonialCard (molécule) et des points
 * de carrousel cliquables. `ref` rend l'index courant réactif (démo de
 * réactivité Vue).
 */
import { ref } from 'vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import TestimonialCard from '@/components/molecules/TestimonialCard.vue'
import { testimonials } from '@/data/testimonials.js'

const current = ref(0)
</script>

<template>
  <section class="testimonials">
    <!-- Décor : traits diagonaux orange/jaune en haut à droite -->
    <svg class="testimonials__deco" viewBox="0 0 300 200" aria-hidden="true">
      <g stroke-linecap="round" fill="none" stroke-width="9">
        <path d="M150 120 L210 20" stroke="#F2A33C" />
        <path d="M172 130 L232 30" stroke="#F2A33C" />
        <path d="M196 138 L250 46" stroke="#E8762A" />
        <path d="M220 142 L268 60" stroke="#F2A33C" />
        <path d="M244 150 L286 76" stroke="#E8762A" />
        <path d="M150 150 L182 96" stroke="#E8762A" />
      </g>
    </svg>

    <div class="container">
      <BaseHeading :level="2" class="testimonials__title">
        See what our customers have<br />to say about Wave
      </BaseHeading>

      <div class="testimonials__stage">
        <TestimonialCard
          :name="testimonials[current].name"
          :quote="testimonials[current].quote"
          :photo="testimonials[current].photo"
        />
      </div>

      <div class="testimonials__dots">
        <button
          v-for="(t, i) in testimonials"
          :key="t.id"
          class="dot"
          :class="{ 'is-active': i === current }"
          :aria-label="`Témoignage ${i + 1}`"
          @click="current = i"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  position: relative;
  background: var(--wave-maroon);
  padding-top: 80px;
  padding-bottom: 72px;
  overflow: hidden;
}
.testimonials__deco {
  position: absolute;
  top: 60px;
  right: 0;
  width: 360px;
  height: 240px;
  z-index: 1;
}
.testimonials .container {
  position: relative;
  z-index: 2;
}
.testimonials__title {
  text-align: center;
  font-size: clamp(28px, 3.4vw, 44px);
  margin-bottom: 64px;
}
/* BaseHeading est marine par défaut → on force le blanc ici via :deep */
.testimonials :deep(.base-heading) {
  color: #fff;
}
.testimonials__stage {
  max-width: 980px;
  margin-inline: auto;
}
.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 36px;
}
.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.4);
  padding: 0;
}
.dot.is-active {
  background: var(--wave-orange);
}
</style>
