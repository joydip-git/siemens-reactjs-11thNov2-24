import './Child.css'

type ChildPropType = {
    messageValue: string,
    messageHandlerFn: (value: string) => void
}
export function Child(args: Readonly<ChildPropType>) {
    //Cannot assign to read only property 'messageValue'
    //args.messageValue = 'this is new message'
    return (
        <span>
            Child component
            <br />
            Message: &nbsp;{args.messageValue}
            <br />
            {/* <button type="button"
                onClick={args.messageHandlerFn}>
                Change Message
            </button> */}
            <div>
                <label htmlFor="txtMessage">Type Message:&nbsp;</label>
                <input
                    className='input-width-style'
                    type="text"
                    id="txtMessage"
                    value={args.messageValue}
                    onChange={(e) => args.messageHandlerFn(e.target.value)}
                />
            </div>
            {/* <button type="button"
                onClick={() => args.messageHandlerFn('Welcome to props - function passing with argument')}>
                Change Message
            </button> */}
        </span>
    );
}