/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html'],
  theme: {
    extend: {
      colors:{
        'dark-red':'#950101',
        'intense-red':'#E83030',
        'black':"#191919",
        "gray":'#404040',
        'white':'#ffffff',
        'yellow':"#ffbc00",
        'blue':"#0066B2",
        'green':"#018749"
      },
      backgroundImage:{
        'estadio':"url('./src/assets/estadio.jpg')"
      },
      animation:{
        loading:'loading 8s linear infinite'
      },
      keyframes:{
        loading:{
          '0%':{transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(100%)'}
        }
      },
      screens:{
        "xs":{'max':'430px'},
        "sm":{'max':'550px'},
        'md':{'max':'650px'}
      }
    },

  },
  plugins: [],
}