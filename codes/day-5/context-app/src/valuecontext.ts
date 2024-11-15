import { createContext } from "react";

export type ValueContextType = {
    count: number,
    countHandler: () => void
}
export const ValueContext = createContext<ValueContextType>({
    countHandler: () => { },
    count: 0
})