const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    mode: "development",
    devtool: "inline-source-map",
    plugins: [new HtmlWebpackPlugin({
        title: 'htmlZip',
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html'
    })],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/}
        ]
    }
};