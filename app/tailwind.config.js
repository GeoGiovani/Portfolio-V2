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
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '6.5rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '96': '22rem',
      '128': '32rem'
    },
    extend: {
      colors: {
        'custom-grey-800': '#343233',
        'custom-grey-900': '#262425',
        'custom-beige-200': '#efdbb9',
        'custom-teal-300': '#62f4eb',
        'custom-teal-400': '#3ae7e1',
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
