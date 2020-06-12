const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'xuni'
    },
    devServer: {
        port: 8080,
        contentBase: './www'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            strictMath: true,
                        },
                    },
                },
            ],
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}