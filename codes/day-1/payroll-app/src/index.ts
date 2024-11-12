import { Employee } from "./models/employee"
import { Manager } from "./service/contract"
import { EmployeeManager } from "./service/employeemanger"

//user interface
const anilEmployee = new Employee(1, 'anil', 1000, 2000, 3000)
anilEmployee.calculateSalary()

const sunilEmployee = new Employee(2, 'sunil', 1500, 2500, 3500)
sunilEmployee.calculateSalary()

const manager: Manager<Employee> = new EmployeeManager()

try {
    console.log(manager.add(sunilEmployee) ? 'added' : 'could not add')
} catch (error: any) {
    console.log(error.message);
}

try {
    console.log(manager.add(anilEmployee) ? 'added' : 'could not add')
} catch (error: any) {
    console.log(error.message);
}


const all = manager.getAll()
if (all.length > 0)
    all.forEach(e => console.log(`${e.name} has got salary of ${e.totalSalary}`))

const allSorted = manager.sort(2)
if (allSorted.length > 0)
    all.forEach(e => console.log(`Name=${e.name}, Id=${e.id}, Total Salary= ${e.totalSalary}`))


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