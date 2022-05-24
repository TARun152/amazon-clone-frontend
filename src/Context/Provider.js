import React, { useState } from 'react'
import { Children } from 'react'
import myContext from './Context'
export default function Provider(props) {
    const [catalogue, setcatalogue] = useState(null)
    return (
        <myContext.Provider value={{catalogue,setcatalogue}}>
            {props.Children}
        </myContext.Provider>
    )
}
