import { createContext,useState } from 'react'
export const BasketContext=createContext()

export const BasketContextprovider=(props)=> {
    const [basket, setbasket] = useState([])
    return (
        <BasketContext.Provider value={{basket,setbasket}}>
            {props.children}
        </BasketContext.Provider>
    )
}

