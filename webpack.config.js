const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/scripts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
 module: {
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
     new HtmlWebpackPlugin({ template: 'index.html' }),
  new CopyWebpackPlugin({
    patterns: [
      { from: 'assets', to: 'assets' }, // copies ./assets into ./dist/assets
    ],
  }),
  ],
  mode: "development",
};
