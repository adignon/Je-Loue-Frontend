import {makeStyles} from "@material-ui/core";

export const useCatalogueStyle=makeStyles((theme)=>({
    leftSection:{
        width: "22%",
        minWidth:250
    },
    leftSectionCard:{
        width: "100%",
        minWidth:250,
        maxHeight:"calc(100vh - 65px - 40px)",
        overflow:"hidden",
        overflowY: "auto"
    },
    leftCardInitialPosition:{
        position: "relative",
        top:"-30px"
    },
    leftReleasedPosition:{
        top:(props)=>props.releasedTop,
        position: "relative",
        transform:"translateY(-100%)"
    },
    rightSection:{
        width: "78%",
        maxWidth:'calc(100% - 250px)'
    },
    filterInput:{
        height: 30
    },
    filterLabel:{
        fontSize:"1rem"
    },
    pageTitle:{
        [theme.breakpoints.down("md")]:{
            fontSize: "1.3rem"
        }
    },
    pageTitleContainer:{
        padding: "2rem 0px 4rem 0px",
        [theme.breakpoints.down("md")]:{
            padding: "2rem 0px",
        }
    },
    nativeFilterSelect:{
        [theme.breakpoints.down("sm")]:{
            marginTop:10
        }
    },
    fmControllPriceRangeTextField:{
        width:"100%",
        "& > *":{
            flexDirection:"row-reverse"
        }
    },
    floatingFilterBtn:{
        position:'fixed',
        bottom:"20px",
        right:'20px',
        zIndex:1000
    },
    smFilterContainer:{
        width:"100vw",
        overflowX: "hidden"
    },
    valueLabel:{
        top:-70,
        fontSize: "0.85rem",
        left:'calc(-50% - 20px)',
        "& > span":{
            width:65,
            height:65
        }
    },
    emptyContainer:{
        height: "calc(100vh - 250px)",
        position: "relative",
        [theme.breakpoints.down('sm')]:{

        }
    },
    emptySvg:{
      width:100,
      height:100,
      [theme.breakpoints.down("sm")]:{
          height:70,
          width:70
      }
    },
    emptyDescription:{
        width:"100%",
        position: "absolute",
        transform:"translateY(-50%)",
        top:"50%",
        textAlign: "center"
    },
    cardFixedContainer:{
        height: 'calc(100vh - 65px)',
        position: 'fixed',
        width: "22%",
        minWidth:250,
        top: 65,
        "& .cardFixed":{
            width:"100%",
            top:"50%",
            transform:"translateY(-50%)"
        }
    },
    fixedReleased:{
        transform: 'translateY(-50%)'
    },
    numberFilteringBox:{
        backgroundColor:"#eee",
        padding:"0px 10px 10px 10px",
        margin:"10px 0px",
        borderRadius:5,
        position:"relative"
    },
    numberFilteringBoxCloseBtn:{
        padding:5,
        width:25,
        height:25,
        backgroundColor:"#fff !important",
        position:"absolute",
        top:0,
        right:0,
        transform:"translateX(50%)"
    },
}))