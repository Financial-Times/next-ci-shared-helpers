module.exports = {
	files: {
		allow: [
			'helper-generate-build-state-artifacts',
			'helper-configure-awscli',
			'helper-install-awscli',
			'helper-install-puppeteer-deps',
			'helper-npm-install-peer-deps',
			'helper-npm-store-auth-token',
			'helper-npm-update',
			'helper-check-service-ready',
			'helper-npm-version-and-publish-public',
			'helper-publish-github-pages',
			'helper-setup-heroku-cli',
			'helper-setup-s3-upload',
			'helper-upload-assets-to-s3',
			'helper.example'
		],
		allowOverrides: []
	},
	strings: {
		deny: [],
		denyOverrides: []
	}
};
