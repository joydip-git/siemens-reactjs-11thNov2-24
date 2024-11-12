import { employees } from "../data/repository"
import { Employee } from "../models/employee"
import { Manager } from "./contract"

//implementation
export class EmployeeManager implements Manager<Employee> {
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
