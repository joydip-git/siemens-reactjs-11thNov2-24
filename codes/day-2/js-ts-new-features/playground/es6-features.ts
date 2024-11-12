var obj = {
    id: 1,
    name: 'joydip',
    salary: 1000,
    friends: ['anil', 'sunil']
}
// const copy = {}
// for (const propName in obj) {
//     const propValue = obj[propName]
//     copy[propName] = propValue
// }
// spread operator (...)
const copy = { ...obj }
console.log(obj);
console.log(copy);

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers]
console.log(numbers);
console.log(copyNumbers);

// rest operator (...)
//to declare an array as part of the argument list of a method, which can accept any number of arguments, when called
//there could not one such array as part of the function's argument list
//DO NOT USE this declare an array as a local variable
function calculateAverage(name: string, ...marks: number[]) {
    if (marks.length > 0) {
        let sum = 0;
        marks.forEach(
            function (mark) {
                sum += mark;
            }
        )
        return sum / marks.length;
    }
    else
        return 0
}
console.log(calculateAverage('anil', 30, 40, 50))
console.log(calculateAverage('sunil', 55, 45))

// const nameValue = obj.name
// const salaryValue = obj.salary

//object destruturing
// const { name: nameValue, salary: salaryValue } = obj
// console.log(nameValue, salaryValue);

const { name, salary } = obj
console.log(name, salary);

