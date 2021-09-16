import { createContext, useState } from "react";

export const DataItemContext = createContext();

export const DataItemProvider = ({children}) => {

    const [buyItems, setBuyItems] = useState(0);
    const [ totalValue, setTotalValue ] = useState(0);

    return(
        <DataItemContext.Provider value={{buyItems, setBuyItems, totalValue, setTotalValue}}>
            {children}
        </DataItemContext.Provider>
    )
}