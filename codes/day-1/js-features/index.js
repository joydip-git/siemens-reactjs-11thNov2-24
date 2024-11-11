// var x = 10
// x = 'Joydip'
// var expo = x.toExponential(2)
// console.log(expo);
//function global(){
var x = 10
var y = 'joydip'
var z = true

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

function inner() {
    let x = 10
    console.log(x)//10
    for (var i = 0; i < 1; i++) {
        let x = 20
        console.log(x)//20
    }
    console.log(x)//10

    const m = 100
    //m = 200
    console.log(m);
}
inner()

function add(a, b) {
    return a + b
}
console.log(add(10, 20));
//}()