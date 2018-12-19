const modelRequests = require('../models/requests');

async function getRequests(req, res, next) {
    const results = await modelRequests.getRequests()
    return res.status(200).json(results)
}

async function getRequestsByDrug(req, res, next) {
    var idDrug = req.params.id
    const results = await modelRequests.getRequestsByDrug(idDrug)
    return res.status(200).json(results)
}

async function getRequestsStatDrug(req, res, next) {
    const results = await modelRequests.getRequestsStatDrug()
    return res.status(200).json(results)
}

async function getRequestsStatPharma(req, res, next) {
    const results = await modelRequests.getRequestsStatPharma()
    return res.status(200).json(results)
}

module.exports = {
    getRequests,
    getRequestsByDrug,
    getRequestsStatDrug,
    getRequestsStatPharma
};