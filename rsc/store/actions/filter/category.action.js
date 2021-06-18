import * as TYPES from "../../types" ;

export const setCategoryFilter=(category)=>{
    return({
        type: TYPES.SET_CATEGORY_FILTER,
        payload:category
    })
}