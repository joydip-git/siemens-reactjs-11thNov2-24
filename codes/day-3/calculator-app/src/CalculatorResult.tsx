type CalculatorResultPropType = {
    calculationResult: number
}
const CalculatorResult = (props: Readonly<CalculatorResultPropType>) => {
    return (
        <div>
            <label htmlFor="txtResult">Result:&nbsp;</label>
            <input type="number" id="txtResult" value={props.calculationResult} readOnly />
        </div>
    )
}

export default CalculatorResult