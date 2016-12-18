import deepstream from 'deepstream.io-client-js'

const ds = deepstream('localhost:6020', {}).login()

ds.on('connectionStateChanged', connectionState =>
  console.log({ connectionState }, 'Deepstream Connection State Changed.')
)

ds.on('error', (error, event, topic) =>
  console.log({ error, event, topic }, 'Deepstream Error.')
)

export default ds
