import React, {useState} from 'react';


export const useForm=(formDatas={})=>{
    const [form, setForm]=React.useState(formDatas);
    const handleForm=function (e, value, name){
        const target=e.target ? e.target: e.currentTarget;
        if(value){
            setForm(prev=>({...prev, [(name ?? target.name)]: value}))
        }else{
            if(target.hasOwnProperty("checked"))
                setForm(prev=>({...prev, [name ?? target.name]: target.checked}))
            else
                setForm(prev=>({...prev, [name ?? target.name]: target.value}))
        }
    }
    return [form, handleForm];
}