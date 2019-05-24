const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, "dist")
    },
    mode: "none",
    module: {
        rules: [{
                test: /.vue$/,
                loader: "vue-loader"
            },
            {
                test: /.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}


module.exports = config