const path = require('path');
const webpack = require('webpack');

const debug = process.env[ 'DEBUG' ] || 'N';

const plugins = [
	new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
	new webpack.optimize.CommonsChunkPlugin({ children: true, async: true, minChunks: 5 }),
	new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ko|en/)
];

debug.match(/N/) && plugins.push(new webpack.optimize.UglifyJsPlugin({
	compress: { warnings: false },
	mangle: true
}));

module.exports = {
	entry: {
		app: [ 'es6-promise', 'whatwg-fetch', 'raf/polyfill', 'babel-polyfill', 'custom-event-polyfill', './src/index.js' ],
	},

	output: {
		path: path.resolve(__dirname, './dist/js/'),
		filename: 'app.js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/js/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|build)/,
				loader: 'babel-loader',
				options: {
					presets: [ 'es2015', 'react', 'stage-2' ],
					cacheDirectory: true
				}
			}
		]
	},

	resolve: {
		modules: [
			path.join(__dirname, 'src'),
			'node_modules'
		]
	},

	plugins: plugins,

	node: {
		fs: 'empty'
	}
};