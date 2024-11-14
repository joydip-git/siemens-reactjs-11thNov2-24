import { useState } from "react"
import { getTodos } from "../../../services/todoservice"
import { Todo } from "../../../models/todo"

const TodoList = () => {
    console.log('todolist rendered...');
    const [todos, setTodos] = useState<Todo[] | undefined>(undefined)
    const [isDataFetchingOver, setIsDataFetchingOver] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showData, setShowData] = useState(false)

    const fetchTodos = async () => {
        try {
            const response = await getTodos()
            if (response.status === 200) {
                // console.log(response.data.slice(0, 5))
                setTodos(response.data.slice(0, 5))
                setIsDataFetchingOver(true)
                setErrorMessage('')
            } else {
                setTodos(undefined)
                setIsDataFetchingOver(true)
                setErrorMessage('could not fetch records')
            }
            //console.log('no record found...');
        } catch (error: any) {
            //console.log(error.message);
            setTodos(undefined)
            setIsDataFetchingOver(true)
            setErrorMessage(error.message)
        }
    }

    let design: any;
    if (isDataFetchingOver) {
        if (errorMessage === '') {
            if (todos && todos.length > 0) {
                design = (
                    <ul>
                        {
                            todos.map(
                                (todod) => <li key={todod.id}>{todod.id}. {todod.title}</li>
                            )
                        }
                    </ul>
                )
            } else
                design = <span>No record found...</span>
        } else
            design = <span>{errorMessage}</span>
    } else
        design = <span>Loading....</span>


    return (
        <div>
            <button type="button" onClick={
                () => {
                    fetchTodos()
                    setShowData(oldShow => !oldShow)
                }
            }>Load Data</button>
            <br />
            {showData && design}
        </div>
    )
}

export default TodoList