//import { Fragment } from "react"
type CalculatorFormPropType = {
    firstNumber: number,
    secondNumber: number,
    updateFirstNumberHandler: (value: number) => void,
    updateSecondNumberHandler: (value: number) => void,
    calculationHandler: () => void
}

const CalculatorForm = (props: Readonly<CalculatorFormPropType>) => {
    const { firstNumber, secondNumber, updateFirstNumberHandler, updateSecondNumberHandler, calculationHandler } = props
    return (
        <>
            <div>
                <label htmlFor="txtFirst">First:&nbsp;</label>
                <input type="number" id="txtFirst"
                    onInput={
                        (e) => {
                            const input = e.target as HTMLInputElement
                            updateFirstNumberHandler(+input.value)
                        }

                    }
                    value={firstNumber} />
            </div>
            <div>
                <label htmlFor="txtSecond">Second:&nbsp;</label>
                <input type="number" id="txtSecond"
                    onInput={
                        (e) => {
                            const input = e.target as HTMLInputElement
                            updateSecondNumberHandler(Number(input.value))
                        }
                    }
                    value={secondNumber} />
            </div>
            <div>
                <input type="button" value="Calculate" onClick={calculationHandler} />
            </div>
        </>
    )
}

export default CalculatorForm

// const Frag = (props: any) => {
//     return props.children
// }