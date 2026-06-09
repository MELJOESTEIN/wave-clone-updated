<script setup>
/**
 * TestimonialCard — MOLÉCULE.
 * Une photo client (atome image) + une carte jaune avec le témoignage.
 */
defineProps({
  name: { type: String, required: true },
  quote: { type: String, required: true },
  photo: { type: String, required: true },
})
</script>

<template>
  <article class="testimonial">
    <img :src="photo" :alt="name" class="testimonial__photo" />
    <div class="testimonial__card">
      <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
      <p class="testimonial__quote">{{ quote }}</p>
      <span class="testimonial__name">{{ name }}</span>
    </div>
  </article>
</template>

<style scoped>
.testimonial {
  display: flex;
  align-items: flex-start;
}
.testimonial__photo {
  width: 300px;
  height: 380px;
  object-fit: cover;
  flex: none;
  position: relative;
  top: -34px;
  z-index: 2;
}
.testimonial__card {
  flex: 1;
  align-self: stretch;
  background: var(--wave-yellow-card);
  margin-left: -16px;
  padding: 56px 64px 96px 84px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.testimonial__mark {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 88px;
  line-height: 0.6;
  color: var(--wave-brown);
  font-weight: 700;
}
.testimonial__quote {
  margin: 24px 0 28px;
  color: var(--wave-maroon);
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.25;
  max-width: 22ch;
}
.testimonial__name {
  color: var(--wave-brown);
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
}

@media (max-width: 760px) {
  .testimonial {
    flex-direction: column;
    align-items: center;
  }
  .testimonial__card {
    margin-left: 0;
    margin-top: -20px;
    padding: 48px 32px 56px;
  }
}
</style>
