const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FilemanagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ],
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
                type: 'asset/resource' 
            },
            { 
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
                type: 'asset/inline' 
            },
        ],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.join(__dirname, 'src', 'assets', 'images'),
                to: 'assets/images',
                globOptions: {
                  ignore: ['*.DS_Store'],
                },
                noErrorOnMissing: true,
              },
            ],
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),

        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'src', 'pets.html'),
        //     filename: 'pets.html',
        // }),

        new FilemanagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],

    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },

    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
};