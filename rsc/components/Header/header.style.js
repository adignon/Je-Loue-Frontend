import {makeStyles} from "@material-ui/core";

export const useHeaderStyles=makeStyles(theme=>({
    appBar:{
        borderBottom:"1px solid #ccc"
    },
    toolbar:{
        height:65,
        minHeight:65,
        background:"#fff",
        minWidth:300,
        [theme.breakpoints.down('md')]:{
            minHeight:60,
            height:60
        }
    },
    logo:{
        fontFamily:"Lato-Bold, sans-serif",
        [theme.breakpoints.down('md')]:{
            fontSize:"1.3rem"
        }
    },
    logoLink:{
        width:80,
        [theme.breakpoints.down('md')]:{
            width:110
        }
    },
    iconButton:{
        boxShadow:theme.shadows[1],
        color:theme.palette.secondary.main,
        "&:hover":{
            background:theme.palette.secondary.main,
            color:"#fff"
        }
    },
    textField:{
        width:"100%"
    },
    textFieldInput:{
        overflow:"hidden",
        textOverflow:"ellipsis"
    },
    drawer: {
        width: "80%"
    },
    btnlink:{
        fontFamily:"OpenSans-Regular, sans-serif",
        fontSize:'1rem',
        color:theme.palette.black,
        "&:hover":{
            background:"#92cfec2e"
        },
        "&.active":{
            background:"#92cfec2e"
        }
    },
    nestedLink:{
        fontSize:"0.9rem"
    }
}))