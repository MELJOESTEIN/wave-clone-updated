<script setup>
/**
 * FeatureCard — MOLÉCULE.
 * Le composant clé de la leçon : 1 icône (atome) + 1 titre (atome).
 * Affiché 6 fois par l'organisme FeaturesSection via une boucle v-for.
 */
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <article class="feature-card">
    <span class="feature-card__icon">
      <BaseIcon :name="icon" :size="40" />
    </span>
    <BaseHeading :level="3" class="feature-card__title">{{ title }}</BaseHeading>
  </article>
</template>

<style scoped>
.feature-card {
  background: var(--white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 220px;
  box-shadow: 0 12px 30px -22px rgba(20, 16, 75, 0.4);
}
.feature-card__icon {
  color: var(--wave-indigo);
}
.feature-card__title {
  font-size: 1.3rem;
  text-wrap: balance;
}
</style>
