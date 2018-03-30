/**
 * Created by TY-xie on 2018/3/30.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = (p) => path.join(__dirname, '..', p)
let list = require('./pages')
let entry = {}
let plugins = []
let dev = process.env.NODE_ENV === 'development'
console.log(dev)
list.forEach(p => {
  entry[p.name] = root(`src/pages/${p.name}/index.js`)
  console.log(`dist/${p.page}`)
  plugins.push(new HtmlWebpackPlugin({
    filename: dev ? `${p.name}.html` : p.page,
    template: root(`src/pages/${p.name}/index.html`),
    inject: true,
    chunks: [p.name],
    hash: true,
  }))
})

module.exports = {
  entry: entry,
  plugins: plugins
}