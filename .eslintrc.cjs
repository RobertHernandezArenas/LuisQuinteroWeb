export default {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['vue'],
	extends: [
		'standard',
		'prettier',
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
