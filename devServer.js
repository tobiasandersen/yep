var path = require('path');
var express = require('express');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var config = require('./webpack.config');
var app = express();
config.entry.app.unshift("webpack-dev-server/client?http://localhost:9000", "webpack/hot/dev-server");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
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
}, function(err, stats) {
  stats.toString({chunks:false})
});

server.listen(9000, "localhost", function() {
  console.log('Listening at http://localhost:9000');
});
