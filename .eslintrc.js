module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["react-app", "react-app/jest", "airbnb-typescript/base"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "import", "simple-import-sort"],
	settings: {
		react: {
			version: "detect", // Automatically detect the react version
		},
	},
	rules: {
		"no-console": "off",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"sort-imports": "off",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": "off",
		"no-param-reassign": [
			"error",
			{
				props: true,
				ignorePropertyModificationsFor: ["fb", "request", "response"],
			},
		],
	},
};
