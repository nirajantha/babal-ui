import { Action,State } from "./CreateContext";

export const reducer = (state:State,action:Action)=>{
    switch (action.type) {
        case "PressNumber":
   
           return { ...state, number:state.number + action.payload };
            
            break;
        case "ClearNumber": 
           
            return  { ...state, number: state.number.slice(0, -1) };
    
        default: return state;
            break;
    }
}