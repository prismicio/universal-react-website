import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
  entry: {
    js: './src/client/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

const server = {
  target: 'node',
  devtool: 'inline-source-map',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: './src/server/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

export default [client, server];
