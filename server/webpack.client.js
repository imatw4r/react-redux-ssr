const path = require('path'); // helper module

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodeJS, not browser
  // target: 'node', // this is not needed anymore because we gonna target browser only

  // Point to root file of our server application
  entry: './src/client/index.js',

  // Tell webpack where to put generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // __dirname - current directory
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // apply babel only for file matching this re (only .js files)
        loader: 'babel-loader',
        exclude: /node_modules/, // do not run babel on node modules dir
        options: {
          presets: [
            'react', // handle jsx
            'stage-0', // handle async code
            ['env', { targets: { browsers: ['last 2 versions']}}] // bundle for last 2 versions of browsers
          ]
        }
      }
    ]
  }
};