const mysql = require("mysql");
const util = require('util')

const pool  = mysql.createPool({
	host     : '163.172.167.185',
	port	 : '3306',
	user     : 'root',
	password : 'soleil',
	database : 'pharma'
  });
  
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) {
        connection.release()
    }
})

pool.query = util.promisify(pool.query)

module.exports = pool
