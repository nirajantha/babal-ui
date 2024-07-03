import { Action,State } from "./CreateContext";

export const reducer = (state:State,action:Action)=>{
    switch (action.type) {
        case "PressNumber":
           console.log("state before PressNumber>>", state);
           return { ...state, number:state.number + action.payload };
            
            break;
        case "ClearNumber": 
            console.log("state>>",state);  
            return  { ...state, number: state.number.slice(0, -1) };
    
        default: return state;
            break;
    }
}