const path = require("path");
// import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
			{
        test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
			},
		],
	},
	devtool: false,
	resolve: {
		extensions: [".ts", ".js"],
	},
};
