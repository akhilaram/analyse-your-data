const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const HOST = process.env.HOST ? process.env.HOST : "localhost";
const PORT = process.env.PORT ? process.env.PORT : 3000;

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: {
      index: `/index.html`,
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    host: HOST,
    https: false,
    port: PORT,
    compress: true,
    hot: true,
    open: {
      target: `/analyse-your-data`,
      app: {
        name: "chrome",
      },
    },
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.jsx"),
  },

  output: {
    path: path.resolve(__dirname, `./dist`),
    filename: "[name].bundle.js",
    publicPath: `/analyse-your-data`,
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      // Html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: ["base64-inline-loader"],
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
        use: ["base64-inline-loader"],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(less|scss|css)$/,
        include: path.resolve(__dirname, "./src/global"),
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".html"],
  },
};
