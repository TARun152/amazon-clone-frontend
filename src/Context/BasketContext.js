import { createContext,useState } from 'react'
export const BasketContext=createContext()

export const BasketContextprovider=(props)=> {
    const [basket, setbasket] = useState([])
    const [user, setuser] = useState(null)
    return (
        <BasketContext.Provider value={{basket,setbasket,user,setuser}}>
            {props.children}
        </BasketContext.Provider>
    )
}

