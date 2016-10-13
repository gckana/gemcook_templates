let webpack = require('webpack');
let path    = require('path');

let PATHS = {
  src: path.join(__dirname, 'src'),
  www: path.join(__dirname, 'www')
};

module.exports = {
  entry: [
    `${PATHS.src}/App.jsx`
  ],
  output: {
    path: PATHS.www,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jqeury',
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  devServer: {
    contentBase: PATHS.www,
    port: 5555,
    inline: true,
    colors: true
  },
  devtool: 'inline-source-map',
  // Loader
  module: {
    noParse: [
      /aws\-sdk/,
    ],
    loaders: [
      {
        test: [
          /\.js$/,
          /\.jsx$/
        ],
        loaders: [
          'babel'
        ]
      },
      {
        test: [
          /\.scss$/,
        ],
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      // CSS & Bootstrap & Materialize
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  }
};
