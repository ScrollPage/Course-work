module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["@typescript-eslint", "react", "prettier", "simple-import-sort"],
	extends: [
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
		"prettier/@typescript-eslint",
		"prettier/react",
		"nextjs"
	],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
		"import/extensions": "off",
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
		"prettier/prettier": "error",
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"react/no-unescaped-entities": "off",
		"jsx-a11y/accessible-emoji": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		useTabs: false,
		"simple-import-sort/sort": "error",
	},
	settings: {
		"import/resolver": {
			"babel-module": {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				paths: ["src"],
			},
		},
	},
};