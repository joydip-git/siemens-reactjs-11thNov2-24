//import { useDispatch, useSelector } from "react-redux"
//import { AppStateType, StoreDispatchType } from "../../../redux/store"
//import { StoreDispatchType } from "../../../redux/store"

import { useEffect } from "react"
import { useAppStoreDispatch, useAppStoreSelector } from "../../../redux/hooks"
import { fetchFailureActionCreator, fetchInitiateActionCreator, fetchSuccessActionCreator } from "../../../redux/todosslice"
import { getTodos } from "../../../services/todoservice"


const TodoList = () => {

    // const { errorMessage, isDataFetchingOver, todos } = useSelector((state: AppStateType) => state.todosState)
    //const dispatchFnRef = useDispatch<StoreDispatchType>()

    const { errorMessage, isDataFetchingOver, todos } = useAppStoreSelector(state => state.todosState)
    const dispatchFnRef = useAppStoreDispatch()

    const fetchTodos = async () => {
        try {
            const response = await getTodos()
            if (response.status === 200) {
                const successAction =
                    fetchSuccessActionCreator(response.data.slice(0, 5))
                dispatchFnRef(successAction)
            } else {
                const failureAction = fetchFailureActionCreator('could not access data...')
                dispatchFnRef(failureAction)
            }
        } catch (error: any) {
            const failureAction = fetchFailureActionCreator(error.message)
            dispatchFnRef(failureAction)
        }
    }

    useEffect(
        () => {
            const initiateAction = fetchInitiateActionCreator()
            dispatchFnRef(initiateAction)
            fetchTodos()
        },
        []
    )
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


    return design
}

export default TodoList