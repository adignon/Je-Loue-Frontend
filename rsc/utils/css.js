export const cc=(style, classes=[], startingSpace=false)=>{
    let compactClasses=''
    for(let i=0; i<classes.length; i++){
        if(i===0 && !startingSpace){
            compactClasses+=(style!==null ? style[classes[i]] : classes[i]);
        }else{
            compactClasses+=" "+(style!==null ? style[classes[i]] : classes[i]);
        }
    }
    return compactClasses;
}