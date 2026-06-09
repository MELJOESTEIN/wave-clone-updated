<script setup>
/**
 * StoreButtons — MOLÉCULE.
 * Regroupe les deux atomes StoreBadge (Google Play + App Store).
 */
import StoreBadge from '@/components/atoms/StoreBadge.vue'
</script>

<template>
  <div class="store-buttons">
    <StoreBadge store="google" />
    <StoreBadge store="apple" />
  </div>
</template>

<style scoped>
.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
