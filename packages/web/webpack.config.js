const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const publicPath = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: path.join(srcPath, "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "script.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    hot: true,
    port: 3030
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html")
    })
  ]
};
