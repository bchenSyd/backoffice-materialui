var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

var env = process.env.NODE_ENV

var config = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // poly-fill with 'fetch'
    new webpack.ProvidePlugin({
      //'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'jQuery': 'jquery',
      _:'lodash'
    }),
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // extract all css into a separate file
    new ExtractTextPlugin('style.css'),
    // replace all modules' if(process.env.NODE_ENV === 'production')
    // with if (undefined|'production' === 'production')
    // because the code is running on browser, not node.js
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
    // Moves files
    new CopyWebpackPlugin([
      {from: 'index.html'},
      {from:'assets/css/font-icons', to:'font-icons'}
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'react-hot','babel', 'eslint' ],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        //bootstrap requires this
        test: /\.((woff2?)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?)$/,
        loader: 'url?limit=10000'
      },
      {
        //bootstrap requires this
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file'
      },
      {
        //bootstrap requires this
        test: /\.svg?$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css!postcss!sass')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss!less")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss")
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file?name=[name].[ext]'
      }
      
    ]
  },
   postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      //  To resolve path of an @import rule
      postcssImport({
        addDependencyTo: webpack
      })
    ] 
  },
};


if(env=== 'production'){
  config.entry = './src/index'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
  config.plugins.push(new webpack.optimize.DedupePlugin())
  config.plugins.push(new webpack.NoErrorsPlugin())

}else{
  config = Object.assign(config,{
        devtool: 'source-map',
        debug:true, 
        entry: [
          'webpack-dev-server/client?http://localhost:8000',
          'webpack/hot/only-dev-server',
          './src/index'
        ]
  })
}
module.exports = config