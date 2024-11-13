import { useState } from 'react';
import './App.css';
import PeopleList from './PeopleList';

function App() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  const showHandler = () => {
    //setShow(true)
    setShow(
      (oldShowValue) => {
        return !oldShowValue
      }
    )
  }

  const countHandler = () => {
    setCount(
      (oldCount) => {
        return oldCount + 1
      }
    )
  }

  return (
    <div className="App">
      <button type="button"
        onClick={showHandler}
      >
        {
          show ? 'Hide' : 'Show'
        }
      </button>
      <br />
      {
        /*show && <PeopleList /> */
        show ? <PeopleList /> : <span>NA</span>
      }
      <br />
      <div>
        <span>Count:&nbsp;{count}</span>
        <br />
        <button type="button" onClick={countHandler}>Increase</button>
      </div>
    </div>
  );
}

export default App;
