import React from 'react'

const useScroll=()=>{
    const [sizes, setSizes]=React.useState({scrollOffsetY: 0, scrollYHeight:0})
    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            let s=window.scrollY
            setSizes({scrollOffsetY: window.scrollY, scrollYHeight:Math.round(document.querySelector("body").getBoundingClientRect().height)})
        })
    },[])
        return sizes;
}

export default useScroll;