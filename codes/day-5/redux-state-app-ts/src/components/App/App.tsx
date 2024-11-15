import DashBoard from '../common/dashboard/DashBoard';
import TodoList from '../todos/todo-list/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <DashBoard />
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
