import { useDispatch, useSelector } from "react-redux"
import { AppStateType, StoreDispatchType } from "./store"

export const useAppStoreDispatch = useDispatch.withTypes<StoreDispatchType>()
export const useAppStoreSelector = useSelector.withTypes<AppStateType>()