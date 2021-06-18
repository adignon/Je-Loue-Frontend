import * as TYPES from '../../types';

export const propertiesReducer=(state=[], action)=>{
    switch(action.type){
        case TYPES.SET_PROPERTIES:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}