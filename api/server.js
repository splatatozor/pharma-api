const mysql = require("mysql");


const pool  = mysql.createPool({
	host     : '172.17.0.2',
	port	 : '3306',
	user     : 'root',
	password : 'soleil',
	database : 'pharma'
  });
  
const getConnection = () => {
return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
        if (err) {
        reject(err);
        }
        else {
        resolve(connection);
        }
    });
});
}

module.exports = {
	getConnection,
  };

