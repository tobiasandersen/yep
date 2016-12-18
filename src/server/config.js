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
    deepstream: {
      url: 'ws://0.0.0.0:6020'
    }
  })
  .get()
