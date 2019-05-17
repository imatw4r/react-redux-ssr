const path = require('path'); // helper module

module.exports = {
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