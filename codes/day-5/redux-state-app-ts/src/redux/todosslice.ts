import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/todo";

interface TodosStateType {
    todos: Todo[] | undefined;
    isDataFetchingOver: boolean;
    errorMessage: string;
}

const initialTodosState: TodosStateType = {
    todos: undefined,
    errorMessage: '',
    isDataFetchingOver: false
}

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: initialTodosState,
    reducers: {
        fetch_initiate: (state) => {
            state.errorMessage = ''
            state.todos = undefined
            state.isDataFetchingOver = false
        },
        fetch_success: (state, action: PayloadAction<Todo[]>) => {
            state.isDataFetchingOver = true
            state.errorMessage = ''
            state.todos = action.payload
        },
        fetch_failure: (state, action: PayloadAction<string>) => {
            state.isDataFetchingOver = true
            state.errorMessage = action.payload
            state.todos = undefined
        }
    }
})
export const todosReducer = todosSlice.reducer
export const { fetch_initiate: fetchInitiateActionCreator, fetch_success: fetchSuccessActionCreator, fetch_failure: fetchFailureActionCreator } = todosSlice.actions
