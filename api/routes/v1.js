var express = require('express');
const router = express.Router();

var db = require("../server");



router.get('/pharmacies', function(req, res, next) {
	db.getConnection().then((conn) => {
		conn.query('SELECT * from pharmacies', function (error, results, fields) {
			if (error) throw error;
			results.map(result => {
				result.coords = {
					longitude: result.longitude_pharmacies,
					latitude: result.latitude_pharmacies
				}
			}) 
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

router.get('/drugs/label/:label', function(req, res, next) {
	var label = req.params.label
	db.getConnection().then((conn) => {
		conn.query('SELECT * from drugs where label_drugs like "%' + label.toUpperCase() + '%"', function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

router.get('/drugs/id/:id', function(req, res, next) {
	var id = req.params.id
	db.getConnection().then((conn) => {
		conn.query('SELECT * from drugs where id_drugs=' + id, function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

router.get('/pharmacies/drugs/:id', function(req, res, next) {
	var id = req.params.id
	db.getConnection().then((conn) => {
		conn.query('SELECT id_pharmacies, label_pharmacies, longitude_pharmacies, latitude_pharmacies, city_pharmacies, cp_pharmacies, address_pharmacies, id_drugs, cid_drugs, label_drugs, form_drugs, way_drugs, marketing_drugs, company_drugs, release_date_drugs, quantity FROM pharmacies_drugs INNER JOIN pharmacies ON pharmacies_drugs.id_pharma = pharmacies.id_pharmacies INNER JOIN drugs ON pharmacies_drugs.id_drug = drugs.id_drugs where id_drug=' + id + ';', function (error, results, fields) {
			if (error) throw error;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			conn.release();
		});
	 })
});

module.exports = router;
