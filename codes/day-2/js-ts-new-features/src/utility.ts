// export const divide = (a: number, b: number) => {
//     const p = new Promise<number>(
//         //executor function
//         (resolveFnRef, rejectFnRef) => {
//             const res = a / b
//             if (res === Infinity) {
//                 const err = new Error('divisor should nt be zero...')
//                 rejectFnRef(err)
//             }
//             else
//                 //return res
//                 resolveFnRef(res)
//         }
//     )
//     return p;
// }
export const divide = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor should nt be zero...')
    else
        return res
}

export const add = (a: number, b: number) => a + b