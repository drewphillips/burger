// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "drew",
    password: "password1",
    database: "burger_db"
  })

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
// Export connection for our ORM to use.
module.exports = connection;