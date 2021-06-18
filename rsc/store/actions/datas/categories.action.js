import * as TYPES from '../../types/datas/categories.type'

export const loadingCategories=()=>{
    return {
        type: TYPES.LOADING_CATEGORIES
    }
}

export const setCategories=(datas)=>({
    type: TYPES.SET_CATEGORIES,
    payload: datas
})
