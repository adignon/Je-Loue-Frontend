export const formatText=(data, format)=>{
    if(data && data.toLowerCase().replaceAll){
        let spacedDataFormat=data.toLowerCase().replaceAll('_', " ");
        switch (format){
            case "first-letter-cap":
                return spacedDataFormat[0].toUpperCase()+spacedDataFormat.slice(1);
            case "first-letters-cap":
                return spacedDataFormat.split(' ').map(d=>formatText(d, "first-letter-cap")).join(' ');
            default:
                return spacedDataFormat;
        }
    }
    return data;
}
formatText.FIRST_LETTER_CAP="first-letter-cap";
formatText.FIRST_LETTERS_CAP="first-letters-cap"

export const formatPrice=(value, separator=" ")=>(value.toString().split(separator).length > 1 ? value : value.toString().split("").reverse().map((a, i)=>((i+1)%3===0) ? separator+a : a).reverse().join(''))

export const litteralDayFormat=(days=0)=>{
    if(days === 30)return "Mois"; else if(days ===90) return "Trimestre"; else if(days ===180) return "Semestre"; else if(days ===360) return "An"; else return `Jour${days > 1 ? "s" : ""}`
}