const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  colors: true,
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
      './src/client/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.css'],
    root: path.resolve('./src/client'),
    alias: {
      actions: 'scripts/actions',
      api: 'scripts/api',
      components: 'components',
      lib: 'lib',
      containers: 'scripts/containers',
      constants: 'scripts/constants',
      reducers: 'scripts/reducers',
      store: 'scripts/store',
      utils: 'scripts/utils',
      styles: 'styles',
      svg: 'svg'
    }
  },
 externals: {
    ws: 'WebSocket'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          env: {
            development: {
              presets: ['es2015-node6', 'react', 'stage-0'],
              plugins: [
                'transform-decorators-legacy'
              ]
            },
            production: {
              presets: ['es2015-node6', 'react', 'react-optimize', 'stage-0'],
              plugins: [
                'transform-decorators-legacy'
              ]
            }
          }
        }
      },
      {
        test: /\.less/,
        loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader',
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite!svgo?' + JSON.stringify({
          name: '[name]_[hash]',
          prefixize: true,
          plugins: [
            {removeTitle: true},
            {convertColors: {shorthex: false}},
            {convertPathData: false}
          ]
        })
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jeopardy',
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IS_BROWSER: true, // Because webpack is used only for browser code.
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
      }
    }),
    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom',
      React: 'react'
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
