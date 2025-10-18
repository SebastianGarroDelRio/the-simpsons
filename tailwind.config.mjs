// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Rutas a todos tus archivos Astro, componentes, etc.
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'simpsons-amarillo': '#FED400',       // Amarillo de los personajes
        'simpsons-azul-cielo': '#6d9dd3',     // Azul del cielo de la intro
        'simpsons-rosa-dona': '#FF69B4',      // Rosa del glaseado para el CTA
        'simpsons-verde': '#8CC63F',          // ¡El verde del pasto y los arbustos!
        'simpsons-negro': '#000000',          // Negro para los contornos
      },
    },
  },
  plugins: [],
}