import { useState } from "react";

export function Header() {
    console.log('Header ....');
    //data of the component
    //let message = 'Welcome to React JS'

    //useState "hook"
    // const arr = useState('Welcome to React JS')
    // const message = arr[0]
    // const updateMessage = arr[1]
    const [message, setMessage] = useState('Welcome to React JS')

    //functions
    const messageHandler = () => {
        console.log(message);
        //message = 'Welcome to React JS component state...'

        setMessage('Welcome to React JS component state...')
        //old message will be displayed, since the state updation is happenning asynchronously behind the scene
        console.log(message);
    }

    //template/view/design of the component
    return (
        <div>
            <h2
                style={{ backgroundColor: 'burlywood', textAlign: 'center' }}>
                {
                    message
                }
            </h2>
            <br />
            <br />
            <button type="button" onClick={messageHandler}>
                Change Message
            </button>
        </div>
    )
}