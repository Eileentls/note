const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
      'normalize.css',
    ],
    vendor: [
      'react', 'react-dom', 'styled-components', 'axios',
    ],
  },
  output: {
    path          : path.resolve(__dirname, 'dist'),
    filename      : 'js/[name].js',
    publicPath    : '/',
    chunkFilename : 'js/[name].js',
  },
  resolve: {
    alias: {
      //common     : path.resolve(__dirname, 'common'),
      components : path.resolve(__dirname, 'src', 'components'),
      modules    : path.resolve(__dirname, 'src', 'modules'),
      //utils      : path.resolve(__dirname, 'src', 'utils'),
    },
  },
  module: {
    rules: [
      {
        use     : ['babel-loader'],
        test    : /\.js$/,
        exclude : /node_modules/,
        include : path.resolve(__dirname, 'src'),
      },
      {
        use  : ['style-loader', 'css-loader', 'sass-loader'],
        test : /\.s?css$/,
      },
      {
        use: [{
          loader  : 'url-loader',
          options : {
            limit: 8192,
          },
        }],
        test: /\.(jpe?g|png|gif|svg)$/,
      },
    ],
  },
  devtool : 'source-map',
  plugins : [
    new HtmlWebpackPlugin({
      template : './src/views/index.html',
      inject   : true,
    }),
    new LodashWebpackPlugin({
      collections: true,
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: 'vendor',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
