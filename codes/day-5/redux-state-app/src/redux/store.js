import { createLogger } from "redux-logger";
import { countReducer } from "./counterslice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//creating logger middleware
const loggerMiddleware = createLogger()

//create reducer map
const rootReducer = combineReducers({
    countState: countReducer
})

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (mp) => mp().concat(loggerMiddleware)
})