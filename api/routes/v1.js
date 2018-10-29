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

router.get('/drugs/label/:label', function(req, res, next) {
	var label = req.params.label
	db.getConnection().then((conn) => {
		conn.query('SELECT * from drugs where label like "%' + label.toUpperCase() + '%"', function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

router.get('/drugs/id/:id', function(req, res, next) {
	var id = req.params.id
	db.getConnection().then((conn) => {
		conn.query('SELECT * from drugs where id=' + id, function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

module.exports = router;
