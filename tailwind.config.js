/** @type {import('tailwindcss').Config} */
import {default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"


export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {      
      colors:{
        "dark-primary":"#100919",
        "dark-purple":"#1C0B3F",
        "purple-primary":"#A047F9"
      },
      backgroundImage:{
        'square_bg': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.5)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',

      }
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
