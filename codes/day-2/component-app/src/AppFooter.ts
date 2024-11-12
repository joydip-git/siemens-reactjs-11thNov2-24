import { createElement } from "react"

export function AppFooter() {
    //data
    const footerText = 'Copyright &copy; Siemens, 2024'

    const styleObj = {
        backgroundColor: 'auqa',
        fontFamily: 'Arial',
        textAlign: 'center'
    }
    const footer = createElement('h3', { style: styleObj }, footerText)

    //design
    // const footer = document.createElement('h3')
    // footer.innerHTML = footerText

    //style
    // footer.style.backgroundColor = 'auqa'
    // footer.style.fontFamily = 'Arial'
    // footer.style.textAlign = 'center'

    return footer
}