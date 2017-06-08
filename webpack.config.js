var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: './src/main.ts',
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },
    
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            use: "html-loader"
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
            use: 'file-loader?name=assets/[name].[ext]'
        }, {
            test: /\.less$/,
            include: path.join(process.cwd(), 'src', 'app'),
            use: ['to-string-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.less$/,
            include: path.join(process.cwd(), 'src', 'assets', 'less'),
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'src')
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor' ,'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ExtractTextPlugin("styles.css")
        
    ],

    stats: {
        colors: true,
        reasons: true
    },

    devServer: {
        historyApiFallback: true,
        stats: {
            colors: true,
            reasons: true
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};