import React from 'react';
import {MdLocationOn, MdSchool} from "react-icons/md";
import {Typography, Card} from "@material-ui/core";
import {FaMapMarkedAlt, FaSchool, FaRegBuilding} from "react-icons/fa";

export const LocationCard=React.forwardRef(({locationType="school", locationName, distance, className, CardProps}, ref)=>{
    let locationTypeIcon;
    switch (locationType){
        case "school":
            locationTypeIcon=<MdSchool fontSize={'4rem'}  className={"center-absolute"}/>
            break;
        default:
            locationTypeIcon=<FaRegBuilding fontSize={'4rem'} className={"center-absolute"}/>
            break;
    }
    return(
        <Card style={{width: 150}} className={"r-2"+(className ? " "+className: "")} {...CardProps} ref={ref}>
            <div style={{height:100, width:"auto", backgroundColor:"#eee", position:"relative"}} className={"rt-2"}>
                <div style={{position:"absolute", top:5, left: 5, width:"1.5rem", height:"1.5rem", backgroundColor:"#fff"}} className={"r-3 shadowed"}>
                    <MdLocationOn className={"center-absolute"}/>
                </div>
                {locationTypeIcon}
            </div>
            <div className={"mt-1 p-2"}>
                <Typography variant={"subtitle1"} className={"bolded-900"} style={{lineHeight:1.2}}>
                    {locationName}
                </Typography>
                <Typography variant={"subtitle2"} className={"text-right"} component={"p"}>
                    <FaMapMarkedAlt className={"mx-2"}/>A  {distance}
                </Typography>
            </div>
        </Card>
    )
})