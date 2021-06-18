import {makeStyles} from "@material-ui/core";

export const usePropertyWidgetStyle=makeStyles(theme=>({
    card:{
        maxWidth:600
    },
    cardMedia:{
        minWidth:200,
        minHeight:100,
        maxHeight:200
    },
    cardImg:{
        objectFit:"cover",
    },
    cardDetails:{
        position: "relative"
    },
    cardLike:{
        position: "absolute",
        top: 0,
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "#fff !important",
        boxShadow: "0px -3px 5px #00000040",
        right: 20

    },
    cardPrice:{
        background: "var(--secondary-color)",
        color: "#fff",
        display: "inline"
    },
    placeIcon:{
        width: "1.2rem",
        height: "1.2rem",
        marginBottom: -3
    },
    CcardMainBtn:{
        
    }
}))