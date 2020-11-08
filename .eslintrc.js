module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier/react'
	],
	plugins: ['prettier', 'jest-dom'],
	rules: {
		'no-console': 'off',
		'react/react-in-jsx-scope': 'off'
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*tsx'],
			parser: '@typescript-eslint/parser',
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
				'prettier/@typescript-eslint'
			],
			plugins: ['@typescript-eslint']
		}
	],
	settings: {
		react: {
			pragma: 'react',
			version: 'detect'
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	}
};
