import { useState } from "react"
import Content from "./Content"
import { ValueContext } from "./valuecontext"

const Panel = () => {
    const [val, setVal] = useState(100)
    const valHandler = () => {
        setVal(oldVal => oldVal + 1)
    }
    return (
        <div>
            <br /><br />
            Val: &nbsp;{val}
            <ValueContext.Provider value={{ count: val, countHandler: valHandler }}>
                <br />
                Panel
                <br />
                <Content />
            </ValueContext.Provider>
        </div>
    )
}

export default Panel