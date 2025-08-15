const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),

	devServer: {
		open: true,
		port: 8080,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				use: [{ loader: "file-loader" }],
			},
		],
	},
};
