class Employee {
    id: number;
    name: string;
    basicPay: number;
    daPay: number;
    hraPay: number;
    totalSalary: number = 0;

    constructor(id: number, name: string, basic: number, da: number, hra: number) {
        this.basicPay = basic
        this.daPay = da
        this.hraPay = hra;
        this.id = id;
        this.name = name;
    }
    calculateSalary(): void {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay
    }
}

const anilEmployee = new Employee(1, 'anil', 1000, 2000, 3000)
const sunilEmployee = new Employee(2, 'sunil', 1500, 2500, 3500)

const employees: Employee[] = []

employees.push(anilEmployee, sunilEmployee)

employees.forEach(
    function (e) {
        e.calculateSalary()
        console.log(`${e.name} has got salary of ${e.totalSalary}`);
    }
)
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