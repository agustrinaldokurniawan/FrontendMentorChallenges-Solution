module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: "./build",
    },
    port: 3000,
    open: true,
    hot: true,
  },
};
