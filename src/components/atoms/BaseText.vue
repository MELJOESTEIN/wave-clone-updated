<script setup>
/**
 * BaseText — ATOME.
 * Paragraphe de texte simple et réutilisable.
 */
</script>

<template>
  <p class="base-text">
    <slot />
  </p>
</template>

<style scoped>
.base-text {
  margin: 0;
  color: var(--ink-soft);
  font-size: 1.125rem;
}
</style>
