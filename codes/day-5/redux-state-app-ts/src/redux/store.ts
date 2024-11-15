import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todosslice";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({
    todosState: todosReducer
})
const loggerMiddleware = createLogger()

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (mp) => mp().concat(loggerMiddleware)
})

export type AppStateType = ReturnType<typeof appStore.getState>
export type StoreDispatchType = typeof appStore.dispatch