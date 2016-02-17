var path = require('path');
var express = require('express');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var config = require('./webpack.config');
var app = express();
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8090", "webpack/hot/dev-server");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: './',
  hot: true,
  proxy: {
    "*": "http://localhost:8080"
  },
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },
});

server.listen(8090, "localhost", function() {
  console.log('Listening at http://localhost:8090');
});
