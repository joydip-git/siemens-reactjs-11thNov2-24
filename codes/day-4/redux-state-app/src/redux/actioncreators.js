import { actionTypes } from "./actiontypes"

export const increaseActionCreator = (value) => {
    return { type: actionTypes.INCREASE, payload: value }
}
export const decreaseActionCreator = (value) => {
    return { type: actionTypes.DECREASE, payload: value }
}