var path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json"
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()],
  externals: {
    react: "React",
    redux: "Redux",
    axios: "axios",
    "react-dom": "ReactDOM",
    "react-redux": "React-Redux",
    immutable: "immutable",
    "@material-ui/core": {
      root: "@material-ui/core",
      amd: "@material-ui/core",
      commonjs: "@material-ui/core",
      commonjs2: "@material-ui/core"
    }
  }
};
