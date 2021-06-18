import {ADD_ATTRIBUTE_FILTER, DELETE_ATTRIBUTE_FILTER,SET_ATTRIBUTES_FILTER} from "../../types"

export const addAttributeFilter=(attribute)=>{
    return {
        type: ADD_ATTRIBUTE_FILTER,
        payload:attribute
    }
}

export const deleteAttributeFilter=(attribute)=>{
    return {
        type: DELETE_ATTRIBUTE_FILTER,
        payload: attribute
    }
}


export const setAttributesFilter=(data)=>{
    return{
        type: SET_ATTRIBUTES_FILTER,
        payload:data
    }
}