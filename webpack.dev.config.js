const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.ts"),

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
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: [{ loader: "file-loader" }],
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
};
