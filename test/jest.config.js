module.exports = {
	verbose: true,
	bail: true,
	coverageDirectory: 'output/coverage/jest',
	globalSetup: './bootstrap.js',
	globalTeardown: './teardown.js'
};
