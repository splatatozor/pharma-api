const pharmaciesController = require('../controllers/pharmacies');
const drugsController = require('../controllers/drugs');
const requestController = require('../controllers/requests')
const routerController = require('../controllers/router');
const express = require('express');
const router = express.Router();


router.get('/healthz', routerController.healthz);

router.get('/pharmacies', pharmaciesController.getPharmacies);

router.get('/pharmacies/drugs/:id', pharmaciesController.getPharmaciesByDrug) 

router.get('/pharmacies/stat/country', pharmaciesController.getPharmaciesCountryStat);

router.get('/pharmacies/stat/city', pharmaciesController.getPharmaciesCityStat);

router.get('/drugs/label/:label', drugsController.getDrugsByLabel);

router.get('/drugs/id/:id', drugsController.getDrugsById);

router.get('/drugs/stat/company', drugsController.getDrugsStatCompany);

router.get('/drugs/stat/quantity', drugsController.getDrugsStatQuantity);

router.get('/request', requestController.getRequests);

router.get('/request/id/:id', requestController.getRequestsByDrug);

router.get('/request/stat/request/drug', requestController.getRequestsStatDrug);

router.get('/request/stat/request/pharma', requestController.getRequestsStatPharma);

module.exports = router;
