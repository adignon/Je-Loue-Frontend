import {SET_PRICE_RANGE, LOAD_PRICE_RANGE} from "../../types";
export const  priceRangeReducer=(state={}, action)=>{
	switch(action.type){
		case SET_PRICE_RANGE:
			return action.payload
		case LOAD_PRICE_RANGE:
			return null;
		default :
			return state;
	}
}