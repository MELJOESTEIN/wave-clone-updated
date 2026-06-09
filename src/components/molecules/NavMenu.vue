<script setup>
/**
 * NavMenu — MOLÉCULE.
 * Un groupe de NavLink (atomes). On lui passe un tableau d'items.
 */
import NavLink from '@/components/atoms/NavLink.vue'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <nav class="nav-menu">
    <NavLink v-for="item in items" :key="item.label" :href="item.href">
      {{ item.label }}
    </NavLink>
  </nav>
</template>

<style scoped>
.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}
</style>
