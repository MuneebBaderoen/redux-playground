var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = function(){
	return {
		devtool: 'source-map',
		entry: [
		    'webpack-dev-server/client?http://localhost:3000',
    		'webpack/hot/only-dev-server',
			'react-hot-loader/patch',
			'./index.js'
		],
		output: {
			path: path.resolve('./dist'),
			filename: 'bundle.js'
		},
		resolve: {
			root: [path.resolve(__dirname, "src"), "node_modules"]
		},
		module: {
			loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: __dirname,
				query: {compact: false}
			}],
		},
		plugins: [
		    new webpack.HotModuleReplacementPlugin(),
			new webpack.ProvidePlugin({
				"React": "react",
			}),
			new HtmlPlugin({
				template: './index.ejs'
			})
		]
	}
}
