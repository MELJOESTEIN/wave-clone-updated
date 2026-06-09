<script setup>
/**
 * TheFooter — ORGANISME (fait partie du "chrome" → fourni par le template).
 * Logo + sélecteur de langue + colonnes de liens (données) + badges stores.
 */
import TheLogo from '@/components/atoms/TheLogo.vue'
import StoreBadge from '@/components/atoms/StoreBadge.vue'
import { footerColumns } from '@/data/footer.js'
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <TheLogo />
        <button class="footer__lang">English &#9650;</button>
        <small class="footer__copy">&copy; Wave Mobile Money Inc.</small>
      </div>

      <nav v-for="col in footerColumns" :key="col.title" class="footer__col">
        <h4 class="footer__title">{{ col.title }}</h4>
        <a v-for="link in col.links" :key="link.label" :href="link.href" class="footer__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="footer__stores">
        <StoreBadge store="google" />
        <StoreBadge store="apple" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fff;
  padding-top: 56px;
  padding-bottom: 72px;
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.4fr auto;
  gap: 40px;
  align-items: start;
}
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.footer__lang {
  align-self: flex-start;
  background: none;
  border: 0;
  padding: 0;
  font-weight: 800;
  font-size: 0.85rem;
  color: var(--wave-navy);
}
.footer__copy {
  color: var(--ink-soft);
  font-size: 0.78rem;
}
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer__title {
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--wave-navy);
}
.footer__link {
  text-decoration: none;
  color: var(--wave-navy);
  font-size: 0.9rem;
}
.footer__link:hover {
  color: var(--wave-cyan-deep);
}
.footer__stores {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer__stores :deep(img) {
  height: 44px;
}

@media (max-width: 820px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
