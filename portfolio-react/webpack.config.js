const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@lottie-react': path.resolve(__dirname, 'node_modules/lottie-react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/lottie-react/,
        ],
      },
    ],
  },
};
