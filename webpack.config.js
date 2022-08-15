const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/index.tsx',
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {

                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
}

if (isProd) {
    config.optimization = {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
} else {
    config.devServer = {
        port: 9000,
        hot: true,
        open: true,
        compress: true,
    }
}

module.exports = config;