"use strict";
var Employee = /** @class */ (function () {
    function Employee(id, name, basic, da, hra) {
        this.totalSalary = 0;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
        this.id = id;
        this.name = name;
    }
    Employee.prototype.calculateSalary = function () {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay;
    };
    return Employee;
}());
var anilEmployee = new Employee(1, 'anil', 1000, 2000, 3000);
var sunilEmployee = new Employee(2, 'sunil', 1500, 2500, 3500);
var employees = [];
employees.push(anilEmployee, sunilEmployee);
employees.forEach(function (e) {
    e.calculateSalary();
    console.log("".concat(e.name, " has got salary of ").concat(e.totalSalary));
});
for (var index = 0; index < employees.length; index++) {
    var e = employees[index];
    e.calculateSalary();
    console.log("".concat(e.name, " has got salary of ").concat(e.totalSalary));
}
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var e = employees_1[_i];
    e.calculateSalary();
    console.log("".concat(e.name, " has got salary of ").concat(e.totalSalary));
}
for (var index in employees) {
    var e = employees[index];
    e.calculateSalary();
    console.log("".concat(e.name, " has got salary of ").concat(e.totalSalary));
}
//anilEmployee.calculateSalary()
// console.log(`${anilEmployee.name} has got salary of ${anilEmployee.totalSalary}`);
