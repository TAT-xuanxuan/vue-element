const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const isDev = process.env.NODE_ENV === "development"

const config = {
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, "dist")
    },
    mode: "none",
    stats: 'errors-only', //只打印错误信息
    resolve: {
        extensions: ['.js', '.html', '.json', '.css', '.less', '.vue'],
        // 目录映射
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '#': __dirname,
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(css|less)(\?.*)?$/,
                use: [
                    "style-loader",
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jp?g|png|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name: "static/images/[name].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name: "static/fonts/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),

        })
    ]
}
console.log(path.resolve(__dirname, 'index.html'))
// if (isDev) {
//     config.devServer = {
//         port: "8080",
//         host: "0.0.0.0",
//         overLay: {
//             erros: true
//         }
//     }
// }


module.exports = config