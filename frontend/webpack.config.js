const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
                patterns: [
                    {from: "./src/templates", to: "templates"},
                    {from: "./src/static/images", to: "images"},
                    {from: "./node_modules/admin-lte/plugins/fontawesome-free/webfonts", to: "webfonts"},
                    {from: "./node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css", to: "css"},
                    {from: "./node_modules/admin-lte/dist/css/adminlte.min.css", to: "css"},
                    {from: "./node_modules/admin-lte/plugins/jquery/jquery.min.js", to: "js"},
                    {from: "./node_modules/admin-lte/dist/js/adminlte.min.js", to: "js"},
                    {from: "./node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css", to: "css"},
                    {from: "./node_modules/admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css", to: "css"},
                    {from: "./node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js", to: "js"},
                    {from: "./node_modules/admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js", to: "js"},
                    {from: "./node_modules/admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.min.js", to: "js"},
                ],
            }
        ),
    ],
};