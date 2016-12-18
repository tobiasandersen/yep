import express from 'express'
import http from 'http'
import httpProxyMiddleware from 'http-proxy-middleware'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'
import config from './config'

const app = express()

const webpackCompiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(webpackCompiler, {
  contentBase: './',
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
  }
}))
app.use(webpackHotMiddleware(webpackCompiler, {
  path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}))

app.get('/healthcheck', (req, res, next) => res.sendStatus(200))


const server = http.createServer(app)

if (config.deepstream && config.deepstream.url) {
  server.on('upgrade', httpProxyMiddleware(config.deepstream.url).upgrade)
}

server.listen(config.http.port, () => {})

async function gracefulShutdown () {
  await new Promise(resolve => server.close(resolve))
  process.exit(0)
}
