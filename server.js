const connection = require('./config/connection');
const inquirer = require("inquirer");
const sql = require("mysql2");

connection.connect(function (err) {
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
                "View all of the Employees",
                "View all employees by their Department",
                "View all employees by their Manager",
                "Add an Employee",
                "Remove an Employees",
                "Update an Employee's Role",
                "Add a Role",
                "Remove a Role",
                "Update an Employee Manager",
                "End"]
        })
        .then(function ({ task }) {
            console.log(task)
            switch (task) {
                case "View all of the Employees":
                    viewEmployee();
                    break;
                case "View all employees by their Department":
                    viewEmployeeByDepartment();
                    break;
                case "View all employees by their Manager":
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
                case "Update an Employee Manager":
                    updateEmployeeManager();
                    break;
                case "End":
                    db.end();
                    break;
            }
        });
}

function viewEmployee() {
    console.log("View all of the Employees.\n");

    let sqlquery =
        `SELECT employee.id, employee.first_name, employee.last_name, jobRole.title, department.dept_name AS department, jobRole.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee employee
    LEFT JOIN role role
        ON employee.jobRole_id = jobRole.id
    LEFT JOIN department department
        ON department.id = jobRole.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`

    db.sqlquery(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("These are all of your Employees!\n");

        mainPrompt();
    });
}