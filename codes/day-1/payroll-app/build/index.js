define(["require", "exports", "./models/employee", "./service/employeemanger"], function (require, exports, employee_1, employeemanger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //user interface
    var anilEmployee = new employee_1.Employee(1, 'anil', 1000, 2000, 3000);
    anilEmployee.calculateSalary();
    var sunilEmployee = new employee_1.Employee(2, 'sunil', 1500, 2500, 3500);
    sunilEmployee.calculateSalary();
    var manager = new employeemanger_1.EmployeeManager();
    try {
        console.log(manager.add(sunilEmployee) ? 'added' : 'could not add');
    }
    catch (error) {
        console.log(error.message);
    }
    try {
        console.log(manager.add(anilEmployee) ? 'added' : 'could not add');
    }
    catch (error) {
        console.log(error.message);
    }
    var all = manager.getAll();
    if (all.length > 0)
        all.forEach(function (e) { return console.log("".concat(e.name, " has got salary of ").concat(e.totalSalary)); });
    var allSorted = manager.sort(2);
    if (allSorted.length > 0)
        all.forEach(function (e) { return console.log("Name=".concat(e.name, ", Id=").concat(e.id, ", Total Salary= ").concat(e.totalSalary)); });
});
// employees.push(anilEmployee, sunilEmployee)
// employees.forEach(
//     function (e) {
//         e.calculateSalary()
//         console.log(`${e.name} has got salary of ${e.totalSalary}`);
//     }
// )
/*
for (let index = 0; index < employees.length; index++) {
    const e = employees[index]
    e.calculateSalary()
    console.log(`${e.name} has got salary of ${e.totalSalary}`);
}
for (let e of employees) {
    e.calculateSalary()
    console.log(`${e.name} has got salary of ${e.totalSalary}`);
}
for (let index in employees) {
    const e = employees[index]
    e.calculateSalary()
    console.log(`${e.name} has got salary of ${e.totalSalary}`);
}
//anilEmployee.calculateSalary()
// console.log(`${anilEmployee.name} has got salary of ${anilEmployee.totalSalary}`);
*/ 
