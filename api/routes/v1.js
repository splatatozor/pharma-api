const pharmaciesController = require('../controllers/pharmacies');
const drugsController = require('../controllers/drugs');
const express = require('express');
const router = express.Router();


router.get('/pharmacies', pharmaciesController.getPharmacies);

router.get('/drugs/label/:label', drugsController.getDrugsByLabel);

router.get('/drugs/id/:id', drugsController.getDrugsById);
	
router.get('/pharmacies/drugs/:id', pharmaciesController.getPharmaciesByDrug) 

module.exports = router;
