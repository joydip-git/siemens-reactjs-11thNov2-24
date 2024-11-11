//models
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

//repository
const employees: Employee[] = []

//contract
interface Manager<T> {
    add(obj: T): boolean;
    getAll(): Readonly<T[]>;
    sort(choice: number): Readonly<T[]>;
}

//implementation
class EmployeeManager implements Manager<Employee> {
    add(obj: Employee): boolean {
        try {
            let found = employees.find(e => e.id === obj.id)
            if (found)
                throw new Error('employee with same id already exists..')
            else {
                employees.push(obj)
                return true
            }
        } catch (error) {
            throw error
        }
    }
    getAll(): Readonly<Employee[]> {
        return [...employees]
    }
    sort(choice: number): Readonly<Employee[]> {
        switch (choice) {
            case 1:
                employees.sort((e1, e2) => e1.id - e2.id)
                break;

            case 2:
                employees.sort((e1, e2) => e1.name.toLocaleLowerCase().localeCompare(e2.name.toLocaleLowerCase()))
                break;

            case 3:
                employees.sort((e1, e2) => e1.totalSalary - e2.totalSalary)
                break;

            default:
                employees.sort((e1, e2) => e1.id - e2.id)
                break;
        }
        return [...employees]
    }
}

//user interface
const anilEmployee = new Employee(1, 'anil', 1000, 2000, 3000)
anilEmployee.calculateSalary()

const sunilEmployee = new Employee(2, 'sunil', 1500, 2500, 3500)
sunilEmployee.calculateSalary()

const manager: Manager<Employee> = new EmployeeManager()
try {
    console.log(manager.add(anilEmployee) ? 'added' : 'could not add')
} catch (error: any) {
    console.log(error.message);
}
try {
    console.log(manager.add(sunilEmployee) ? 'added' : 'could not add')
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