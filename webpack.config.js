const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//用户配置
const userConfig = require("./config");



const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
console.log(isDev);
console.log(isPro);
console.log(isTest);

const config = {
    //入口文件配置
    entry: path.join(__dirname, "src/main.js"),
    //出口配置文件
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    // 模式,开发模式：development，生产模式：production
    // mode:'none',
    // 只打印错误日志
    stats: 'errors-only',
    //目录映射
    resolve: {
        extensions: ['.js', '.html', '.css', '.less', '.json', '.vue'],
        alias: {
            "vue$": 'vue/dist/vue.esm.js',
            '#': __dirname,
            "@": path.resolve(__dirname, 'src'),
        }
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, 'src/index.html'),
            title: userConfig.title,
        }),
        new VueLoaderPlugin(),

    ],
    // devServer配置
    devServer: {
        port: 8080,
        // color: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        overlay: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                        loader: 'vue-loader',
                        options: {
                            options: {
                                loaders: [{
                                        loader: 'style-loader',
                                    },
                                    {
                                        loader: 'css-loader',
                                        options: {
                                            importLoaders: 1,
                                        }
                                    },
                                    {
                                        loader: 'less-loader',
                                        options: { sourceMap: true, },
                                    },
                                ],
                            }
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            javascriptEnabled: true,
                            globalVars: {
                                'testcolor': 'red',
                            },
                            modifyVars: {
                                'primary-color': '#1DA57A'
                            }
                        }
                    },
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: path.resolve(__dirname, "src/assets/css/vars.less")
                        }
                    }

                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `static/images/[name].[ext]`,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `static/fonts/[name].[ext]`,
                }
            }
        ]
    }

}

module.exports = config;
