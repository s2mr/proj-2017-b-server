var mysql = require('mysql2');

// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'kagaya'
// };

var pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports = pool;