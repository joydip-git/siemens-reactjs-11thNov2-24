"use strict";
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
var Person = /** @class */ (function () {
    function Person(idVal, nameVal, salaryVal) {
        this.id = idVal;
        this.name = nameVal;
        this.salary = salaryVal;
    }
    Object.defineProperty(Person.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (value) {
            this.salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.show = function () {
        return "Name=".concat(this.name, ", Id=").concat(this.id, ", Salary=").concat(this.salary);
    };
    return Person;
}());
var obj = new Person(1, 'joydip', 1000);
// obj.location = 'Bangalore'
// obj.sayHi = function () {
//     return 'Hi ' + this.name
// }
var obj2 = new Person(2, 'sunil', 2000);
console.log(obj.Name);
console.log(obj['Salary']);
console.log(obj.show());
console.log(obj);
console.log(obj2);
