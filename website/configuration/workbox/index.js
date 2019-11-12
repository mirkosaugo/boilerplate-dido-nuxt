export default {
  runtimeCaching: [
    {
      urlPattern: process.env.API_URL,
      handler: 'staleWhileRevalidate',
      strategyOptions: {
        cacheName: 'app'
      }
    }
  ]
}
