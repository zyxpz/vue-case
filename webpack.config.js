const webpack = require('atool-build/lib/webpack');


module.exports = function (webpackConfig) {
	webpackConfig.plugins.some(function (plugin, i) {
		if (plugin instanceof webpack.optimize.CommonsChunkPlugin) {
			webpackConfig.plugins.splice(i, 1);

			return true;
		}
		return null;
	});


	webpackConfig.module.loaders.push({
		test: /\.vue?$/,
		loader: 'vue-loader',
	});

	webpackConfig.babel.plugins.push(
		['transform-vue-jsx']
	);

	webpackConfig.resolve.extensions.push('.vue');

	webpackConfig.resolve.alias = {
		'vue': 'vue/dist/vue.js'
	};

	webpackConfig.externals = {
		'vue': 'Vue',
	};

	return webpackConfig;
};