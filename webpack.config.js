const path = require('path');
const webpack = require('webpack');

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: 'production',
  entry: {
    jobs: './src/jobs/index.ts',
    oopsyraidsy: './src/oopsyraidsy/index.ts',
    radar: './src/radar/index.ts',
    raidboss: './src/raidboss/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "cactbot"),
      "cactbot": path.resolve(__dirname, "cactbot", "types"),
    },
    extensions: [".ts", ".js", ".json"],
  },
  externals: /^(cactbot)\/.*/,
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    chrome: '75',
                  },
                },
              ],
              ['@babel/preset-typescript'],
            ],
          },
        },
      },
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [new webpack.CleanPlugin()],
};
