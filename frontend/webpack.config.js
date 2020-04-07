const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	// depois de instalar o webpack dev server
	devServer: {
		contentBase: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			// depois de instalar o style-loader e o css-loader
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]	
			},
			// depois de instalar o file-loader
			{
				test: /\.*\.(gif|png|jpe?g)$/i,
				use: {
					loader: 'file-loader'
				}	
			},
		]
	}
};