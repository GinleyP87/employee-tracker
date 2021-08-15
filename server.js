const config = require('./config/connection');
const inquirer = require("inquirer");
const mysql = require("mysql2");

config.connect(function (err) {
    if (err) throw err;
    console.log("connected")
    mainPrompt()
})

function mainPrompt() {

    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Would you like to do?",
            choices: [
                "View All of the Employees",
                "View All Employees by their Department",
                "View All Employees by their Manager",
                "Add an Employee",
                "Remove an Employees",
                "Update an Employee's Role",
                "Add a Role",
                "Remove a Role",
                "Update an Employee Manager",
                "End"]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View all of the Employees":
                    viewEmployee();
                    break;
                case "View all Employees by their Department":
                    viewEmployeeByDepartment();
                    break;
                case "View Employees by their Manager":
                    viewEmployeeByManager();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Remove an Employee":
                    removeEmployees();
                    break;
                case "Update an Employee's Role":
                    updateEmployeeRole();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Remove a Role":
                    removeRole();
                    break;
                case "Update Employee MAnager":
                    updateEmployeeManager();
                    break;
                case "End":
                    db.end();
                    break;
            }
        });
}

function viewEmployee() {
    console.log("View all of the employees.\n");

    let query =
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee employee
    LEFT JOIN role role
        ON employee.jobRole_id = jobRole.id
    LEFT JOIN department department
        ON department.id = jobRole.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`

    db.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("These are all of your Employees!\n");

        mainPrompt();
    });
}