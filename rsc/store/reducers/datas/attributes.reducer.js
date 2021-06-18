import * as TYPES  from "../../types"

export const attributesReducer=(state=[], action)=>{
    switch (action.type){
        case TYPES.SET_ATTRIBUTES:
            return action.payload;
        default:
            return state;
    }
}