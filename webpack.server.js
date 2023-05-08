const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = /** @type {import('webpack').Configuration}*/ ({
  entry: {
    server: path.join(__dirname, "./server/index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {},
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 500,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  target: "node",
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      __SSR: JSON.stringify(true),
    }),
  ],
  devtool: "cheap-source-map",
});
