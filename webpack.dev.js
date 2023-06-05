const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: './build',
    },
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new TsConfigPathsPlugin({
      baseUrl: __dirname,
      configFile: path.join(__dirname, 'tsconfig.dev.json'),
    }),
  ],
});
