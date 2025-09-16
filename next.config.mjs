/**
 * Next.js configuration.
 *
 * We export a static site (`next export` output) and disable Next's
 * image optimization by setting `unoptimized` to true. This allows
 * the project to be deployed on any static host, including Hostinger.
 */
export default {
  output: 'export',
  images: {
    unoptimized: true
  }
}