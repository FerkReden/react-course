import { createContext, useState } from "react";


const Context = createContext(null);

//@ts-ignore
const ContextProvider = ({children}) => {

    const [trigger, setTrigger] = useState(null)

    const changeTrigger = () => {
        //@ts-ignore
        setTrigger(prev => !prev)
    }

    return (
        //@ts-ignore
        <Context.Provider value={{trigger, changeTrigger}}>
            {children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };