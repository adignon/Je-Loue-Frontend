import {SET_CATEGORY_FILTER} from "../../types"

export const categoryFilterReducer=(state={}, action)=>{
    switch (action.type){
        case SET_CATEGORY_FILTER:
            return action.payload;
        default:
            return state;
    }
}