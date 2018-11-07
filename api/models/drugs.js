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

module.exports = {
    getDrugsById,
	getDrugsByLabel,
};