import { fontFamily } from 'tailwindcss/defaultTheme'

/**
 * Tailwind configuration for the JellyTrip site.
 *
 * We extend the default theme with a custom color palette inspired by
 * the original Framer design. These colors are used throughout the
 * application for gradients, buttons, and accents. The Inter font
 * family is set as the default sans-serif font.
 */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        jellyMagenta: '#ff1e86',
        jellyPurple: '#6e17ac',
        jellyBlue: '#5935f0'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}