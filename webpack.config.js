// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/useStorage.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "useStorageHook",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    react: "react",
  },
  mode: "production",
};