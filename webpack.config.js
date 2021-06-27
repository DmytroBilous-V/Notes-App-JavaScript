const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    }
}
