//1. object-literal syntax
/*
var obj = {
    //value properties if an object
    id: 1,
    name: 'joydip',
    salary: 1000,

    //functional property of an object
    show: function () {
        return `Name=${this.name}, Id=${this.id}, Salary=${this.salary}`
    }
}

// obj.location = 'Bangalore'
// obj.sayHi = function () {
//     return 'Hi ' + this.name
// }
*/

//2. constructor function syntax
/*
function person(idVal, nameVal, salaryVal) {
    this.id = idVal
    this.name = nameVal
    this.salary = salaryVal
    this.show = function () {
        return `Name=${this.name}, Id=${this.id}, Salary=${this.salary}`
    }
}
     */
class Person {
    private id: number;
    private name: string;
    private salary: number;

    constructor(idVal: number, nameVal: string, salaryVal: number) {
        this.id = idVal
        this.name = nameVal
        this.salary = salaryVal
    }
    get Id() {
        return this.id
    }
    set Id(value) {
        this.id = value
    }
    get Name() {
        return this.name
    }
    set Name(value) {
        this.name = value
    }
    get Salary() {
        return this.salary
    }
    set Salary(value) {
        this.salary = value
    }
    show(): string {
        return `Name=${this.name}, Id=${this.id}, Salary=${this.salary}`
    }
}

var obj = new Person(1, 'joydip', 1000)
// obj.location = 'Bangalore'
// obj.sayHi = function () {
//     return 'Hi ' + this.name
// }
var obj2 = new Person(2, 'sunil', 2000)
console.log(obj.Name);
console.log(obj['Salary']);
console.log(obj.show());
console.log(obj);
console.log(obj2);