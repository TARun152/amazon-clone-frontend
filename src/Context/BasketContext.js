import { createContext,useState } from 'react'
export const BasketContext=createContext()

export const BasketContextprovider=(props)=> {
    const [basket, setbasket] = useState([])
    const [user, setuser] = useState(null)
    const [cartLength, setcartLength] = useState(0)
    return (
        <BasketContext.Provider value={{basket,setbasket,user,setuser,cartLength,setcartLength}}>
            {props.children}
        </BasketContext.Provider>
    )
}

