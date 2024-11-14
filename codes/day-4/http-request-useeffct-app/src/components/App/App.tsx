import { useState } from 'react';
import HookComp from '../HookComp';
import { Sample } from '../Sample';
import TodoList from '../todos/todo-list/TodoList';
import './App.css';

function App() {
  //functional
  //const todoListNode = TodoList()

  //class
  // const sampleObj = new Sample({ data: 100 })
  // const sampleNode = sampleObj.render()
  const [value, setValue] = useState(0)
  const [name, setName] = useState('Hello..')
  const [showData, setShowData] = useState(false)
  return (
    <div className="App">
      {
        /*{
          todoListNode
        }
        < br />
        {
          sampleNode
        }*/
      }

      <div>
        <button type="button" onClick={
          () => {
            setShowData(oldShow => !oldShow)
          }
        }>{showData ? 'Hide' : 'Show'}</button>
        <br />
        {showData && <TodoList />}
      </div>
      <br />

      {/*
      <br />
      <Sample data={100} />
      <br /> 
      <span>Name: &nbsp;{name}</span>
      <br />
      <button type='button' onClick={() => setName(oldName => oldName + '!')}>Update Name</button>
      <br />
      <button type="button" onClick={() => setValue(oldValue => oldValue + 1)}>Increase</button>
      <br />
      <HookComp data={value} />
      */}
    </div>
  );
}

export default App;
