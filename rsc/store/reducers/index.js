import {combineReducers} from "redux";
import {datasReducers} from "./datas";
import {filterReducer} from "./filter";


export const rootReducer=combineReducers({
    //config
    //user
    //auth
    datas:datasReducers,
    filters:filterReducer
})