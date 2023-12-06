const {
    defineConfig
  } = require('cypress')
  
  module.exports = defineConfig({
    retries: 1,
    e2e: {
      baseUrl: 'http://localhost:3000',
    },
    env: {
        viewportWidth: 1366,
        viewportHeight: 768, // для ноутбуков
      },
  })