import * as TYPES from "../../types/filter";

export const setAttributes=(metas=[])=>{
    return{
        type:TYPES.SET_ATTRIBUTES,
        payload:metas
    }
}