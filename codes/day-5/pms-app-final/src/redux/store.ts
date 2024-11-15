import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allProductsReducer } from "./allproductsslice";
import { singleProductReducer } from "./singleproductslice";
import { createLogger } from "redux-logger";

export const appStore = configureStore({
    reducer: combineReducers({
        allProductsState: allProductsReducer,
        singleProductState: singleProductReducer
    }),
    middleware: (mp) => mp().concat(createLogger())
})

export type RootStateType = ReturnType<typeof appStore.getState>
export type StoreDispatchType = typeof appStore.dispatch