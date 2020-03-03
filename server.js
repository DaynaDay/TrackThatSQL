var mysql = require("mysql");
const inquirer = require('inquirer');
require('console.table');


const connection = require('./config/connection');


var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

 
  user: "root",

  
  password: "KnightlyNews93",
  database: "workerBee_db"
});


const { viewQuestions, addQuestions, updateQuestions } = require('./');





