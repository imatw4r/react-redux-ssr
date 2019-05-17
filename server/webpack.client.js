const path = require('path'); // helper module
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');


const config = {
  // Point to root file of our server application
  entry: './src/client/index.js',

  // Tell webpack where to put generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // __dirname - current directory
  }
};

module.exports = merge(baseConfig, config);