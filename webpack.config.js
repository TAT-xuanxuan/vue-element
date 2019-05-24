const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, "dist/js")
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}


module.exports = config