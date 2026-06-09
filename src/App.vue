<script setup>
/**
 * App.vue — racine de l'application.
 * On applique le TEMPLATE (DefaultLayout) qui contient le "chrome"
 * (bandeau + navbar), puis on glisse la PAGE dedans via le <slot>.
 */
import DefaultLayout from '@/components/templates/DefaultLayout.vue'
import HomePage from '@/pages/HomePage.vue'
</script>

<template>
  <DefaultLayout>
    <HomePage />
  </DefaultLayout>
</template>
