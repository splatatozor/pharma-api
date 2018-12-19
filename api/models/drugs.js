const pool = require("../database")

async function getDrugsByLabel(label)  {
    const results = await pool.query(`SELECT * from drugs where label like "%${label.toUpperCase()}%"`)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

async function getDrugsById(id)  {
    const results = await pool.query(`SELECT * from drugs where id=${id}`)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

async function getDrugsStatCompany()  {
    const results = await pool.query(`SELECT company, COUNT(company) as countCompany FROM drugs GROUP BY company ORDER BY countCompany DESC limit 20;`)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

async function getDrugsStatQuantity()  {
    var query = `SELECT d.label, SUM(pd.quantity) as sumQuantity ` 
    query += `FROM drugs d `
    query += `INNER JOIN pharmacies_drugs pd ON pd.id_drug = d.id `
    query += `GROUP BY d.label `
    query += `ORDER BY sumQuantity DESC  `
    query += `LIMIT 20;`
    const results = await pool.query(query)
    try {
        return results
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getDrugsById,
    getDrugsByLabel,
    getDrugsStatCompany,
    getDrugsStatQuantity
};