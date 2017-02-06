import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const outputPath = path.join(__dirname, 'dist');

module.exports = {
  devtool: false,
  entry: {
    bundle: './example/index.jsx',
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader',
          'babel-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './example/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
