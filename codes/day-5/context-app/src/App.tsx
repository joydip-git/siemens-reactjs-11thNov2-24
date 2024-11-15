import { useState } from 'react';
import './App.css';
import Panel from './Panel';
import { ValueContext, ValueContextType } from './valuecontext';

function App() {
  const [numValue, setNumValue] = useState(0)
  const numValueHandler = (): void => {
    setNumValue(
      (oldValue) => oldValue + 1
    )
  }
  const valueContextInput: ValueContextType = {
    count: numValue,
    countHandler: numValueHandler
  }
  return (
    <div className="App">
      App <br />
      {/* <button type="button" onClick={numValueHandler}>Increase</button> */}
      NumVal: &nbsp;{
        numValue
      }
      <br />
      <ValueContext.Provider value={valueContextInput}>
        <Panel />
      </ValueContext.Provider>
    </div>
  );
}

export default App;
