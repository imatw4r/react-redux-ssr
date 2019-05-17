const path = require('path'); // helper module
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');


const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, not browser
  target: 'node',

  externals: [nodeExternals()], // do not bundle any libs to output file

  // Point to root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') // __dirname - current directory
  }
};

module.exports = merge(baseConfig, config);