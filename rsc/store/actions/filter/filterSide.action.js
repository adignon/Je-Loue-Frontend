import * as TYPES from "../../types/filter";

export const setFilterSide=(side="")=>{
    return{
        type:TYPES.SET_FILTER_SIDE,
        payload:side
    }
}