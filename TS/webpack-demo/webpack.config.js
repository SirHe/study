const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rule: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }],
  },

  mode: 'development',
}
