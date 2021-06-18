import {SET_PRICE_RANGE, LOAD_PRICE_RANGE} from "../../types/filter"
export const setPriceRange=(priceRange)=>{
	return{
		type:SET_PRICE_RANGE,
		payload: priceRange
	}
}

export const loadPriceRange=()=>({type: LOAD_PRICE_RANGE})