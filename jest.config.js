module.exports = {
	roots: ['<rootDir>/src'],
	moduleDirectories: ['node_modules', 'src'],
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'\\.scss$': require.resolve('./test/style-mock.js'),
		'\\.module\\.scss$': 'identity-obj-proxy'
	}
};
