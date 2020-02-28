
DROP DATABASE IF EXISTS workerBee_db;
CREATE DATABASE workerBee_db;

USE workerBee_db;

DROP DATABASE IF EXISTS workerBee_db;
CREATE DATABASE workerBee_db;

USE workerBee_db;

CREATE TABLE department (
 id INT PRIMARY KEY,
 name VARCHAR(30)
);

INSERT INTO department (id,name)
VALUES (280,"Cosmetics");

INSERT INTO department (id, name)
VALUES (911,"Building Services");

INSERT INTO department (id, name)
VALUES (567,"Young Contemporary");

INSERT INTO department (id, name)
VALUES (609,"Childrens");



CREATE TABLE roles (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT 
);

INSERT INTO roles (id,title, salary, department_id)
VALUES (1,"Make Up Artist", 34000, 280);

INSERT INTO roles (id,title, salary, department_id)
VALUES (2,"Personal Stylist", 50000, 567);

INSERT INTO roles (id,title, salary, department_id)
VALUES (3,"Con Artist", 70000, 609);

INSERT INTO roles (id,title, salary, department_id)
VALUES (4,"Cable Guy", 40000, 911);



CREATE TABLE employee (

  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (17,"Dean", "Winchester",11, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (25,"Klaus", "Hargrove", 69, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (56, "Mary Sue", "Trope", 1, 29);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11,"Larry", "the Cable Guy", 89, NULL);

  
