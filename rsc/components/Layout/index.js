import React from 'react';
import Head from "next/head";
import {Header} from "../";
import {Container, useTheme} from "@material-ui/core";
import {useIsViewportMb} from "../../hooks/useIsViewportMb";

export const BaseLayout=({pageTitle, children, className, headerProps={}})=>{
    const isMb=useIsViewportMb()
    return(
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Header  {...headerProps}/>
            <MainContainer style={{padding:0,margin: `${(isMb?60:65)}px 0px 0px 0px`}} className={className}>{children}</MainContainer>
        </>
    )
}

export const MainContainer=({children, padding=20, className, ...props})=>{
    const propsStyles={
        style:{
            maxWidth:1370,
            ...props.style
        }
    }
    return(
        <Container {...props} className={className ? className : ""} {...propsStyles}>
            {children}
        </Container>
    )
}