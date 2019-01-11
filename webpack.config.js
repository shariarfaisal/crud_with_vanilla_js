const path = require('path');
module.exports = {
  entry: './speech/main.js',
  mode: 'development',
  output:{
    path: path.resolve(__dirname,'speech'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: "./speech"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
