import * as TYPES from '../../types/datas/categories.type'

export const categoriesReducer=(state=[], action)=>{
    switch (action.type){
        case TYPES.SET_CATEGORIES:
            return [...action.payload];
        default:
            return state;
    }
}