const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /(\.module)?\.css$/i,
    include: path.resolve(__dirname, 'src'),
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
    ],
  },
  {
    test: /(\.module)?\.s[ca]ss$/,
    // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      'postcss-loader',
      'sass-loader',
    ],
    exclude: /node_modules/,
  }
]