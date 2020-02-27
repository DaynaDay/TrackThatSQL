
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
-- //////////////////////////////////////////////

CREATE TABLE roles (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT 
);

INSERT INTO roles (title, salary, department_id)
VALUES ("Make Up Artist", 340000, 280);

INSERT INTO roles (title, salary, department_id)
VALUES ("Personal Stylist", 340000, 567);

INSERT INTO roles (title, salary, department_id)
VALUES ("Con Artist", 340000, 609);

INSERT INTO roles (title, salary, department_id)
VALUES ("Cable Guy", 340000, 911);


-- //////////////////////////////////////////

CREATE TABLE employee (

  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL
);

INSERT INTO department (first_name, last_name, role_id, manager_id)
VALUES ("Dean", "Winchester", );

INSERT INTO department (nameFull)
VALUES ("Klaus", "Hargrove");

INSERT INTO department (nameFull)
VALUES ("Mary Sue", "Trope");

INSERT INTO department (nameFull)
VALUES ("Larry", "the Cable Guy");

  