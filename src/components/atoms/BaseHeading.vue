<script setup>
/**
 * BaseHeading — ATOME.
 * Titre générique. La prop `level` choisit la balise (h1…h4) pour rester
 * sémantique, tout en gardant un style cohérent.
 */
defineProps({
  level: { type: [Number, String], default: 2 },
})
</script>

<template>
  <component :is="`h${level}`" class="base-heading">
    <slot />
  </component>
</template>

<style scoped>
.base-heading {
  margin: 0;
  color: var(--wave-navy);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
}
</style>
