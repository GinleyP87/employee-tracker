
--insert into department--

INSERT INTO department (dept_name)
VALUES ("Engineers");

INSERT INTO department (dept_name)
VALUES ("Cyber Security");

INSERT INTO department (dept_name)
VALUES ("Sales Team")

INSERT INTO department (dept_name)
VALUES ("Financal");

INSERT INTO department (dept_name)
VALUES ("Legal");


--insert into role--

INSERT INTO role (title, salary, dept_id)
VALUES ("Lead Engineer", 100000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Software Engineer", 80000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Lead Cyber Tech", 100000 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Cyber Tech", 80000, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Head of Sales", 90000, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Salesperson", 75000, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Accountant", 112500, 4);

INSERT INTO role (title, salary, dept_id)
VALUES ("Lead Legal Advisor", 130000, 5);

INSERT INTO role (title, salary, dept_id)
VALUES ("Legal Advisor", 115000, 5);

--insert into employee--

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Brown", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dan", "Smith", 2, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rob", "Hamilton", 5, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christopher", "Follan", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Shannon", "Vasquez", 5, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Sharpe", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Mercier", 3, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marc", "Carranza", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Zach", "Sayer", 4, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ian", "Jones", 3, 6);

