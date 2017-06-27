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

var miscLevelFolderConfig = Object.assign({}, config, {
	entry: {
		404: APP_DIR + '/components/misc/404.jsx',
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

var profileLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Profile: APP_DIR + '/components/profile/Profile.jsx',
		MyProfile: APP_DIR + '/components/profile/MyProfile.jsx',
		EditProfile: APP_DIR + '/components/profile/EditProfile.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var communityLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Profile: APP_DIR + '/components/community/Community.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var navLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Navbar: APP_DIR + '/components/nav/Navbar.jsx',
		Footer: APP_DIR + '/components/nav/Footer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var homeLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Home: APP_DIR + '/components/home/Home.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

module.exports = [
	topLevelFolderConfig, miscLevelFolderConfig, accountsLevelFolderConfig, libLevelFolderConfig, navLevelFolderConfig, profileLevelFolderConfig, communityLevelFolderConfig, homeLevelFolderConfig
];

