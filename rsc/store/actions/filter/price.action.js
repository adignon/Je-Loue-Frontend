import {SET_PRICE_FILTER} from '../../types';

export const setPriceFilter=({min, max})=>{
    return{
        type:SET_PRICE_FILTER,
        payload:{min, max}
    }
}