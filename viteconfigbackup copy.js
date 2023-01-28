import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const TerserPlugin = require("terser-webpack-plugin");
const cssnano = require("cssnano");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;

export default defineConfig({
	plugins: [vue(), vueJsx()],
	// resolve: {
	// alias: {
	// "@": fileURLToPath(new URL("./src", import.meta.url)),
	// 	},
	// },

	base: "/",
	assetsDir: "static",
	outDir: "dist",
	configureWebpack: {
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						output: {
							comments: false,
						},
					},
				}),
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: [
							"default",
							{
								discardComments: {
									removeAll: true,
								},
							},
						],
					},
				}),
			],
			splitChunks: {
				chunks: "all",
			},
		},
		resolve: {
			alias: {
				vue: "vue/dist/vue.esm.js",
			},
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	},
	chainWebpack: config => {
		config.module
			.rule("images")
			.use("url-loader")
			.loader("url-loader")
			.tap(options => {
				options.limit = 8192;
				return options;
			});
		config.plugin("imagemin-webp").use(ImageminWebpWebpackPlugin, [
			{
				config: [
					{
						test: /\.(jpe?g|png)/,
						options: {
							quality: 75,
						},
					},
				],
			},
		]);
		config.plugin("imagemin").use(ImageminWebpackPlugin, [
			{
				test: /\.(jpe?g|png|gif|svg)/,
			},
		]);
	},
});
