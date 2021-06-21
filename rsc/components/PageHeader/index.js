import {MainContainer} from "../Layout";
import {Typography, Grid, Button, Container} from "@material-ui/core";
import {MdArrowBack} from "react-icons/md";
import {usePageHeaderStyle} from "./pageHeader.style";

export const PageHeader=({returns=true, returnLabel="Retour",title, children})=>{
    const classes=usePageHeaderStyle({returns})
    return (
        <MainContainer style={{backgroundColor:"var(--primary-color)", paddingBottom:20}}>
            <Container>
                <div className={"py-5"} style={{paddingBottom:"40px !important"}}>
                    <Grid container justify={"space-between"} className={""}>
                        {
                            returns &&
                            <Grid item>
                                <Button startIcon={<MdArrowBack/>} className={"text-white"}>
                                    {returnLabel}
                                </Button>
                            </Grid>
                        }
                        <Grid item>
                            <Typography variant={"h6"} className={"text-white py-2 "+classes.pageTitle}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    {children}
                </div>
            </Container>
        </MainContainer>
    )
}