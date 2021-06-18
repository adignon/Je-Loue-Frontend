import {SET_FILTERED_DATA} from "../../types";

export  const filteredDataReducer=(state=null, action)=>{
    switch(action.type){
        case SET_FILTERED_DATA:
            return action.payload;
        default :
            return state
    }
}