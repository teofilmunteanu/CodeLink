const path = require('path')

module.exports = {
  entry: {
    frontend: './frontend/src/index.js',
  },
  output: {
    path: path.resolve('./frontend/static/frontend/'),
    filename: 'indexBundle.js',
    publicPath: 'static/frontend/',
  },
  devServer: {  
    inline: true,  
    port: 8000
  },
  optimization: {
    minimize: true,
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}