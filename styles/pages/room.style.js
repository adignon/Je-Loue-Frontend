import {makeStyles} from "@material-ui/core";
export const useRoomStyle=makeStyles(theme=>({
    firstImageBox:{
        width:"70%",
        height:500 - 40,
        [theme.breakpoints.down("md")]:{
            height:450 - 40
        },
        [theme.breakpoints.down("sm")]:{
            height:'calc(350px - 40px)'
        },
        [theme.breakpoints.down("xs")]:{
            height:'calc(250px - 40px)',
            width:"100%"
        }
    },
    secondImageBox:{
        width:"30%",
        height:500 - 40,
        [theme.breakpoints.down("md")]:{
            height:'calc(450px - 40px)'
        },
        [theme.breakpoints.down("sm")]:{
            height:'calc(350px - 40px)'
        },
        [theme.breakpoints.down("xs")]:{
            display: "none"
        }
    },
    imgCard:{
        maxHeight:500,
        height:"auto",
        position:"relative",
        top:-25,
    },
    img:{
        width:"100%",
        objectFit:"cover"
    },
    badge:{
        bottom:"5%",
        right:"2.5%",
        backgroundColor:"#4d4d4dba",
        color:"#fff",
        position:"absolute",
        display:"inline-flex",
        alignItems:"center",
        width:50,
        justifyContent:"space-evenly"
    },
    leftSide:{
        width:"70%",
        [theme.breakpoints.down("sm")]:{
            width:"100%"
        }
    },
    rightSide:{
        width:"30%",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    price:{
        backgroundColor:theme.palette.secondary.main
    },
    locationCarousel:{
        "& .swiper-slide":{
            width:"calc(100% / 4) !important"
        }
    },
    roomPriceContainer:{
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column-reverse"
        }
    },
    roomPriceItem:{
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom:"0.5rem"
        }
    },
    cautionsContainer:{
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column",
        }
    },
    cautionItem:{
        borderColor: "#4d4d4d38",
        [theme.breakpoints.down('sm')]:{
            width: "70% !important",
            border:0,
            padding:"0.5rem 0px",
            margin:"0 auto",
            borderBottom: "1px solid #4d4d4d38 !important"
        },
        "&:last-child":{
            border: "none !important"
        }
    },
    cautionCard:{
        [theme.breakpoints.down('sm')]:{
            display: "flex", 
            flexDirection:"column !important",
        },
        '& > div:first-child':{
            justifyContent:"center"
        }
    },
    cautionTitle:{
        [theme.breakpoints.down('sm')]:{
            textAlign: "center"
        }
    }
}))