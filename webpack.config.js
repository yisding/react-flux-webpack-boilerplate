var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : [
    'webpack/hot/dev-server',
    './app/components/Application'
  ],
  output : {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader?harmony&insertPragma=React.DOM']},
      {test: /\.es6\.js$/, loader: 'babel-loader'},

      // compile and include less files
      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'},

      // allow less files to load urls pointing to font assets
      // @TODO: figure out why this is necessary and do it better
      {test: /\.(woff|ttf|eot|svg)$/, loader: 'file-loader' }
    ]
  },
  resolve : {
    extensions: ['', '.js', '.es6.js', '.jsx'],
    alias : {
      actions : __dirname + '/app/actions',
      constants : __dirname + '/app/constants',
      stores : __dirname + '/app/stores'
    }
  }
};
