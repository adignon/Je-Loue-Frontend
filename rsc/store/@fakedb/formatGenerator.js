import Faker from 'faker'
import {RoomFormat} from "./format";
import {formatText} from "../../utils/utilsFunction";
import {Categories, RoomMetasLabelRecap} from "./";

export const generateFakeDatas=(format, parentContext="", generateUuid=true)=>{
    let formatedData={};
    let name;
    let contexteRegexFormat=/^.*\{*\}:/
    for(let field in format){
        if(field!=="_"){
            if(format[field].values) {
                if(parentContext && contexteRegexFormat.exec(format[field].values[0])){

                    let contextValues=format[field].values.filter(value=> {
                        let contexte=contexteRegexFormat.exec(value)[0]
                        contexte=contexte.slice(1, contexte.length - 2);
                        return contexte === parentContext
                    })
                    let value=contextValues[Math.round(Math.random() * (contextValues.length -1))]
                    formatedData[field] = value.replace(contexteRegexFormat,'')
                }else{
                    let value=format[field].values[Math.round(Math.random() * (format[field].values.length -1))];
                    formatedData[field] = value
                }
                if(field.includes('name') || field.includes('title')){
                    name=formatedData[field]
                }
            }else if(field.includes('name') || field.includes('title')) {
                if (field.includes('firstname')) {
                    formatedData[field] = Faker.name.firstName();
                } else if (field.includes('lastname')) {
                    formatedData[field] = Faker.name.lastName();
                } else {
                    formatedData[field] = Faker.lorem.words((Math.random() * 3) + 1);
                    name=formatedData[field]
                }
            }else if(field.includes('description') || field.includes('detail')){
                formatedData[field] = Faker.lorem.sentences(Math.round((Math.random() * 8)) + 1)
            }else{
                switch (format[field].type){
                    case'UUID':
                        formatedData[field]=generateUuid ? Faker.datatype.uuid() : "";
                        break;
                    case 'datetime':
                        formatedData[field]=Faker.date.betweens(new Date('2015-01-01'), new Date(), 1)[0].toString()
                        break;
                    case 'relation':
                        if(!parentContext.length){
                            formatedData[field]=generateValues(field.targetFormat())
                        }
                        break;
                    case 'string':
                        if(field.includes(('slug'))){
                            formatedData[field]=name ? Faker.helpers.slugify(name.toLowerCase()) : ""
                        }else{
                            formatedData[field]=Faker.lorem.word()
                        }
                }
            }
        }else{
            if(format[field].relation){
                formatedData[format[field].relation.relationName]=generateMultipleFakeData(format[field].relation.relationFormat(), 10, name)
            }
        }
    }
    return formatedData;
}
export const generateMultipleFakeData=(format, length, parentContext="")=>{
    let datas=[...new Array(Math.round(Math.random()*length)).fill(1)].map(o=>generateFakeDatas(format, parentContext, false));
    return Array.from(new Set([...datas.map(o=>JSON.stringify(o))])).map(o=>{
            let obj=JSON.parse(o);
            for (let i in obj){
                if(i.includes('id')){
                    obj[i]=Faker.datatype.uuid();
                }
            }
            return obj;
        })
}

export const generateRoom=(length)=>(generateMultipleFakeData(RoomFormat(), length).map(room=>({
    ...room,
    'Room_Category':Categories[Math.round(Math.random()*(Categories.length - 1))],
    'Room_echeance_jour':30,
    "Room_price":Math.round(Math.random()*(89999)).toString(),
    "RoomAdress":{
        "RoomAdress_id":Faker.datatype.uuid(),
        RoomAdress_name:"Akassato",
        RoomAdress_departement:"Atlantique",
        RoomAdress_town:"Abomey-Calavi",
        RoomAdress_home_details:"Maison Akpo",
    },
    'Room_medias':new Array(5).fill({type:"image", filename:"Capture d’écran de 2021-01-30 12-09-39.png"}),
    'RoomMetaDatas':RoomMetasLabelRecap.map(meta=>{
        let p=Math.round(Math.random()*meta.RoomMetaDatas.length);
        let d=meta.RoomMetaDatas[ p>= meta.RoomMetaDatas.length ? meta.RoomMetaDatas.length-1 : p];
        return{
            RoomMetaData_id: Faker.datatype.uuid(),
            RoomMetaData_value:d ? d.RoomMetaData_value: d,
            RoomMetaData_slug:d ? d.RoomMetaData_slug: d,
            RoomMetaData_Label:meta.RoomMetaLabel_key
        }
    })
})))