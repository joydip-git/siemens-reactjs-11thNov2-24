//models
export class Employee {
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