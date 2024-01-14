const DotenvWebpackPlugin = require("dotenv-webpack");
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
	  	exclude: path.resolve(__dirname, "src"),
        use: ['style-loader', 'css-loader', 'postcss'],
      }
    ]
  },
  devServer: {
    static: {
			directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: {
      disableDotRule: true
    },
    compress: true,
    port: 3000,
    hot: false,
  },
  plugins: [
    new DotenvWebpackPlugin(),
  ],
}


