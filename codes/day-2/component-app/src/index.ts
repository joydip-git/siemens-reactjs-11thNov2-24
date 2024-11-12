import { App } from "./App"
import { createRoot } from "react-dom/client";
//bootstrapper

const rootDiv = document.getElementById('root') as HTMLElement
//div?.appendChild(appElement)
const rootReactElement = createRoot(rootDiv)
const appElement = App()
rootReactElement.render(appElement)
