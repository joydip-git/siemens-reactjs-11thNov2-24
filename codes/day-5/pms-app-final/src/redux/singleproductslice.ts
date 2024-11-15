import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";

export interface SingleProductStateType {
    product: Product | undefined;
    isFetchOver: boolean;
    errorInfo: string;
}

const initialSingleProductState: SingleProductStateType = {
    product: undefined,
    isFetchOver: false,
    errorInfo: ''
}

const singleProductSlice = createSlice({
    name: 'productSlice',
    initialState: initialSingleProductState,
    reducers: {
        fetch_initate: (state) => {
            state.errorInfo = ''
            state.isFetchOver = false
            state.product = undefined
        },
        fetch_success: (state, action: PayloadAction<Product>) => {
            state.errorInfo = ''
            state.isFetchOver = true
            state.product = action.payload
        },
        fetch_failure: (state, action: PayloadAction<string>) => {
            state.errorInfo = action.payload
            state.isFetchOver = true
            state.product = undefined
        }
    }
})

export const singleProductReducer = singleProductSlice.reducer
export const {
    fetch_initate: fetchProductInitiate,
    fetch_success: fetchProductSuccess,
    fetch_failure: fetchProductFaliure
} = singleProductSlice.actions