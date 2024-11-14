import { Sample } from '../Sample';
import TodoList from '../todos/todo-list/TodoList';
import './App.css';

function App() {
  //functional
  //const todoListNode = TodoList()

  //class
  // const sampleObj = new Sample({ data: 100 })
  // const sampleNode = sampleObj.render()
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
      <TodoList />
      <br />
      <Sample data={100} />
    </div>
  );
}

export default App;
