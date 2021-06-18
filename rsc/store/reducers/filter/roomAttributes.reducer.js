import {ADD_ATTRIBUTE_FILTER, DELETE_ATTRIBUTE_FILTER,SET_ATTRIBUTES_FILTER} from "../../types";

export const roomAttributesReducer=(state={}, action)=>{
    switch (action.type) {
        case ADD_ATTRIBUTE_FILTER:
            return {...state, ...action.payload};
        case SET_ATTRIBUTES_FILTER:
            return action.payload
        case DELETE_ATTRIBUTE_FILTER:
            let newState={}
            for(let attribute in state){
                if(attribute!==Object.keys(action.payload)[0]){
                    newState[attribute]=state[attribute]
                }
            }
            return newState;
        default:
            return state;
    }
}