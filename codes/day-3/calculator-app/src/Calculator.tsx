import { useState } from "react"
import CalculatorResult from "./CalculatorResult"
import CalculatorChoice from "./CalculatorChoice"
import CalculatorForm from "./CalculatorForm"

export const Calculator = () => {

    const [choice, setChoice] = useState(0)
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)
    const [resultValue, setResultValue] = useState(0)

    const choiceHandler = (choiceValue: number): void => {
        setChoice(choiceValue)
    }
    const firstValueHandler = (value: number): void => {
        setFirstValue(value)
    }
    const secondValueHandler = (value: number): void => {
        setSecondValue(value)
    }
    const calculate = (): void => {
        switch (choice) {
            case 1:
                setResultValue(firstValue + secondValue)
                break;

            case 2:
                setResultValue(firstValue - secondValue)
                break;

            case 3:
                setResultValue(firstValue * secondValue)
                break;

            case 4:
                setResultValue(firstValue / secondValue)
                break;

            default:
                break;
        }
    }
    return (
        <div>
            <form>
                <CalculatorChoice updateChoiceHandler={choiceHandler} />
                <CalculatorForm
                    firstNumber={firstValue}
                    secondNumber={secondValue}
                    updateFirstNumberHandler={firstValueHandler}
                    updateSecondNumberHandler={secondValueHandler}
                    calculationHandler={calculate}
                />
            </form>
            <br />
            <CalculatorResult calculationResult={resultValue} />
        </div>
    )
}