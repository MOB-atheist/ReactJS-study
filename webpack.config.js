var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    entry: {
      'loader': path.resolve(__dirname, 'assets/js/loader.js'),
      'all': path.resolve(__dirname, 'assets/all.js')
    },
    output: {
      path: __dirname + '/public/src'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        { 
          test: /\.(png|jpg)$/,
          include: path.join(__dirname, 'img'),
          loader: 'url-loader' 
        }
      ]
    },
    devServer: {
      contentBase: [ path.join(__dirname, 'public'), path.join(__dirname, 'public/src') ],
      host: 'localhost',
      compress: true,
      open: true,
      port: 9000
    },
    performance: {
      hints: "warning"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'assets/index.html',
        hash: true
      }),
      new ScriptExtHtmlWebpackPlugin({
        sync: 'src/loader.js',
        defaultAttribute: 'defer'
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: ['loader']
      })
    ],
    devtool: '#eval-source-map'
  }
  
  if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }