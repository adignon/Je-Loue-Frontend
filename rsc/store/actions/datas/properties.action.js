import * as TYPES from "../../types";
import {LOADING_PROPERTIES, SET_PROPERTIES} from "../../types";

export const setProperties=(datas)=>{
    return{
        type: TYPES.SET_PROPERTIES,
        payload:datas
    }
}

export const loadProperty=()=>{
    return{
        type: TYPES.LOADING_PROPERTIES
    }
}