var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/build');
var APP_DIR = path.resolve(__dirname, 'client/');

var config = {
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: APP_DIR,
			loader: 'babel-loader',
			query: {compact: false}
/*            query:
            {
                presets:['es2015', 'react']
            }
*/
		},
		{ 
			test: /\.css$/, 
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						url: false
					}
				}
			]
		}],
	},
};

var topLevelFolderConfig = Object.assign({}, config, {
	entry: {
		App: APP_DIR + '/App.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var componentsLevelFolderConfig = Object.assign({}, config, {
	entry: {
		MyHeader: APP_DIR + '/components/MyHeader.jsx',
		Navbar: APP_DIR + '/components/Navbar.jsx',
		Main: APP_DIR + '/components/Main.jsx',
		Community: APP_DIR + '/components/Community.jsx',
		Profile: APP_DIR + '/components/Profile.jsx',
		Footer: APP_DIR + '/components/Footer.jsx',
		404: APP_DIR + '/components/404.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var accountsLevelFolderConfig = Object.assign({}, config, {
	entry: {
		LoginView: APP_DIR + '/components/account/LoginView.jsx',
		RegisterView: APP_DIR + '/components/account/RegisterView.jsx',
		accConfirm: APP_DIR + '/components/account/accConfirm.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var libLevelFolderConfig = Object.assign({}, config, {
	entry: {
		grabSession: APP_DIR + '/lib/grabSession.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

module.exports = [
	topLevelFolderConfig, componentsLevelFolderConfig, accountsLevelFolderConfig, libLevelFolderConfig,
];

