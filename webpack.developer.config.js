const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const LoadablePlugin = require('@loadable/webpack-plugin')

const exclude =
  /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/

const babelLoaderTest = /.(js|ts|tsx)$/

const aliases = [
  { name: 'components', path: 'src/common/components/' },
  { name: 'api', path: 'src/common/api/' },
  { name: 'functions', path: 'src/common/functions/' },
  { name: 'actions', path: 'src/common/actions/' },
  { name: 'reducers', path: 'src/common/reducers/' },
  { name: 'routes', path: 'src/common/routes/' },
  { name: 'selectors', path: 'src/common/selectors/' },
  { name: 'hooks', path: 'src/common/hooks/' },
  { name: 'common-constants', path: 'src/common/common-constants/' },
  { name: 'generated-graphql', path: 'src/generated/' },
  { name: 'common', path: 'src/common/' },
  { name: 'server', path: 'src/server/' },
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: ['./src/client/entry/index.tsx'],
  devtool: 'inline-source-map',
  output: {
    filename: 'client.js',
    chunkFilename: '[name].client.js',
    path: path.resolve(__dirname, 'build/client/js'),
  },
  module: {
    rules: [
      {
        test: babelLoaderTest,
        exclude,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  // Определение современных браузеров в src/server/parseUserAgent.ts:21
                  browsers: [
                    'Chrome > 76',
                    'Safari > 11',
                    // 'YaBrowser > 19', // не нашел в списках либ
                  ],
                },
                debug: false,
                modules: false,
              },
            ],
            '@babel/typescript',
          ],
          plugins: [
            '@babel/transform-react-jsx',
            'transform-class-properties',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/syntax-dynamic-import',
            '@babel/plugin-proposal-optional-chaining',
            '@loadable/babel-plugin',
            'react-hot-loader/babel',
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html', 'index.html'),
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      ...aliases.reduce(
        (acc, { name, path: valuePath }) => ({
          ...acc,
          [name]: path.resolve(__dirname, valuePath),
        }),
        {}
      ),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}
