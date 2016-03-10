var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  debug: true,
  colors: true,
  eslint: {
    configFile: '.eslintrc'
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:9000',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    path: '/static',
  },
  resolve: {
    extensions: ['', '.js', '.css'],
    root: path.resolve('./src'),
    alias: {
      actions: 'scripts/actions',
      api: 'scripts/api',
      components: 'scripts/components',
      containers: 'scripts/containers',
      constants: 'scripts/constants',
      reducers: 'scripts/reducers',
      store: 'scripts/store',
      styles: 'styles',
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less/,
        loader: 'style!css!less'
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
      },
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
