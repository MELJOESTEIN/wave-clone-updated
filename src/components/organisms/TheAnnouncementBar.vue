<script setup>
/**
 * TheAnnouncementBar — ORGANISME.
 * Le bandeau orange "We're hiring" tout en haut de la page.
 */
</script>

<template>
  <div class="announcement">
    <span>We're hiring!&nbsp;</span>
    <a href="#">Check out our open positions here</a>
    <span class="arrow" aria-hidden="true">→</span>
  </div>
</template>

<style scoped>
.announcement {
  background: var(--wave-orange);
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 14px 16px;
}
.announcement a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.arrow {
  color: var(--wave-yellow);
  margin-left: 12px;
  font-weight: 800;
}
</style>
