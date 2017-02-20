var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = function(){
	return {
		devtool: 'source-map',
		entry: [
			'react-hot-loader/patch',
			'./index.js'
		],
		output: {
			filename: 'dist/bundle.js'
		},
		resolve: {
			modules: [path.resolve(__dirname, "src"), "node_modules"]
		},
		module: {
			rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {compact: false}
			}],
		},
		plugins: [
			new webpack.ProvidePlugin({
				"React": "react",
			}),
			new HtmlPlugin({
				template: './index.ejs'
			})
		]
	}
}
