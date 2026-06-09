<script setup>
/**
 * NavLink — ATOME.
 * Un lien de navigation. La cible est passée via la prop `href`.
 */
defineProps({
  href: { type: String, default: '#' },
})
</script>

<template>
  <a :href="href" class="nav-link">
    <slot />
  </a>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  transition: color 0.16s ease;
}
.nav-link:hover {
  color: var(--wave-cyan-deep);
}
</style>
