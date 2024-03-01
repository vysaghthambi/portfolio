const config = {
	branches: ["main"],
	plugins: [
		["@semantic-release/commit-analyzer", { preset: "conventionalcommits" }],
		["@semantic-release/release-notes-generator", { preset: "conventionalcommits" }],
		[
			"@semantic-release/changelog",
			{
				changelogTitle:
					"# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.",
			},
		],
		"@semantic-release/git",
	],
};

module.exports = config;
