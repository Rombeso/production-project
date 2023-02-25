import webpack, {WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import {ReactRefreshWebpackPlugin} from 'react-refresh-webpack-plugin';


export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new ReactRefreshWebpackPlugin(),



    ]
}