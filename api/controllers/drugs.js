const modelDrugs = require('../models/drugs');

async function getDrugsByLabel(req, res, next) {
    const label = req.params.label
    const results = await modelDrugs.getDrugsByLabel(label)
    return res.status(200).json(results)
}

async function getDrugsById(req, res, next) {
    const id = req.params.id
    const results = await modelDrugs.getDrugsById(id)
    return res.status(200).json(results)
}

module.exports = {
    getDrugsById,
	getDrugsByLabel,
};