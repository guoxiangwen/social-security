"use strict";
let webpack = require('webpack');
let path = require('path');
// let HtmlWebpackPlugin = require('html-webpack-plugin');
// let ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const vendors = ['react', 'react-dom'];
module.exports = {
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: 3001,
        hot: true,
        hotOnly: true,
        inline: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        contentBase: "./src",
        compress: true,
        historyApiFallback: true,
        clientLogLevel: "none",
        proxy: {
            '/renshemobile/*': {
                target: 'http://118.123.227.15:8082',
                // target: 'http://172.17.122.40:8082',

                // changeOrigin: true,
                // secure: false
            }
        }
    },
    entry: {
        app: "./src/main.js", //
        vendors: vendors //第三方库
    }, //入口文件
    output: {
        path: path.join(__dirname, "src"),
        publicPath: "",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"] //resolve.extensions 用于指明程序自动补全识别哪些后缀,
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        rules: [{
            test: /\.js|jsx$/,
            loader: "babel-loader",
            exclude: "/node_modules/",
            options: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            exclude: "/node_modules/",
            // loader: ExtractTextPlugin.extract("css-loader")
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]

        }, {
            test: /\.less$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "less-loader" },
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: "url-loader",
            query: {
                limit: 10000
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors'],
            filename: "vendors.bundle.js",
            minChunks: Infinity
        }),
    ]
};