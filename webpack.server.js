const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = /** @type {import('webpack').Configuration}*/ ({
  entry: {
    server: path.join(__dirname, "./server/index.ts"),
  },
  externals: [nodeExternals()],
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 500,
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  target: "node",
  plugins: [
    new webpack.DefinePlugin({
      __SSR: JSON.stringify(true),
    }),
  ],
});

module.exports = merge(baseConfig, config);
