import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildPaths} from "./types/config";

export function buildPlugins({html}: BuildPaths): webpack.WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: html }),
    ]
}