/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('../images/02-header/header-background.png')",
        'main-bg': "url('../images/03-main/main-bg.png')",
        'footer-bg-mob': "url('../images/06-footer/bg2-mobile.jpg')",
        'footer-bg-desk': "url('../images/06-footer/bg2-desktop.jpg')"
      },
      gridTemplateColumns: {
        //navbar layout
        "navbar-layout": "2fr,6fr,4fr",
        "product-layout": "4fr,1fr",

        // FOOTER
        'footer': "2fr,1fr,1fr,1.5fr"
      },
      fontSize: {
        "main-title": "13rem",
      },
      fontFamily: {
        body: ["Mukta"],
      },
      content:[
        "./node_modules/flowbite/**/*.js"
      ]
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};