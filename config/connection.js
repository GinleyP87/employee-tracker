 const mysql = require('mysql2')

 const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '$p33dF0rce',
    database: 'emp_track'
  });
  
  module.exports = db;