import * as TYPES from "../../types"

export const filterSideReducer=(state="client", action)=>{
    switch(state){
        case TYPES.SET_FILTER_SIDE:
            return ['client', 'server'].includes(action.type.toLowerCase()) ? action.type : state;
        default:
            return state;
    }
}