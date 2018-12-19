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

async function getRequestsStatDrug()  {
    var query = `SELECT d.label, COUNT(rpd.id_drug) as countRequest ` 
    query += `FROM drugs d `
    query += `INNER JOIN request_pharmacies_drugs rpd ON rpd.id_drug = d.id `
    query += `GROUP BY d.label`
    query += `ORDER BY countRequest DESC `
    query += `LIMIT 20;`
    const results = await pool.query(query)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

async function getRequestsStatPharma()  {
    var query = `SELECT p.label, COUNT(rpd.id_pharma) as countRequest ` 
    query += `FROM pharmacies p `
    query += `INNER JOIN request_pharmacies_drugs rpd ON rpd.id_drug = p.id `
    query += `GROUP BY p.label`
    query += `ORDER BY countRequest DESC `
    query += `LIMIT 20;`
    const results = await pool.query(query)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getRequests,
    getRequestsByDrug,
    getRequestsStatDrug,
    getRequestsStatPharma,
};