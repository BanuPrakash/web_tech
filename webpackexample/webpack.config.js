const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude:/node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {chunks: "all", name: "vendor"}
  },
  plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
  })] 
};