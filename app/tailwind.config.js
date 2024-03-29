const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [],
  theme: {
    spacing: {
      'n5': '-1.25rem',
      'n4': '-1rem',
      '0': '0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '28': '6.5rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '80': '17rem',
      '96': '22rem',
      '112': '25rem',
      '116': '27rem',
      '120': '29rem',
      '124': '30.5rem',
      '128': '32rem',
      '142': '35rem',
      '156': '36rem',
      '176': '39rem',
      'p1': '1%',
      'p7-5': '7.5%',
      'p12-5': '12.5%',
      'p15': '15%',
      'p20': '20%',
      'p25': '25%',
      'p30': '30%',
      'p40': '40%',
      'p60': '60%',
      'p80': '80%',
      'p85': '85%',
      'p90': '90%',
      'p99': 'calc(100% - 1px)',
      'screen-lg': '102vh',
    },
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'smmd': '720px',
      'md': '850px',
      'lg': '1024px',
      'lglg': '1100px',
      'lgxl': '1220px',
      'xl': '1320px',
      'xxl': '1400px',
    },
    extend: {
      colors: {
        'custom-black-800': '#141414',
        'custom-black-900': '#101010',
        'custom-black-1000': '#0c0c0c',
        'custom-grey-800': '#343233',
        'custom-grey-900': '#262425',
        'custom-red-300': '#ec528d',
        'custom-red-400': '#ff3f8e',
        'custom-teal-400': '#6bf178',
        'custom-yellow-200': '#ffd699',
        'custom-yellow-300': '#ffbb55',
        'custom-yellow-400': '#f5bd67',
        'custom-green-300': '#81e6d9',
        'custom-green-400': '#04c2c9',
      },
      opacity: {
        '85': '.85',
        '90': '.90',
        '95': '.95',
      },
      fontSize: {
        'hero-xxxsm': '21pt',
        'hero-xxsm': '24pt',
        'hero-xsm': '2.5rem',
        'hero-vsm': '3rem',
        'hero-usm': '3.5rem',
        'hero-sm': '4.5rem',
        'hero-smmd': '5rem',
        'hero-md': '6rem',
        'hero-lg': '7rem',
        'hero-lglg': '8rem',
        'hero-lgxl': '8.5rem',
        'hero-xl': '10rem',
        'profile-xl': '1.75rem',
      },
      fontFamily: {
        'roboto': ['Roboto'],
      },
      inset: {
        'p5': '5%',
        'p6': '6%',
        'p7-5': '7.5%',
        'p10': '10%',
        'p12-5': '12.5%',
        'p15': '15%',
        'p20': '20%',
        'p25': '25%',
        'p30': '30%',
        'p40': '40%',
        'p50': '50%',
        'p80': '80%',
        'p100': '100%',
      },
      transitionDuration: {
        '400': '400ms',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      minHeight: {
        '124': '30.5rem',
        '142': '35rem',
        '176': '39rem',
        '200': '50rem',
      },
      maxHeight: {
        '124': '30.5rem',
        '142': '35rem',
        '176': '39rem',
        '200': '50rem',
      }
    },
  },
  variants: {
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus'],
    },
  },
}
