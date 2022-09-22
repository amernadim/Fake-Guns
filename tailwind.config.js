/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9b0c26",
        
"secondary": "#f7b58c",
        
"accent": "#2bb542",
        
"neutral": "#232634",
        
"base-100": "#2B3F4A",
        
"info": "#94D9F4",
        
"success": "#0D6835",
        
"warning": "#F0B575",
        
"error": "#EB2445",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
