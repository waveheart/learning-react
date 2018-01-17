var webpack = require('webpack')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack/hot/only-dev-server',	
		'react-hot-loader/patch',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js' 
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
                        	presets: ["es2015", "react"]
                    	}
					},
					{
						loader: 'react-hot-loader/webpack',
					}
				]
			},
			{
				test: /(\.less|\.css)$/,
				exclude:/node_modules/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader',
						options: { modules: true }
					},
					{
						loader: 'less-loader'
					}	
				]
			}	
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/index.tmpl.html",
			inject: 'body',
			filename: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}