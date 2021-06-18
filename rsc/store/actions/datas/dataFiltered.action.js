import {SET_FILTERED_DATA} from "../../types/datas";

export const setDataFiltered=(data)=>{
    return{
        type: SET_FILTERED_DATA,
        payload:data
    }
}