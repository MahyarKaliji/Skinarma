/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{// background image
        'header-image': "url('/assets/images/header/header-background.jpg')",
        // 'header-bg': "url('/assets/images/header/bg.jpg')"
      },
      gridTemplateColumns:{ //navbar layout
        'navbar-layout': '2fr,6fr,4fr',
        'product-layout': '4fr,1fr'
      },
      fontSize:{
        'main-title': '13rem'
      },
      fontFamily:{
        body:['Mukta']
      }
    },
  },
  plugins: [],
}