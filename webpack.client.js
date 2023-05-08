const webpack = require("webpack");
const path = require("path");

module.exports = /** @type {import('webpack').Configuration}*/ ({
  entry: {
    client: path.join(__dirname, "./src/index.tsx"),
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
            options: {
              modules: {
                namedExport: true,
              },
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  watch: true,
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 500,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/static"),
    filename: "[name].js",
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      __SSR: JSON.stringify(false),
    }),
  ],
});
