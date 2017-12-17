var mysql = require('mysql2');

// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'kagaya'
// };

var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

// mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
module.exports = connection;