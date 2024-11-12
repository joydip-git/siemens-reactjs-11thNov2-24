import { add, divide } from "./utility";

// const promiseObj = divide(12, 3)
// promiseObj
//     .then(
//         //called when promise is resolved/fulfilled
//         (data) => {
//             console.log(data);
//         },
//         //called when promise is rejected
//         (e) => { console.log(e.message); }
//     )
async function callDivide() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (e: any) {
        console.log(e.message);
    }
}
callDivide()
console.log(add(12, 3));