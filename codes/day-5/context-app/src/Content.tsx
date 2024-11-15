import { useContext } from "react"
import { ValueContext } from "./valuecontext"

const Content = () => {
    const { count, countHandler } = useContext(ValueContext)
    return (
        <div>
            <br /><br />
            Content
            <br />
            <span>Value: &nbsp; &nbsp;{count}</span>
            <br />
            <button type="button" onClick={countHandler}>Increase</button>
        </div>
    )
}

export default Content