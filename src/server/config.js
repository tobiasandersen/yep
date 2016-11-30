import nconf from 'nconf'

export default nconf
  .argv()
  .env('__')
  .defaults({
    isProduction: process.env.NODE_ENV === 'production',
    cors: {
      origin: process.env.NODE_ENV !== 'production'
    },
    http: {
      port: 8000
    },
    proxy: {
      // /path=http://target
      // file: '/path=http://target'
      // file: { path, url }
    },
    deepstream: {
      url: 'ws://0.0.0.0:6020'
    }
  })
  .get()
