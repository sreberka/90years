let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        //app: './src/app.js'
        'js/main.min.js': './src/app.js',
        'css/main.css': './src/scss/main.scss'
    },
    output: {
        filename: '[name]',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
           },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              use: [{
                loader: "css-loader"
              }, {
                loader: "sass-loader"
              }],
              fallback: "style-loader"
            })
          }],
    },
    plugins: [
      new ExtractTextPlugin("[name]"),
    ],
    resolve: {
      extensions: [ '.js', '.jsx']
    },
    devtool: 'source-map',
}
