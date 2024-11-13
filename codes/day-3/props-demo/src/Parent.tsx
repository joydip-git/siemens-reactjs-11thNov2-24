import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
    //const message = 'Welcome to Props'
    // const child = Child({ messageValue: message })
    const [message, setMessage] = useState('Welcome to Props - data passing')
    const messageHandler = (newMessage: string): void => {
        //setMessage('Welcome to props - function passing')
        setMessage(newMessage)
    }
    return (
        <div>
            {
                /* child */
            }
            <Child
                messageValue={message}
                messageHandlerFn={messageHandler}
            />
        </div>
    )
}