<script setup>
/**
 * BaseButton — ATOME.
 * Bouton générique avec deux variantes : "primary" et "ghost".
 */
defineProps({
  variant: { type: String, default: 'primary' },
})
</script>

<template>
  <button class="base-button" :class="`base-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  border: 0;
  border-radius: 999px;
  font-weight: 800;
  font-size: 1rem;
  padding: 14px 26px;
  transition: transform 0.12s ease, opacity 0.16s ease;
}
.base-button:active {
  transform: translateY(1px);
}
.base-button--primary {
  background: var(--wave-navy);
  color: #fff;
}
.base-button--ghost {
  background: transparent;
  color: var(--wave-navy);
}
</style>
