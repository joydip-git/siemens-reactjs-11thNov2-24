import React, { createElement } from "react";
export function AppHeader() {
    //<h2 id='mainHeader' style="">Welcome to....</h2>

    //data
    const headerText = 'Welcome to Component'

    //style
    const styleObj = {
        backgroundColor: 'burlywood',
        fontFamily: 'consolas',
        textAlign: 'center'
    }

    //JSX syntax
    // const header = (
    //     <h2 id= 'mainHeader' style = { styleObj }>
    //     {
    //         headerText
    //     }
    //         </h2>
    // )

    const header = createElement(
        'h2',
        {
            id: 'mainHeader',
            style: styleObj
        },
        headerText
    )

    //design
    // const header = document.createElement('h2')
    //header.innerHTML = headerText

    //style
    // header.style.backgroundColor = 'burlywood'
    // header.style.fontFamily = 'consolas'
    // header.style.textAlign = 'center'
    return header
}