const pool = require("../database")

async function getRequests(label)  {
    const results = await pool.query(`SELECT * from request_pharmacies_drugs`)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

async function getRequestsByDrug(id)  {
    const results = await pool.query(`SELECT * from request_pharmacies_drugs where id_drug=${id}`)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getRequests,
	getRequestsByDrug,
};