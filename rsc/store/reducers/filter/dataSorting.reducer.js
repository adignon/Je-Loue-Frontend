import {SET_DATA_SORTING_FILTER} from "../../types";

export const dataSortingReducer=(state= {}, action)=>{
    switch (action.type){
        case SET_DATA_SORTING_FILTER:
            return action.payload;
        default:
            return state;
    }
}