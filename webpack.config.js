var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    bundle: APP_DIR + '/index.jsx'
  },
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  devServer: {
    contentBase: '.',
    port: 3000,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module : {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // font-awesome font loading inspired by https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader?limit=10000&mimetype=application/font-woff",
            options: {
              name: "fonts/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = config;
