/**
 * PostCSS configuration.
 *
 * We use TailwindCSS for utility classes and Autoprefixer to
 * automatically add vendor prefixes. This file is required by Next.js
 * when using Tailwind.
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}