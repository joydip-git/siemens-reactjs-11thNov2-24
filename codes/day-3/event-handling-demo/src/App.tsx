import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('')

  const buttonHandler = (e: any) => {
    console.log((e.target as HTMLButtonElement).textContent);
  }

  // const inputHandler = (e: any) => {
  //   console.log((e.target as HTMLInputElement).value);
  // }
  const inputHandler = (value: string, text: string) => {
    console.log(text);
    setInputValue(value)
    console.log(value);
  }
  const anotherInputHandler = (value: string) => {
    console.log(value);
  }
  return (
    <div className="App">
      {/* <button type='button' onClick={(e) => buttonHandler(e)}>Click</button> */}
      <button type='button' onClick={(e) => buttonHandler(e)}>Click</button>
      <br />
      <span>Input Value: &nbsp; {inputValue}</span>
      <br />
      <div>
        <label htmlFor="txtValue">Value: &nbsp;</label>
        {/* <input type="text" id='txtValue' onChange={inputHandler} /> */}
        <input type="text" id='txtValue' onChange={
          (e) => { inputHandler(e.target.value, 'this is another value') }
        } />
      </div>
      <div>
        <label htmlFor="txtData">Data: &nbsp;</label>
        <input type="text" id='txtData' onChange={
          () => { anotherInputHandler('joydip') }
        } />
      </div>
    </div>
  );
}

export default App;
