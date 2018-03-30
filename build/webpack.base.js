/**
 * Created by TY-xie on 2018/3/30.
 */
var path = require('path')
var config = require('./config')
module.exports = {
  entry: config.entry,
  resolve: {
	extensions: ['.js', '.vue', '.json'],
	alias: {}
  },
  output: {
	path: path.resolve(__dirname, '../dist'),
	filename: 'js/[name].js',
	publicPath: '/'
  },
  module: {
	rules: [
	  {
		test: /(\.jsx|\.js)$/,
		use: {
		  loader: 'babel-loader',
		},
		exclude: /node_modules/
	  },
	  {
		test: /\.(woff|svg|eot|ttf).*$/,
		use: [
		  'url-loader',
		  'file-loader'
		]
	  },
	  {
		test: /\.(png|jpe?g|gif)(\?.*)?$/,
		loader: 'url-loader',
		options: {
		  limit: 10000,
		  name: '[name].[ext]',
		  publicPath: '/dist/static'
		}
	  },
	  {
		test: /\.css$/,
		use: [
		  {
			loader: 'style-loader'
		  },
		  {
			loader: 'css-loader'
		  }
		]
	  },
	  {
		test: /\.vue/,
		use: {
		  loader: 'vue-loader'
		}
	  }
	]
  },
  plugins: []
}

function root(p) {
  return path.join(__dirname, '..', p)
}