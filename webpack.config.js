var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: './front/App.js',
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
	  contentBase: path.join(__dirname, "public"),
	  port: 9000,
		hot: true
	}
}
