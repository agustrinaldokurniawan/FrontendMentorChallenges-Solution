const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new TsConfigPathsPlugin({
      baseUrl: __dirname,
      configFile: path.join(__dirname, 'tsconfig.json'),
    }),
  ],
});
