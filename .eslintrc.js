module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'jest-dom', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:jest-dom/recommended'
	],
	plugins: ['prettier', 'jest-dom'],
	rules: {
		'no-console': 'off',
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'space-before-function-paren': 'off',
		'@typescript-eslint/no-var-requires': 'off'
	},
	settings: {
		react: {
			pragma: 'react',
			version: 'detect'
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true
	},
	overrides: [
		{
			files: ['*.js'],
			parser: 'esprima',
			extends: ['eslint:recommended']
		}
	]
};
