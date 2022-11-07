import { createContext, useContext } from "react";

export const TotalContext = createContext(null);

export const useTotal = () => {
    return useContext(TotalContext)
};