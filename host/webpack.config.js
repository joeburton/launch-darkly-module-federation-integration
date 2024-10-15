const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        dashboard: 'dashboard@//localhost:3002/remoteEntry.js',
      },
      shared: ['react', 'react-dom/client', 'launchdarkly-react-client-sdk'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv({
      path:
        process.env.NODE_ENV === 'production'
          ? './.env.production'
          : './.env.development',
    }),
  ],
};
