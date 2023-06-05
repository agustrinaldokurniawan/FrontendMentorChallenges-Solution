module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: "./build",
    },
    open: true,
    hot: true,
    port: 3000,
  },
};
