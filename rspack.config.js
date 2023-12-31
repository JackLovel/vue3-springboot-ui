const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	plugins: [
		new VueLoaderPlugin(),
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					experimentalInlineMatchResource: true
				}
			},
			{
				test: /\.svg/,
				type: "asset/resource"
			},
			{
				test: /\.scss$/,
				use: ["sass-loader"],
				type: "css",
			},
			{
				test: /\.png/,
				type: 'asset/inline',
			},
		]
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:39',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		historyApiFallback: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@api': path.resolve(__dirname, 'src/api/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@views': path.resolve(__dirname, 'src/views/'),
			'@router': path.resolve(__dirname, 'src/router/'),
			'@store': path.resolve(__dirname, 'src/store/')
			'@utils': path.resolve(__dirname, 'src/utils/')
		}
	}
};
module.exports = config;
