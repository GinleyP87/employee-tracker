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
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add an Employee",
                "Remove Employees",
                "Update Employee Role",
                "Add Role",
                "Remove Role",
                "Update Employee Manager",
                "End"]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View all Employees":
                    viewEmployee();
                    break;
                case "View all Employees by their Department":
                    viewEmployeeByDepartment();
                    break;
                case "View Employees by Manager":
                    viewEmployeeByManager();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Remove an Employee":
                    removeEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Remove Role":
                    removeRole();
                    break;
                case "Update Employee MAnager":
                    updateEmployeeManager();
                    break;

                case "End":
                    connection.end();
                    break;
            }
        });
}

function viewEmployee() {
    console.log("Viewing all employees.\n");

    var query =
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee employee
    LEFT JOIN role role
        ON employee.role_id = role.id
    LEFT JOIN department department
        ON department.id = role.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("Here are your Employees!\n");

        mainPrompt();
    });
    // console.log(query.sql);
}