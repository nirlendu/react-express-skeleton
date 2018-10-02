/**
 * Copyright - Panally Internet
 */

const Webpack = require('webpack');
const HappyPack = require('happypack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

process.noDeprecation = true;

module.exports = {
	entry: {
		'index': path.resolve('app/pages/index/client.js')
	},
	output: {
		path: path.resolve('../assets/static/js'),
		filename: '[name].[chunkhash].js',
	},
	optimization: {
       splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					name: "common",
					chunks: "initial",
					enforce: true
				}
			}
       },
       runtimeChunk: false,
       concatenateModules: true,
    },
	performance: { 
		hints: false 
	},
	plugins: [
		new Webpack.NoEmitOnErrorsPlugin(),
		new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new HappyPack({
			loaders: [{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}],
			threads: 4
		}),
		new ManifestPlugin({
			fileName : '../../../react-app/manifest.json'
		})
	],
	target: 'web',
	module: {
		rules: [
			{
				test: /.js?$/,
				loader: 'happypack/loader',
				query: {
					cacheDirectory: true,
					plugins: [
						'@babel/plugin-transform-runtime',
					],
					presets: ['@babel/preset-react']
				},
				exclude: [/node_modules/],
			},
			{
				test: /\.js$/,
				exclude: /node_modules\/(?!(stardust))/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						'@babel/plugin-transform-runtime',
					],
					presets: ['@babel/preset-react'],
				},
		    },
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						'@babel/plugin-transform-runtime',
					],
					presets: ['@babel/preset-react']
				},
				exclude: [/node_modules/],
			},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{ 
				test: /\.json$/, 
				loader: 'json-loader' 
			},
		    {
		        test: /\.css$/,
        		use: [ 'style-loader', 'css-loader' ]
		    }
		],
	},
	resolve: {
		extensions: ['.Webpack.js', '.web.js', '.js', '.jsx'],
		modules: ['node_modules', path.resolve(__dirname, 'app')],
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
