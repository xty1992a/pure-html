/**
 * Created by TY-xie on 2018/3/30.
 */
process.env.NODE_ENV = 'production'
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge')
var base = require('./webpack.base')
var webpack = require('webpack')
const path = require('path')
var config = require('./config')
plugins = [...config.plugins, ...[
  new ExtractTextPlugin('css/[name].css'),
]]
module.exports = merge.smart(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
          ]
        })
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        })
      }
    ]
  },
  plugins
})

function root(p) {
  return path.join(__dirname, '..', p)
}
