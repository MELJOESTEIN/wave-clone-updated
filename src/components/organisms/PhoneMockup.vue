<script setup>
/**
 * PhoneMockup — ORGANISME.
 * Pour le hero (vitrine marketing), on utilise la VRAIE capture de l'écran
 * de l'app, fournie comme asset, dans un cadre de téléphone blanc.
 *
 * 👉 Note pédagogique : dans le vrai produit, cet écran serait lui-même
 *    composé de molécules (voir ActionButton.vue + TransactionRow.vue, qui
 *    restent dans le projet comme exemple). Ici une image statique suffit
 *    et garantit un rendu pixel-perfect.
 */
import appScreen from '@/assets/images/app-screen.png'
</script>

<template>
  <div class="phone">
    <img :src="appScreen" alt="Application Wave" class="phone__screen" />
  </div>
</template>

<style scoped>
.phone {
  width: 320px;
  background: #fff;
  border-radius: 42px;
  padding: 12px 12px 0;
  box-shadow: 0 50px 90px -34px rgba(20, 16, 75, 0.55);
  overflow: hidden;
  max-height: 520px;
}
.phone__screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 32px 32px 0 0;
}
</style>
