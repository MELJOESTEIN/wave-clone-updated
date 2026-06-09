<script setup>
/**
 * HeroSection — ORGANISME.
 * Le bloc bleu d'accueil : titre + sous-titre + boutons stores (molécule)
 * à gauche, et le mockup du téléphone (organisme) à droite.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import StoreButtons from '@/components/molecules/StoreButtons.vue'
import PhoneMockup from '@/components/organisms/PhoneMockup.vue'
</script>

<template>
  <section class="hero">
    <!-- Décor : traits diagonaux bleu clair en haut à droite -->
    <svg class="hero__lines" viewBox="0 0 220 320" aria-hidden="true">
      <g stroke="#7FD8F7" stroke-width="11" stroke-linecap="round" fill="none">
        <path d="M40 330 L150 70" />
        <path d="M72 330 L182 70" />
        <path d="M104 330 L214 70" />
      </g>
    </svg>

    <div class="hero__inner container">
      <div class="hero__content">
        <BaseHeading :level="1" class="hero__title">
          Mobile money,<br />reinvented
        </BaseHeading>
        <BaseText class="hero__subtitle">
          Deposit, withdraw, pay bills for free.<br />Send for only 1%.
        </BaseText>
        <StoreButtons class="hero__stores" />
      </div>

      <div class="hero__visual">
        <PhoneMockup />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--wave-cyan);
  overflow: hidden;
}
.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.hero__title {
  color: #fff;
  font-size: clamp(48px, 6vw, 84px);
}
.hero__subtitle {
  color: #fff;
  font-size: 1.5rem;
  margin-top: 28px;
}
.hero__stores {
  margin-top: 40px;
}
.hero__visual {
  display: flex;
  justify-content: center;
  align-self: end;
}
/* Le téléphone déborde légèrement en bas, comme sur la maquette */
.hero__visual :deep(.phone) {
  margin-bottom: -56px;
}
.hero__lines {
  position: absolute;
  top: 0;
  right: 40px;
  width: 220px;
  height: 320px;
  z-index: 1;
  opacity: 0.7;
}

/* Vagues décoratives (indigo) en bas, façon empreinte digitale */
.hero::after {
  content: "";
  position: absolute;
  left: 44%;
  bottom: -240px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    transparent 0 40%,
    var(--wave-indigo) 40% 44%,
    transparent 44% 54%,
    var(--wave-indigo) 54% 58%,
    transparent 58% 68%,
    var(--wave-indigo) 68% 72%,
    transparent 72%
  );
  opacity: 0.55;
  z-index: 1;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
  .hero__visual {
    justify-content: flex-start;
  }
}
</style>
