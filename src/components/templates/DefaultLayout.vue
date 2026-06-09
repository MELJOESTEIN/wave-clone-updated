<script setup>
/**
 * DefaultLayout — TEMPLATE.
 * Le squelette de page : le "chrome" qui entoure tout contenu
 * (bandeau + navbar en haut, footer en bas), avec un <slot> au milieu
 * où la PAGE vient s'insérer. Aucune donnée métier ici.
 */
import TheAnnouncementBar from '@/components/organisms/TheAnnouncementBar.vue'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
</script>

<template>
  <TheAnnouncementBar />
  <TheNavbar />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>
