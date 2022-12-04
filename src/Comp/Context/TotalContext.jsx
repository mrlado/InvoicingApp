import React, { createContext, useEffect, useReducer, useState } from 'react'





export const TotalContext = createContext()


export const TotalProvider = ({children}) =>{
const [totalS , setTotal] = useState ([])



return <TotalContext.Provider value={{totalS , setTotal}}>
    {children}
        </TotalContext.Provider>
}