function print() {
    console.log('hello...');
}
function call(fnRef) {
    fnRef()
}
call(print)