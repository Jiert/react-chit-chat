var path = require('path');

module.exports = {
  entry: './scripts/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: path.join(__dirname, 'scripts'),
        loader: 'babel-loader' 
      }
    ]
  }
};