// const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
// const { createLogger } = require("redux-logger");

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { countReducer } from "./countereducer";
import { composeWithDevTools } from "redux-devtools-extension";

//creating logger middleware
const loggerMiddleware = createLogger()

//create reducer map
const rootReducer = combineReducers({
    countState: countReducer
})

//create store
export const appStore = legacy_createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(loggerMiddleware)
    )
)




//console.log(store.getState())


//store.dispatch(increaseActionCreator(2))
//console.log(store.getState())

//store.dispatch(increaseActionCreator(3))
//console.log(store.getState())

//store.dispatch(decreaseActionCreator(1))
//console.log(store.getState())