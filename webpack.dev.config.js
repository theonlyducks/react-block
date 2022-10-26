const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        cluster: path.resolve(__dirname, "public")
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: [ ".js", ".jsx" ]
    },
    plugins: [
        new ProvidePlugin({
            React: 'react'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /.(js)[x]?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.css$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
        ]
    }
}
