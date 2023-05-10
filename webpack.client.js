const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = /** @type {import('webpack').Configuration}*/ ({
  entry: {
    client: path.join(__dirname, "./src/index.tsx"),
  },
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 500,
  },
  output: {
    path: path.resolve(__dirname, "./dist/static"),
    filename: "[name].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __SSR: JSON.stringify(false),
    }),
  ],
});

module.exports = merge(baseConfig, config);
