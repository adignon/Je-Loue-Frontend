import {makeStyles, Typography, Card} from "@material-ui/core";
import {MdInfo} from "react-icons/md";

const useStyles=makeStyles(theme=>({
    warningCard:{
        backgroundColor:"#abd6e3",
        overflow:"hidden"
    }
}))
export const AlertCard=({type="warning", leftIcon=true, CardProps, children, className})=>{
    const classes=useStyles()
    return(
        <Card className={" r-2 my-2 d-flex "+classes[`${type}Card`]+" "+(CardProps.className ?? "")+" "+(className ?? "")} style={{flexDirection:"row"}} {...CardProps} >
            {
                leftIcon &&
                <div style={{backgroundColor:"rgb(163, 201, 213)", alignItems:"center"}} className={"d-flex p-2"}>
                    <MdInfo style={{fontSize:"1.5rem"}}/>
                </div>
            }
            <div className={"p-4 w-full"}>
                {children}
            </div>
        </Card>
    )
}