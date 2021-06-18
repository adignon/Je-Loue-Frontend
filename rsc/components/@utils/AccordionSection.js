import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import {MdExpandMore} from "react-icons/md"

const useAccordionSectionStyle=makeStyles(theme=>({
    collapseBtnExpended:{
        minHeight:"20px !important",
        height:40
    }
}))

export const AccordionSection=({title, children, isInitiallyExpended = false})=>{
    const [expended, setExpended] = React.useState(isInitiallyExpended)
    const classes = useAccordionSectionStyle()
    const handleExpension = () => {
        setExpended(prev => !prev)
    }
    return (
        <Accordion
            elevation={0}
            classes={{
                expanded: "m-0"
            }}
            expanded={expended}
        >
            <AccordionSummary
                expandIcon={<MdExpandMore width={25}/>}
                classes={{
                    root: classes.collapseBtnExpended
                }}
                className={"m-0"}
                onClick={handleExpension}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails className={"ml-2"}>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}