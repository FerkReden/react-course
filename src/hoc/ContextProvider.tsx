import { createContext } from "react";

const Context = createContext(null);

//@ts-ignore
const ContextProvider = ({children}) => {

    return (
        <div>
            <Context.Provider
            //@ts-ignore
            value={'hahahahah'}>
                {children}
            </Context.Provider>
        </div>
    )
};

export { ContextProvider, Context };