<script setup>
/**
 * StoreBadge — ATOME.
 * Badge officiel de téléchargement. La prop `store` ("google" | "apple")
 * choisit l'image à afficher.
 */
import googlePlay from '@/assets/images/badge-google-play.png'
import appStore from '@/assets/images/badge-app-store.png'

const props = defineProps({
  store: { type: String, required: true }, // 'google' | 'apple'
})

const badges = {
  google: { src: googlePlay, alt: 'Get it on Google Play' },
  apple: { src: appStore, alt: 'Download on the App Store' },
}
</script>

<template>
  <a href="#" class="store-badge">
    <img :src="badges[store].src" :alt="badges[store].alt" />
  </a>
</template>

<style scoped>
.store-badge {
  display: inline-flex;
}
.store-badge img {
  height: 48px;
  width: auto;
}
</style>
