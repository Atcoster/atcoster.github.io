const WEBPACK             = require('webpack');
const PATH                = require('path');
const EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const STYLE_LINT_PLUGIN   = require('stylelint-webpack-plugin');

module.exports = {
	devtool: 'eval',
	target: 'web',
	entry: './src/index.jsx',
	output: {
		path: PATH.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader', 'eslint-loader'],
				include: PATH.join(__dirname, 'src'),
				exclude: [/(node_modules\/public)/]
			},
			{
				test: /\.scss$/,
				use: EXTRACT_TEXT_PLUGIN.extract({
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						},
					]
				})
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/i,
				use: [
					'file-loader',
						{
						loader: 'image-webpack-loader'
					},
				],
			}
		]
	},
	plugins: [
		new HTML_WEBPACK_PLUGIN({
			title: 'Portfolio',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './index.html'
		}),
		new EXTRACT_TEXT_PLUGIN({
			filename: 'main.css'
		}),
		new STYLE_LINT_PLUGIN({
			options: {
				configFile: '.stylelintrc',
				context: 'scss/main.scss',
				syntax: 'scss'
			}
		}),
	]
};
