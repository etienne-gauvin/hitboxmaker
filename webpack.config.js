const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/main.ts'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build')
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }, {
        test: /\.(png|jpe?g|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },

  externals: {
  }
};
