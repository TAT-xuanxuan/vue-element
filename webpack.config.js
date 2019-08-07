const path = require("path");
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === "development"


const utils = (function() {

console.log(path.resolve(__dirname, "src/assets/css/vars.less"))
    function cssLoaders(options) {
        options = options || {};
        var cssLoader = {
            loader: 'css-loader',
            options: {}
        };

        function generateLoaders(loaderName, loaderOptions) {
            var loaders = [cssLoader];
            if (loaderName) {
                loaders.push({
                    loader: loaderName + '-loader',
                    options: Object.assign({}, loaderOptions, {
                        sourceMap: options.sourceMap
                    })
                })
            }
            if (options.extract) {
                return ExtractTextPlugin.extract({
                    use: loaders,
                    fallback: 'vue-style-loader'
                })
            } else {
                return ['vue-style-loader'].concat(loaders)
            }
        };
        return {
            css: generateLoaders(),
            less: generateLoaders('less').concat({

                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(__dirname, "src/assets/css/vars.less")
                }
            }),
            postcss: generateLoaders(),
            sass: generateLoaders('sass', { indentedSyntax: true }),
            scss: generateLoaders('sass'),
            stylus: generateLoaders('stylus'),
            styl: generateLoaders('stylus')
        }
    };

    function styleLoaders(options) {
        var output = [];
        var loaders = cssLoaders(options);
        for (var key in loaders) {
            var loader = loaders[key];
            output.push({
                test: new RegExp('\\.' + key + '$'),
                use: loader
            })
        }
        return output
    }
    return { cssLoaders, styleLoaders }
})()



const config = {
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, "dist"),
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
                loader: "vue-loader",
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: false,
                        extract: false
                    }),
                }
            },
            {
                // test: /\.(css|less)(\?.*)?$/,
                // use: [
                //     "style-loader",
                //     'css-loader',
                //     'less-loader',
                // ],
                //         
                test: /\.(css|less)(\?.*)?$/,
                use: ExtractTextPlugin.extract({
                  fallback: "vue-style-loader",
                  use: ['css-loader', 'less-loader']
                })
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
            },
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
        }), 
         new ExtractTextPlugin(`static/css/app.css`)
    ]
}
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