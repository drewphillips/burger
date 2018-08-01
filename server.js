
var mysql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");
var app = express()
var PORT =8080

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "drew",
  password: "password1",
  database: "bamazon"
})

connection.connect(function (err) {
  if (err) throw err;

  console.log("connected!")
});
  
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
  });