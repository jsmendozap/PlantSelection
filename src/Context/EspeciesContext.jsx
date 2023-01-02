import { createContext, useContext } from 'react'

export const especiesContext = createContext(null); 

export const useEspecies = () => {
    return useContext(especiesContext)
}