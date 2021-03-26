const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
        new GenerateSW({
            swDest: path.join(__dirname, "service-worker.js"),
            skipWaiting: true,
            clientsClaim: true
        }),
        new WebpackPwaManifest({
            filename: "manifest.json",
            name: 'PWA sandbox',
            short_name: 'PWA sandbox',
            description: 'This is a test app',
            display: "standalone",
            start_url: "index.html",
            background_color: '#ffffff'
        })
    ],

    "devServer": {
        "port": 8080,
        "hot": true
    },

}
