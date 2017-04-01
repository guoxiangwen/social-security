"use strict";
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const vendors = ['react', 'react-dom', 'antd', 'axios'];
module.exports = {
    devServer: {
        hot: true,
        contentBase: "./build",
        proxy: {
            '/sms-web/*': {
                target: 'http://172.17.122.124:9099',
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: "cheap-module-source-map", //生成sourcemap,便于开发调试
    //入口文件
    entry: {
        app: "./src/main.js",
        vendors: vendors //第三方库
    },
    //输入文件
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "./",
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[id].[hash].bundle.js"
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
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ],
                publicPath: "/build"
            })


        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {sourceMap: true, minimize: true}
                },
                    {
                        loader: 'less-loader',
                        options: {sourceMap: 'compressed'}
                    }
                ]
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: "url-loader",
            query: {
                limit: 100,
                name: 'imgs/[name].[hash].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        }),
        new ExtractTextPlugin({
            filename: "[name].[hash].css",
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.[hash].bundle.js'}),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.template.html',
            title: 'fuck',
            chunks: ['app', 'vendors'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
        // new WebpackBrowserPlugin(),
    ]
};