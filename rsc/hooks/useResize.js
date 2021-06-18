import React from 'react';

const useResize=(type="")=>{
    const [size, setSize]=React.useState({width:null,height:null})
    React.useEffect(()=>{
        if(size.width===null && size.height===null){
            setSize({width: window.innerWidth, height: window.innerHeight})
        }
        const eventHandler=function (e){
            setSize({width: window.innerWidth, height: window.innerHeight})
        }
        window.addEventListener('resize',eventHandler)
        return ()=>window.removeEventListener('resize', eventHandler);
    }, [])
    if(typeof window!=="undefined")
        return type==="width" ? size.width : type==="height" ? size.height : size;
    else
        return null;
}

export default useResize;