import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={
    
    code:"pk",
    name:"pakistan"

}

export const GlobalContext =createContext(initialState);


export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
 
 
 let ChangeState = (code)=>{
dispatch(
    {
        type: "Change_State",
        payload: code
        
    }
    );
    console.log("Global ke yaha ",code)

 }

    return(
        <GlobalContext.Provider value={

            {
                // transactions: state.transaction
                CodeName: state,
                ChangeState

                
            }
            
        } >
            {children}</GlobalContext.Provider>

    );

}


