<script setup>
/**
 * BaseIcon — ATOME.
 * Système d'icônes centralisé : on choisit l'icône avec la prop `name`.
 * Pour ajouter une icône : ajouter une entrée au registre `icons` ci-dessous.
 * Les tracés sont au format "ligne" (stroke), dans une viewBox 24×24.
 */
const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 28 },
})

const icons = {
  bank:    '<path d="M3 21h18M4 10h16M5 6l7-3 7 3M5 10v11M19 10v11M9 14v3M15 14v3"/>',
  send:    '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  bulb:    '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/>',
  phone:   '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  support: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M18 19a2 2 0 0 0 2-2v-3h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z"/><path d="M6 19a2 2 0 0 1-2-2v-3h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Z"/>',
  shield:  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  user:    '<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
  cart:    '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 7H6"/>',
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="icons[name]"
  />
</template>
