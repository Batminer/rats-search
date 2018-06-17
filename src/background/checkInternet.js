// https://stackoverflow.com/questions/15270902/check-for-internet-connectivity-in-nodejs
module.exports = function checkInternet(cb) {
	require('dns').lookup('google.com',function(err) {
		if (err && err.code == "ENOTFOUND") {
			cb(false);
		} else {
			cb(true);
		}
	})
}