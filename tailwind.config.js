/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "*/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "BrightRed": "hsl(12, 88%, 59%)",
        "DarkBlue": "hsl(228, 39%, 23%)",
        "DarkGrayishBlue": "hsl(227, 12%, 61%)",
        "VeryDarkBlue": "hsl(233, 12%, 13%)",
        "VeryPaleRed": "hsl(13, 100%, 96%)",
        "VeryLightGray": "hsl(0, 0%, 98%)",
        "hoverRed": "hsl(12, 93%, 71%)",
      },
      fontFamily: {
        'Be-Vietnam ': ['Be Vietnam Pro', 'sans-serif'],
        'Smooch-Sans': ['Smooch Sans', 'serif'],
      },
      boxShadow: {
        'buttonshadow': '0 4px 2px -1px hsl(12, 88%, 59%), 0 2px 4px -2px hsl(12, 88%, 59%)',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    function ({ addUtilities }) {
      addUtilities({
        '.column-reverse': {
          'grid-auto-flow': 'column-reverse',
        },
      })
    },
  ],
}

