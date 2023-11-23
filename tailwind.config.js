/** @type {import('tailwindcss').Config} */
/* En el content, simplemente le estamos diciendo que dentro de index.html o 
cualquier archivo que este dentro de src o tenga extensiones de js,ts,jsx o tsx.
Va a poder utilizar TailWindCss */

export default {
    content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"], 
    theme: {
      extend: {
        colors: {
          'bg-color-black': 'var(--bg-color-black)',
          'bg-color-gray': 'var(--bg-color-gray)'
        },
      },
    },
    plugins: [],
    corePlugins: {
      scrollbar: true,
    },
  }
  