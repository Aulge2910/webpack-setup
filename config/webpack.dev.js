const { generateKey } = require('crypto')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //读取的路径不用改
    entry :'./src/index.js',
    output:{
        //绝对路径要回退一下，在dev mode
       // path: path.join(__dirname,'../dist'),
       //可以写undefined，开发模式没有输出


        path: undefined,    
        filename:'static/js/index.js',
        clean: true,
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
            filename: "static/css/[name].css",
        }),


    ],        
    devServer: {
            host: "localhost",
            port:"3000",
            open:true,
        },
        mode:"development",
        module: {
        rules: [        
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                            postcssOptions: {
                                plugins: [
                                [
                                   autoprefixer
                                ],
                                ],
                            },
                            }
                        },
                        { 
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                //silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
                                //quietDeps: true // 禁用第三方依赖的警告
                                },
                            },
                        },
                    ]
                },
                {
                    test:/\.(png|jpeg|jpg|gif|webp|svg)$/,
                    
                             
                    type: 'asset/resource',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4*1024,
                        },
                    },
                    generator: {
                        filename: "static/images/[name][hash:10][ext][query]",
                    },
                 
                },
                
                {
                    test: /\.(ttf|woff2?)$/,
                    type: "asset/resource",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10*1024,
                        },
                    },
                    generator: {
                        filename: 'static/media/[hash:10][ext][query]'
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
                ,{
                    test: /\.html$/i,
                    loader: 'html-loader'
                }
        ]
    }
}