const path = require("path");

module.exports = {
  entry: "./js/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // change to 'production' when deploying
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      // Avoid using Node modules like 'path' in frontend unless necessary
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
};
