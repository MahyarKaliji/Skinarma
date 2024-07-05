/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('G:/Learning/06-Web%20Designing%20-%20Class/01-Exams/14030403/assets/images/02-header/header-background.png')",
        'main-bg': "url('G:/Learning/06-Web%20Designing%20-%20Class/01-Exams/14030403/assets/images/03-main/main-bg.png')",
        'footer-bg': "url('G:/Learning/06-Web Designing - Class/01-Exams/14030403/assets/images/06-footer/bg2.jpg')"
      },
      gridTemplateColumns: {
        //navbar layout
        "navbar-layout": "2fr,6fr,4fr",
        "product-layout": "4fr,1fr",
      },
      fontSize: {
        "main-title": "13rem",
      },
      fontFamily: {
        body: ["Mukta"],
      },
    },
  },
  plugins: [],
};
