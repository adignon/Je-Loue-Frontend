import {roomAttributesReducer} from './roomAttributes.reducer';
import {dataSortingReducer} from "./dataSorting.reducer";
import {priceFilterReducer} from "./priceFilter.reducer";
import {categoryFilterReducer} from "./category.reducer";
import {filterSideReducer} from "./filterSide.reducer"
import {combineReducers} from "redux";

export const filterReducer=combineReducers({
    filterSide:filterSideReducer,
    roomAttributes:roomAttributesReducer,
    dataSorting:dataSortingReducer,
    price:priceFilterReducer,
    category: categoryFilterReducer
})