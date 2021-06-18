import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import {useForm} from "../../hooks/useForm";


export const SelectMui=({id, title, selectProps, initialValue, options, className, onChange})=>{
    const [form, handleForm]=useForm({[selectProps.name]: initialValue ?? ""})
    const {id:selectId, name:selectName, className:selectClassName, style:selectStyle,...selectProp}=selectProps;
    React.useEffect(()=>{
        if(onChange instanceof Function) onChange(form[selectProps.name])
    },[form])
    return(
        <FormControl className={className ? className : ''} {...selectProp} style={selectStyle ?? {}}>
            <InputLabel id={id}>{title}</InputLabel>
            <Select
                labelId={id}
                id={selectProps.id}
                inputProps={{
                    name: selectProps.name
                }}
                value={form[selectProps.name]}
                onChange={(e)=>handleForm(e)}
                className={selectClassName ?? ""}
            >

                {
                    options.map((option, i)=>(
                        <MenuItem value={option.value} key={i}>
                            {option.title}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}
