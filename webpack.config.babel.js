import {join} from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const {
  DefinePlugin,
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
  optimize: {
    DedupePlugin,
    UglifyJsPlugin,
  },
} = webpack;

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: 'templates/index.ejs',
  inject: false,
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['app']);

function config({dev = false} = {}) {
  process.env.BABEL_ENV = dev ? 'web-development' : 'web';

  return {
    devtool: dev ? 'eval-source-map' : 'hidden-source-map',
    entry: [
      ...(dev
        ? [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
        ]
        : []),
      'babel-polyfill',
      './src/index.jsx',
    ],
    output: {
      path: join(__dirname, 'app'),
      filename: 'bundle.[chunkhash].js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: join(__dirname, 'src'),
          loaders: [...(dev ? ['react-hot'] : []), 'babel'],
        },
      ],
    },
    plugins: dev
      ? [
        cleanWebpackPlugin,
        htmlWebpackPlugin,
        new HotModuleReplacementPlugin(),
      ]
      : [
        cleanWebpackPlugin,
        htmlWebpackPlugin,
        new DedupePlugin(),
        new DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new LoaderOptionsPlugin({
          minimize: !dev,
          debug: dev,
        }),
        new UglifyJsPlugin({
          mangle: true,
          compress: {
            warnings: false,
          },
        }),
      ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  };
}

export {
  config as default,
};
