import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'
//import { StrictMode } from "react";

console.log('journey starts here...');
createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <App />
    )
