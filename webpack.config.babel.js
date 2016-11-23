import {resolve} from 'path';
import {
  DefinePlugin,
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
  optimize,
} from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';

const {
  UglifyJsPlugin,
} = optimize;

function config({dev = false} = {}) {
  if (dev) {
    process.env.BABEL_ENV = 'development';
  }

  return {
    devtool: dev ? 'eval-source-map' : 'hidden-source-map',
    entry: [
      ...(dev
        ? [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
          'react-hot-loader/patch',
        ]
        : []),
      'babel-polyfill',
      './src',
    ],
    output: {
      path: resolve(__dirname, 'docs'),
      filename: `bundle${dev ? '' : '.[chunkhash]'}.js`,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: resolve(__dirname, 'src'),
          loader: 'babel-loader',
          options: {
            cacheDirectory: dev,
          },
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
          ],
        },
      ],
    },
    plugins: [
      new CleanPlugin(['docs']),
      new CopyPlugin([{from: 'contents'}]),
      new HTMLPlugin({
        template: 'templates/index.ejs',
        inject: false,
      }),
      new ExtractTextPlugin({
        filename: 'public/style.css',
        allChunks: true,
      }),
      ...(dev
        ? [
          new HotModuleReplacementPlugin(),
        ]
        : [
          new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          // backward compatibility
          new LoaderOptionsPlugin({
            minimize: !dev,
            debug: dev,
          }),
          new UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
              warnings: false,
            },
          }),
        ]),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
}

export {
  config as default,
};
