var path = require('path');
var VL = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        kaishi: './lib/enter.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        // options:{//启用css模块化mint的样式不能用
                        //     modules:true,

                        // }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /\.(png|gif|svg|jpg|bmp|ttf)$/,
                use: [
                    'url-loader'
                ]
            },
        ]
    },
    mode: 'development',
    plugins: [
        new VL()
    ]

}