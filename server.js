var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "KnightlyNews93",
  database: "workerBee_db"
});


connection.connect(function(err) {
  if (err) throw err;
  
  start();
});






