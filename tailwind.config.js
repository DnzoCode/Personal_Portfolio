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
