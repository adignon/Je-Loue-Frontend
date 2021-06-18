import {combineReducers} from "redux";
import {categoriesReducer} from "./categories.reducer";
import {propertiesReducer} from "./properties.reducer";
import {attributesReducer} from "./attributes.reducer";
import {filteredDataReducer} from "./dataFiltered.reducer";
import {priceRangeReducer} from "./priceRange.reducer"

export const datasReducers=combineReducers({
    filteredProperties:filteredDataReducer,
    categories: categoriesReducer,
    properties:propertiesReducer,
    attributes:attributesReducer,
    priceRange:priceRangeReducer
})