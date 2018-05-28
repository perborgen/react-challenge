const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
