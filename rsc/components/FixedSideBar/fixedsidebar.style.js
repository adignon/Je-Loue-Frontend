import {makeStyles} from "@material-ui/core";

export const useFixedSideBarStyle=makeStyles(theme=>({
    container:{
        position: 'fixed',
        minWidth:250,
        "& .cardFixed":{
            width:"100%",
            top:"50%",
            transform:"translateY(-50%)",
            position:"absolute",
            "& > *":{
                width: "100% !important"
            }
        }
    }
}))