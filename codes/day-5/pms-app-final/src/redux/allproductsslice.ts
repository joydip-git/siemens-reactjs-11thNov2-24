import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";

export interface AllProductsStateType {
    products: Product[] | undefined;
    isFetchOver: boolean;
    errorInfo: string;
}

const initialAllProductsState: AllProductsStateType = {
    products: undefined,
    isFetchOver: false,
    errorInfo: ''
}

const allProductsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialAllProductsState,
    reducers: {
        fetch_initate: (state) => {
            state.errorInfo = ''
            state.isFetchOver = false
            state.products = undefined
        },
        fetch_success: (state, action: PayloadAction<Product[]>) => {
            state.errorInfo = ''
            state.isFetchOver = true
            state.products = action.payload
        },
        fetch_failure: (state, action: PayloadAction<string>) => {
            state.errorInfo = action.payload
            state.isFetchOver = true
            state.products = undefined
        }
    }
})

export const allProductsReducer = allProductsSlice.reducer
export const {
    fetch_initate: fetchAllProductsInitiate,
    fetch_success: fetchAllProductsSuccess,
    fetch_failure: fetchAllProductsFaliure
} = allProductsSlice.actions