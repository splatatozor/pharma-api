const pool = require("../database")

async function getPharmacies()  {
    const results = await pool.query('SELECT * from pharmacies')
    try {
        return results.map(result => {
            const { longitude, latitude, ...res } = result
            res.coords = { longitude, latitude }
            return res
        })
    } catch (error) {
        throw new Error(error)
    }
}

async function getPharmaciesByDrug(idDrug)  {
    var query = 'SELECT id_pharma, pharmacies.label AS label_pharma, id_drug, drugs.label AS label_drugs, quantity, address, cp, longitude, latitude '
    query += 'FROM pharmacies_drugs '
    query += 'INNER JOIN pharmacies ON pharmacies_drugs.id_pharma = pharmacies.id '
    query += `INNER JOIN drugs ON pharmacies_drugs.id_drug = drugs.id where pharmacies_drugs.id_drug=${idDrug}`
    const results = await pool.query(query)
    try {
        return results.map(result => {
            const { longitude, latitude, ...res } = result
            res.coords = { longitude, latitude }
            return res
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getPharmacies,
    getPharmaciesByDrug,
};