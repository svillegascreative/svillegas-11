module.exports = function(config) {
	//config.addPassthroughCopy("img/");

	return {
		dir: {
			input: "src",
			includes: "_layouts",
			output: "site"
		}
	}
}