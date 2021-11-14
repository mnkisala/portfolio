import path from 'path'
import { URL } from 'url'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = new URL('.', import.meta.url).pathname

export default {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.mjs', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ]
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: new URL('./dist', import.meta.url).pathname,
    },
    compress: true,
    port: 9000,
  },
}