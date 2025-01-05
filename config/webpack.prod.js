const { generateKey } = require('crypto')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry :'./src/index.js',
    output:{
        path: path.join(__dirname,'../dist'),
        clean: true,
        filename:'static/js/index.js'
    },

    plugins: [
        new ESLintWebpackPlugin ( {
            //check which file
            context: path.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../public/index.html"),
            //based on this template to produce the html 
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/index.css"
        }),


    ],        
 
        mode:"production",
        module: {   
        rules: [        
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', {
                        loader : "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                ],
                            },
                        },
                    }],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader',
                        {
                        loader : "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                ],
                            },
                        },
                        },
                        'sass-loader'],
                },
               {
                    test:/\.(png|jpeg|jpg|gif|webp|svg)$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4*1024,
                        },
                    },
                    generator: {
                        filename: "static/images/[hash:10][ext][query]",
                    }
                },
                {
                    test: /\.(ttf|woff2?)$/,
                    type: "asset/resource",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024,
                        },
                    },
                    generator: {
                        filename: "static/media/[hash:10][ext][query]"
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader'
                }
        ]
    }
}