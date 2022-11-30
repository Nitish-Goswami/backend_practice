const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "ni30code",
    password: "Ni30@1234",
    database: "ni30_testdb",
  })

module.exports = connection;