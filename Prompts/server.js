var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: ""
});


connection.connect(function(err) {
  if (err) throw err;
  
  start();
});

function start(){
  inquirer
    .prompt ({
name: "view",
message:"Which would you like to view?",
type:"list",
choices:["Department", "Role","Employees"]
    })
    
}

function addTo(){
  inquirer
    .prompt ({
name: "add",
message:"Which would you like to add to?",
type:"list",
choices:["Department", "Role","Employees"]
    })
  
    .then(function(addResponse) {
      // based on their answer, either call the bid or the post functions
      if (addResponse === "Department") {
        newDepartment();
      }
      else if(addResponse === "role") {
        newRole();
      } 
      else if (addResponse === "employees") {
        newEmployee();
      }
      else {
        connection.end();
    };

},


function update() {
  inquirer
    .prompt ({
name: "update",
message:"Which would you like to update?",
type:"list",
choices:["Department", "Role","Employees"]
    })

    .then(function(updateResponse) {
      // based on their answer, either call the bid or the post functions
      if (updateResponse === "Department") {
        newDepartment();
      }
      else if(addResponse === "role") {
        newRole();
      } 
      else if (addResponse === "employees") {
        newEmployee();
      }
      else {
        connection.end();
    };
    
}

