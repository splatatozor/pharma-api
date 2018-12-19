const modelPharmacies = require('../models/pharmacies');

async function getPharmacies(req, res, next) {
    const results = await modelPharmacies.getPharmacies()
    return res.status(200).json(results)
}

async function getPharmaciesByDrug(req, res, next) {
    var idDrug = req.params.id
    const results = await modelPharmacies.getPharmaciesByDrug(idDrug)
    return res.status(200).json(results)
}

async function getPharmaciesCountryStat(req, res, next) {
    var idDrug = req.params.id
    const results = await modelPharmacies.getPharmaciesCountryStat()
    return res.status(200).json(results)
}

async function getPharmaciesCityStat(req, res, next) {
    var idDrug = req.params.id
    const results = await modelPharmacies.getPharmaciesCityStat()
    return res.status(200).json(results)
}

module.exports = {
    getPharmacies,
    getPharmaciesByDrug,
    getPharmaciesCountryStat,
    getPharmaciesCityStat
};