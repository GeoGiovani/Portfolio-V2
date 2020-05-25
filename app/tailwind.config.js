const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    spacing: {
      '0': '0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '6.5rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '80': '19rem',
      '96': '22rem',
      '112': '25rem',
      '128': '32rem',
      '142': '35rem',
      '156': '38rem',
      '196': '42rem',
      '256': '52rem',
      '300': '56rem',
      '350': '62rem',
      'p1': '1%',
      'p2': '2%',
      'p2-5': '2.5%',
      'p3': '3%',
      'p4': '4%',
      'p5': '5%',
      'p7-5': '7.5%',
      'p10': '10%',
      'p15': '15%',
      'p17-5': '17.5%',
      'p20': '20%',
      'p25': '25%',
      'p30': '30%',
      'p33': '33.33333%',
      'p37-5': '37.5%',
      'p40': '40%',
      'p50': '50%',
      'p60': '60%',
      'p70': '70%',
      'p75': '75%',
      'p80': '80%',
      'p85': '85%',
      'p90': '90%',
    },
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'smmd': '720px',
      'md': '850px',
      'lg': '1024px',
      'lglg': '1100px',
      'lgxl': '1290px',
      'xl': '1400px',
    },
    extend: {
      colors: {
        'custom-black-800': '#101010',
        'custom-black-900': '#0c0c0c',
        'custom-grey-800': '#343233',
        'custom-grey-900': '#262425',
        'custom-beige-100': '#fcefc7',
        'custom-beige-200': '#efdbb9',
        'custom-beige-300': '#e7ca97',
        'custom-teal-300': '#62f4eb',
        'custom-teal-400': '#3ae7e1',
        'custom-red-400': '#fe2c5d',
        'custom-red-500': '#ff3f83',
        'custom-red-600': '#980124',
        'custom-purple-400': '#2E55C1',
        'custom-yellow-400': '#ffeb3b',
        'custom-green-400': '#04C2C9',
      },
      borderRadius: {
        'circle': '50%',
      },
      fontSize: {
        'hero-xxsm': '24pt',
        'hero-xsm': '2.5rem',
        'hero-sm': '4.5rem',
        'hero-smmd': '5rem',
        'hero-md': '6rem',
        'hero-lg': '7rem',
        'hero-lglg': '8rem',
        'hero-lgxl': '9rem',
        'hero-xl': '10rem',
        'profile-xl': '1.75rem',
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'open-sans': ['Open Sans'],
      },
      inset: {
        'p5': '5%',
        'p7-5': '7.5%',
        'p10': '10%',
        'p15': '15%',
        'p20': '20%',
        'p25': '25%',
        'p30': '30%',
        'p40': '40%',
        'p50': '50%',
        'p100': '100%',
        'p110': '110%',
        'p120': '120%',
        'p120': '130%',
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
  variants: {
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    plugin(require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],
    
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["church-on-sunday"],
    
      // The foreground colors of the pattern
      colors: {
        default: "#9C92AC",
        "custom-grey-900": "#262425" //also works with rgb(0,0,205)
      },
    
      // The foreground opacity
      opacity: {
        default: "0.5",
        "100": "1.0"
      }
    }))
  ],
}
