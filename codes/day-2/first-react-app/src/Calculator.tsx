import { useState } from "react"

export const Calculator = () => {

    const [choice, setChoice] = useState(0)
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)
    const [resultValue, setResultValue] = useState(0)

    const calculate = () => {
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
                <div>
                    <label htmlFor="radioAdd">Add:&nbsp;</label>
                    <input type="radio" name="calcRadios" id="radioAdd"
                        onChange={() => setChoice(1)} />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="radioSub">Subtract:&nbsp;</label>
                    <input type="radio" name="calcRadios" id="radioSub"
                        onChange={() => setChoice(2)} />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="radioMulti">Multiply:&nbsp;</label>
                    <input type="radio" name="calcRadios" id="radioMulti"
                        onChange={() => setChoice(3)} />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="radioDiv">Divide:&nbsp;</label>
                    <input type="radio" name="calcRadios" id="radioDiv"
                        onChange={() => setChoice(4)} />
                </div>
                <div>
                    <label htmlFor="txtFirst">First:&nbsp;</label>
                    <input type="number" id="txtFirst"
                        onInput={
                            (e) => {
                                const input = e.target as HTMLInputElement
                                setFirstValue(+input.value)
                            }

                        }
                        value={firstValue} />
                </div>
                <div>
                    <label htmlFor="txtSecond">Second:&nbsp;</label>
                    <input type="number" id="txtSecond"
                        onInput={
                            (e) => {
                                const input = e.target as HTMLInputElement
                                setSecondValue(Number(input.value))
                            }
                        }
                        value={secondValue} />
                </div>
                <div>
                    <input type="button" value="Calculate" onClick={calculate} />
                </div>
            </form>
            <br />
            <div>
                <label htmlFor="txtResult">Result:&nbsp;</label>
                <input type="number" id="txtResult" value={resultValue} readOnly />
            </div>
        </div>
    )
}