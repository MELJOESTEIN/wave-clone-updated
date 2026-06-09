<script setup>
/**
 * TheLogo — ATOME.
 * Le logo officiel de Wave (penguin + mot "wave"), image fournie par la marque.
 * On importe l'image : Vite la gère et renvoie son URL finale.
 */
import logoUrl from '@/assets/images/wave-logo.png'
</script>

<template>
  <a href="#" class="logo" aria-label="Wave">
    <img :src="logoUrl" alt="Wave" class="logo__img" />
  </a>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
}
.logo__img {
  height: 34px;
  width: auto;
}
</style>
