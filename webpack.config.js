const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {

    "mode": env,

    "entry": {
        "main": path.resolve(__dirname, "src/main/index.ts"),
    },

    "output": {
        "path": path.join(__dirname, "dist"),
        "filename": "main.js",
    },

    "module": {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
            },
        ],
    },

    "resolve": {
        "extensions": [".tsx", ".ts", ".js"],
        "modules": [
            path.join(__dirname, "src/main"),
            "node_modules",
        ],
    },

    "plugins": [
        new HtmlWebpackPlugin({
            "title": 'hello react',
            "template": path.resolve(__dirname, 'index.html'),
            "filename": 'index.html',
        }),
    ],

    "devServer": {
        "port": 8080,
        "hot": true
    },

}
