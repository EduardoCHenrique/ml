const path = require('path')
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin')



module.exports = {
  context: __dirname + "/",  
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets/'),
      storybook: path.resolve(__dirname, '.storybook'),
      joi: 'joi-browser'
    }
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        loader: 'external-svg-sprite-loader',
        test: /\.svg$/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["src/styles/colors",]
          }
        }]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  plugins: [
    new SvgStorePlugin(),
  ]
}
