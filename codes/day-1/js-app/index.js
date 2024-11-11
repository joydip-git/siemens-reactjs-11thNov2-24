function changeHeaderText() {
    //window.alert('changing text')
    var headerObject = document.getElementById('mainHeader')
    headerObject.innerText = 'Welcome to JavaScript'
}
function insertIntoPara() {

    // setTimeout(
    //     () => {
    //         var para = document.getElementById('mainPara')
    //         para.innerHTML = '<i>This is HTML Para</i>'
    //     },
    //     3000
    // )
    var para = document.getElementById('mainPara')
    para.innerHTML = '<i>This is HTML Para</i>'

    var buttonObject = document.getElementById('btnChange')
    buttonObject.addEventListener('click', changeHeaderText)
}
window.addEventListener('DOMContentLoaded', insertIntoPara)

console.log('hello....')