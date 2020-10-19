import React, {useReducer} from "react";

export default (state,action) => {
    switch (action.type) {
        case "Change_State": 
    return action.payload

    
    case "Add_Transaction":
        return{
            ...state, transaction:[action.payload, ...state.transaction]
        }
        default:
            return state; }

// return state;


    
}