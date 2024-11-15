import { createSlice } from "@reduxjs/toolkit";

const initialCountState = {
    count: 0
}

const countSlice = createSlice({
    name: 'countSlice',
    initialState: initialCountState,
    reducers: {
        increase: (state, action) => {
            //state => recieves a writable draft of the state object (mutable) from store
            state.count = state.count + action.payload
        },
        decrease: (state, action) => {
            state.count = state.count - action.payload
        }
    }
})


export const countReducer = countSlice.reducer

//incresae and decrease are two action creators which creates the following action objects
//{type:'countState/increase', payload:value} and {type:'countState/decrease', payload:value}
export const { increase: increaseActionCreator, decrease: decreaseActionCreator } = countSlice.actions
