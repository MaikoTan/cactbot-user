const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    jobs: './src/jobs/index.ts',
    oopsyraidsy: './src/oopsyraidsy/index.ts',
    radar: './src/radar/index.ts',
    raidboss: './src/raidboss/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    NetRegexes: "NetRegexes",
    Options: "Options",
    Regexes: "Regexes",
    Responses: "Responses",
    ZoneId: "ZoneId",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
