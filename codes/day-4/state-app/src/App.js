import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decreaseActionCreator, increaseActionCreator } from './redux/actioncreators';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0)

  const { count } = useSelector((stateMap) => stateMap.countState)
  const dispatchRef = useDispatch()

  const increaseHandler = () => {
    const increaseAction = increaseActionCreator(value)
    dispatchRef(increaseAction)
  }
  const decreaseHandler = () => {
    const decreaseAction = decreaseActionCreator(value)
    dispatchRef(decreaseAction)
  }
  return (
    <div className="App">
      <span>Count: &nbsp;{count}</span>
      <br />
      <div>
        <label htmlFor="txtValue">Value:&nbsp;</label>
        <input type="text" id='txtValue' value={value} onChange={(e) => setValue(+e.target.value)} />
      </div>
      <button type="button" onClick={increaseHandler}>Increase</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" onClick={decreaseHandler}>Decrease</button>
    </div>
  );
}

export default App;
