import { actionTypes } from "./actiontypes";

//state
const initialCountState = {
    count: 0
}

//reducer => create an updated state and return that state
export const countReducer = (state = initialCountState, action) => {
    let countState;
    switch (action.type) {
        case actionTypes.INCREASE:
            countState = {
                ...state,
                count: state.count + action.payload
            }
            break;

        case actionTypes.DECREASE:
            countState = {
                ...state,
                count: state.count - action.payload
            }
            break;

        default:
            countState = {
                ...state
            }
            break;
    }
    return countState
}