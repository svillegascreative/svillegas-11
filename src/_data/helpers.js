module.exports = {
	siteUrl: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:3000' : 'https://svillegas.com',

	niceDate: function (date) {
		return date.toLocaleString("en-CA", { month: 'short', day: 'numeric', year: 'numeric'})
	}
}