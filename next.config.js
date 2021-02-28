/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
    runtimeCaching
  }
})
