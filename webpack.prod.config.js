const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        blockduck: path.resolve(__dirname, "src"),
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "blockduck",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new ProvidePlugin({
            React: 'react'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
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
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader"},
                ]
            },
        ]
    }
}
