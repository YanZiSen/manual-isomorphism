module.exports = /** @type {import('webpack').Configuration}*/ ({
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
            loader: "isomorphic-style-loader",
            options: {
              getCss: (css) => {
                return css.default;
              },
            },
          },
          {
            loader: "css-loader4",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  mode: "development",
});
