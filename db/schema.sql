DROP TABLE IF EXISTS department,
DROP TABLE IF EXISTS jobRole,
DROP TABLE IF EXISTS employee,

CREATE TABLE department(
    id: INTEGER AUTO_INCRIMENT PRIMARY KEY NOT NULL,
    dept_name: VARCHAR(30),
)

CREATE TABLE jobRole(
    id: INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title: VARCHAR(30) NOT NULL,
    salary: DECIMAL NOT NULL,
    department_id: INTEGER,
    FOREIGN KEY:(department_id) REFERENCES department(id)
)

CREATE TABLE employee (
    id: INTEGER INTEGER NOT NULL PRIMARY KEY,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    job_role_id: INTEGER,
    manager_id: INTEGER,
    FOREIGN KEY: (jobRole_id) REFERENCES jobRole(id),
    FOREIGN KEY: (manager_id) REFERENCES employee(id) ON DELETE SET NULL
)

