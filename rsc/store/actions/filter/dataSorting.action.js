import {SET_DATA_SORTING_FILTER} from "../../types"

export const setDataSortingFilter =(sortingValue)=>{
    return{
        type: SET_DATA_SORTING_FILTER,
        payload:sortingValue
    }
}