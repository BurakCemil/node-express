// eslint-disable-next-line no-undef
module.exports =  (api) => {
	api.cache(true)
	return {
		"presets": ["@babel/preset-env"],
		"plugins": ["@babel/plugin-proposal-object-rest-spread",
			"@babel/plugin-syntax-dynamic-import",
			"@babel/plugin-transform-runtime" 
		],
		"ignore": [
			"node_modules/",
			"babel.config.js",
			"dist/"
		]
	}
}


