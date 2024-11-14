import { useEffect } from "react"

type HookCompPropType = {
    data: number
}
const HookComp = (props: Readonly<HookCompPropType>) => {

    useEffect(
        //this callback will be executed only once
        () => {
            console.log('use effect 1');

            return () => {
                //clean-up: will be excuted in the next render (at the beginning)
                console.log('cleanup-1');
            }
        },
        []
    )
    useEffect(
        //this callback will be executed only when component receives fresh value via "data" property
        () => {
            console.log('use effect 2');
            return () => {
                console.log('clean-up 2');
            }
        },
        [props.data]
    )

    useEffect(
        //this callback will be executed every time
        () => {
            console.log('use effect 3');
            return () => {
                console.log('clean-up 3');
            }
        }
    )
    return (
        <div>
            <span>Data:&nbsp;{props.data}</span>
        </div>
    )
}

export default HookComp