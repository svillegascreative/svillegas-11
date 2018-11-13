module.exports = {

	niceDate: function (date) {
		return date.toLocaleString("en-CA", { month: 'short', day: 'numeric', year: 'numeric'})
	}
}