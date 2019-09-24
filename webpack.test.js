const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'eval-source-map',
  entry: './test/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolveLoader: {
    alias: {
      'babel-loader': './test/loaders/babel-loader.js',
      'style-loader': './test/loaders/style-loader.js',
      'file-loader': './test/loaders/file-loader.js',
      'url-loader': './test/loaders/url-loader.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
            },
          },
        ],
      },
      // {
      //   test: /\.png$/,
      //   use: 'file-loader'
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}