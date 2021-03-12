const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    jobs: "./src/jobs/index.ts",
    oopsyraidsy: "./src/oopsyraidsy/index.ts",
    radar: "./src/radar/index.ts",
    raidboss: "./src/raidboss/index.ts"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    Conditions: "Conditions",
    ContentType: "ContentType",
    NetRegexes: "NetRegexes",
    Options: "Options",
    Outputs: "Outputs",
    Regexes: "Regexes",
    Responses: "Responses",
    Util: "Util",
    ZoneId: "ZoneId",
    ZoneInfo: "ZoneInfo",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
