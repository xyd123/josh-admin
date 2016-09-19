var path = require('path')
var config = require('../config')//基本配置
var utils = require('./utils')
var entrys = require('./entrys')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry:entrys.entryPlugin(),
  output: {
    // webpack的build路径
    path: config.build.assetsRoot,
    // 你require的路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: "[id][chunkhash].js"
  },
  resolve: {
    // 定义后缀
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    // 定义别名
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'layers': path.resolve(__dirname, '../src/layers')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
         test: /vux.src.*?js$/,
         loader: 'babel'
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  babel: {
      "presets": ["es2015", "stage-2"],
      "plugins": ["transform-runtime"],
      "comments": false
  }
}
