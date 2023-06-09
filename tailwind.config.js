const defaultTheme= require('tailwindcss/defaultConfig');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors:{
      ...defaultTheme.colors,
      primary:'#3B81F6',
      backcolor:'#f7fafc',
      filter:'#dcdcdc',
      white:'#ffffff',
      textColor:"rgba(0,0,0,0.64)",
      hoverCol:"#e2e8f0",
      text: {
        DEFAULT:'#1F2937',
        light:"#6C7281",
      },
      light:{
        DEFAULT:"#FAFBFC",
        lighter:"#F3F4F6",
      }
    },
    extend: {},
  },
  plugins: [],
}

