/**
 * testimonials.js — avis clients affichés dans la section témoignages.
 * On importe les photos : Vite renvoie leur URL finale.
 */
import firmin from '@/assets/images/testimonial-firmin.png'
import awa from '@/assets/images/testimonial-awa.png'

export const testimonials = [
  {
    id: 1,
    name: 'FIRMIN',
    quote: 'I only send money to my family with Wave now.',
    photo: firmin,
  },
  {
    id: 2,
    name: 'AWA',
    quote: 'Wave is simple and reliable, with the lowest fees. I use it every single day.',
    photo: awa,
  },
]
