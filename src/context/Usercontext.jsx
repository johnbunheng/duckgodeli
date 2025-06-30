import React, { createContext, useState } from "react";
import { Food } from "../food.";
export const dataContext = createContext()
const Usercontext = ({children}) => {
    let [cate,setCate] = useState(Food)
    let [input,setInput] = useState("")
    let [showcard,setShowcard] = useState(false)

    let data = {input,setInput,cate,setCate,showcard,setShowcard}
    return ( 
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
     );
}
 
export default Usercontext;