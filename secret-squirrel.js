module.exports = {
	files: {
		allow: [
			'helper-generate-build-state-artifacts',
			'helper-install-puppeteer-deps',
			'helper-npm-install-peer-deps',
			'helper-npm-update',
			'helper-setup-heroku-cli',
			'helper-setup-s3-upload',
			'helper.example'
		],
		allowOverrides: []
	},
	strings: {
		deny: [],
		denyOverrides: []
	}
};
