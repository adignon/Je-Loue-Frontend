import React from 'react';
import {useFixedSideBarStyle} from "./fixedsidebar.style"

export const FixedSideBar=({containerStyle={width:"20%", height:"calc(100vh - 65px)", top:65}, children})=>{
    const classes=useFixedSideBarStyle()
    return(
        <div style={{width:containerStyle.width, height:containerStyle.height, top:containerStyle.top}} className={classes.container}>
            <div className={"cardFixed"}>
                {children}
            </div>
        </div>
    )
}