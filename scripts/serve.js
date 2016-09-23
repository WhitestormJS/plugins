import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import opn from 'opn';
import webpackConfig from '../webpack.config.babel';

const config = webpackConfig({dev: true});
const host = 'localhost';
const port = 3000;

(new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
}))
.listen(port, host, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console

    return;
  }

  const url = `http://${host}:${port}/`;

  console.log(`Listening at ${url}`); // eslint-disable-line no-console
  opn(url);
});
