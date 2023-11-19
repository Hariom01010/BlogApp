/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      keyframes:{
        slideInLeft:{
          '0%':{transform: 'translateX(100%)'},
          '100%':{transform: 'translateX(0)'}
        },
        slideInTop:{
          "0%":{transform: 'translateY(-100%)'},
          "100%":{transform: "translateY(0%)"}
        },
        fadeIn:{
          "0%":{opacity:0},
          '100%':{opacity: 1}
        },
        fadeOut:{
          "0%":{opacity:1},
          "100%":{opacity:0}
        },
        changeColor:{
          "0%":{color: "#f8f2f4"},
          "100%":{color:"#db2783"}
        }
      },
      animation:{
        'slideInLeft': 'slideInLeft 0.7s ease-out',
        'slideInTop': 'slideInTop 0.3s ease-out',
        'fadeIn': 'fadeIn 1s ease-out',
        'changeColor': 'changeColor 0.3s linear forwards',
        "fadeOut": "fadeOut 0.5s linear forwards"
      }
    },
  },
  plugins: [],
}