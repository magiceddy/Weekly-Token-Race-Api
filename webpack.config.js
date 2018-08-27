const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}