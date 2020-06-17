const webpack = require("webpack");
const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    watch: !isProduction,
    entry: ["./src/index.js", "./src/public/style.scss"],
    output: {
      filename: "index.js",
      path: path.join(__dirname, "/dist"),
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["transform-class-properties"],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
          }
        },
        {
          test: /\.mp3$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/audio',
          }
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: !isProduction,
      }),
      new HtmlWebpackPlugin({
        template: "./src/public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9000,
    },
  };

  return config;
};