import { useDispatch, useSelector } from "react-redux";
import { RootStateType, StoreDispatchType } from "./store";

export const useAppStoreSelector = useSelector.withTypes<RootStateType>()
export const useAppStoreDispatch = useDispatch.withTypes<StoreDispatchType>()