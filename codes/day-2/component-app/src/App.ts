//root compoennt
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { createElement } from "react";

export function App() {

    const headerDesign = AppHeader()
    const footerDesign = AppFooter()

    const div = createElement(
        'div',
        {},
        [
            headerDesign,
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            createElement('br'),
            footerDesign
        ]
    )

    // div.append(
    //     headerDesign,
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     document.createElement('br'),
    //     footerDesign
    // )

    return div
}