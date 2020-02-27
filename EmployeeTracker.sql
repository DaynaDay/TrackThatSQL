
DROP DATABASE IF EXISTS workerBee_db;
CREATE DATABASE workerBee_db;

USE workerBee_db;

CREATE TABLE department (
 id INT PRIMARY KEY,
 nameFull VARCHAR(30)
);

INSERT INTO department (nameFull)
VALUES ();



CREATE TABLE roles (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT 

);

CREATE TABLE employee (

  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL
);



  