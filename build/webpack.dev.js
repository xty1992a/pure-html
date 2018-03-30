/**
 * Created by TY-xie on 2018/3/30.
 */
process.env.NODE_ENV = 'development'
console.log(process.env.NODE_ENV)

var merge = require('webpack-merge')
var base = require('./webpack.base')
var webpack = require('webpack')
const root = (p) => path.join(__dirname, '..', p)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const plugins = require('./config').plugins
plugins.push(new webpack.HotModuleReplacementPlugin())
const path = require('path')
var dev = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '..'),
    compress: true,
    hot: true,
    port: 7879,
    host: 'localhost'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
    ]
  },
  plugins,
})
module.exports = dev