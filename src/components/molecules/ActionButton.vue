<script setup>
/**
 * ActionButton — MOLÉCULE.
 * Un bouton d'action de l'app (SEND / PAYMENTS / AIRTIME) :
 * une icône (atome) + un libellé. La couleur est passée en prop.
 */
import BaseIcon from '@/components/atoms/BaseIcon.vue'

defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  color: { type: String, default: 'var(--wave-indigo)' },
})
</script>

<template>
  <button class="action" :style="{ color }">
    <BaseIcon :name="icon" :size="24" />
    <span class="action__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.action {
  flex: 1;
  background: #fff;
  border: 0;
  padding: 14px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.action__label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}
</style>
