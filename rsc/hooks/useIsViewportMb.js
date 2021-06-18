import useResize from "./useResize";
import {useTheme} from "@material-ui/core";
import React from "react";

export const useIsViewportMb=()=>{
    let width=useResize("width")
    const lgSize=useTheme().breakpoints.values.lg
    const isMobile=()=>width <= lgSize
    const [isMd, setIsMd]=React.useState(isMobile())
    React.useEffect(()=>{
        setIsMd(isMobile());
    },[width])
    return isMd;
}