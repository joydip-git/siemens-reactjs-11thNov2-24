type CalculatorChoicePropType = {
    updateChoiceHandler: (choiceValue: number) => void
}
export default function CalculatorChoice(props: Readonly<CalculatorChoicePropType>) {
    const { updateChoiceHandler } = props
    return (
        <div>
            <label htmlFor="radioAdd">Add:&nbsp;</label>
            <input type="radio" name="calcRadios" id="radioAdd"
                onChange={() => updateChoiceHandler(1)} />

            &nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="radioSub">Subtract:&nbsp;</label>
            <input type="radio" name="calcRadios" id="radioSub"
                onChange={() => updateChoiceHandler(2)} />

            &nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="radioMulti">Multiply:&nbsp;</label>
            <input type="radio" name="calcRadios" id="radioMulti"
                onChange={() => updateChoiceHandler(3)} />

            &nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="radioDiv">Divide:&nbsp;</label>
            <input type="radio" name="calcRadios" id="radioDiv"
                onChange={() => updateChoiceHandler(4)} />
        </div>
    )
}