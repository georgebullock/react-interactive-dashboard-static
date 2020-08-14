// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: { main: './src/index.tsx' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'eval-source-map',
	stats: 'errors-warnings',
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
							{
								plugins: ['@babel/plugin-proposal-class-properties']
							}
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1, modules: true }
					},
					'sass-loader'
				],
				include: /\.module\.scss$/
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /\.module\.scss$/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './public/index.html',
			favicon: './public/favicon.ico'
		})
	],
	devServer: {
		historyApiFallback: true
	}
};
