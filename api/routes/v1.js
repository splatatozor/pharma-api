var express = require('express');
const router = express.Router();

var db = require("../server");



router.get('/pharmacies', function(req, res, next) {
	db.getConnection().then((conn) => {
		conn.query('SELECT * from pharmacies', function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

module.exports = router;
