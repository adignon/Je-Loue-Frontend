import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    TextField,
    IconButton,
    Paper,
    ListItem,
    List,
    ListItemText,
    ListItemIcon,
    SwipeableDrawer,
    Collapse, useTheme,
    Container
} from "@material-ui/core"
import {MdMenu, MdSearch} from 'react-icons/md'
import {FiChevronDown, FiHeart, FiHome, FiLogOut, FiUser} from "react-icons/fi";
import {useHeaderStyles} from "./header.style";
import Link from "next/link"
import {cc} from "../../utils/css";
import style from "./header.module.scss";
import {useRouter} from "next/router";
import {useIsViewportMb} from "../../hooks/useIsViewportMb";


export const Header=({showMenu=true})=>{
    const classes=useHeaderStyles({});
    const isMb=useIsViewportMb()
    const router=useRouter()
    return(
        <AppBar elevation={0} className={classes.appBar}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Link href={"/"}>
                        <a className={classes.logoLink}>
                            <LogoText/>
                        </a>
                    </Link>

                    <Grid container justify={(isMb ? "center":(showMenu ? "flex-end" : "flex-start"))}>
                        <Grid item md={isMb ? 10 : false} lg={3}>
                            <div className={style['d-flex']}>
                                <TextField
                                    placeholder={"Rechercher une ville..."}
                                    className={
                                        cc(style, ['mr-0', "ml-5", "mt-2"])
                                        +cc(null, [classes.textField], true)
                                    }
                                    inputProps={{
                                        className:classes.textFieldInput
                                    }}
                                />
                                <IconButton className={classes.iconButton} >
                                    <MdSearch/>
                                </IconButton>
                            </div>
                        </Grid>
                        {
                            !isMb && showMenu
                            &&
                            <Grid item container spacing={3} md={9} justify={"flex-end"} style={{alignContent:"center"}}>

                                <Grid item className={cc(style, ["d-flex"])}>
                                    <Button className={
                                        cc(style,['text-capitalize'])
                                        +cc(null, [classes.btnlink], true)
                                        +(router.pathname==="/catalogue" ? " active":"")
                                    }>
                                        <Link href={"/catalogue"}>
                                            <a>Catalogue</a>
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item className={cc(style, ["d-flex"])}>
                                    <Button className={
                                        cc(style,['text-capitalize'])
                                        +cc(null, [classes.btnlink], true)
                                        +(router.pathname==="/comment-ca-marche" ? " active":"")
                                    }>
                                        <Link href={"/comment-ca-marche"}>
                                            <a>Comment ça marche</a>
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item className={cc(style, ["d-flex"])}>
                                    <IconButton 
                                        color={"secondary"}
                                        className={""}
                                        style={{padding:"0.4rem"}}
                                    >
                                        <FiUser width={25}/>
                                    </IconButton>
                                </Grid>
                                {/*
                                <Grid item className={cc(style, ["d-flex"])}>
                                    <div className={style.nestedMenuContainer}>
                                        <Button
                                            className={
                                                cc(style,['text-capitalize'])
                                                +cc(null, [classes.btnlink], true)
                                            }
                                            startIcon={<FiUser width={25}/> }
                                            variant={"outlined"}
                                            color={"primary"}
                                            endIcon={<FiChevronDown width={25}/>}
                                        >
                                            Mon Compte
                                        </Button>
                                        <Paper className={cc(style, ['nestedMenu', "arrow", "arrow-top-right", "right-0","top-120", "shadowed-1"])}>
                                            <List className={cc(style, ['p-0'])}>
                                                <ListItem
                                                    button
                                                    className={cc(style, ['px-6', "py-1", "pr-7"])+cc(null, [classes.btnlink], true)}
                                                >
                                                    <ListItemIcon style={{minWidth:30}}><FiHome width={25}/> </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{
                                                        classes:{
                                                            root:classes.nestedLink
                                                        }
                                                    }}>
                                                        Dashboard
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem button className={cc(style, ['px-6', "py-1", "pr-7"])+cc(null, [classes.btnlink], true)}>
                                                    <ListItemIcon style={{minWidth:30}}><FiHeart width={25}/> </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{
                                                        classes:{
                                                            root:classes.nestedLink
                                                        }
                                                    }}>Mes Favoris</ListItemText>
                                                </ListItem>
                                                <ListItem button className={cc(style, ['px-6', "py-1", "pr-7"])+cc(null, [classes.btnlink], true)}>
                                                    <ListItemIcon style={{minWidth:30}}><FiLogOut width={25}/> </ListItemIcon>
                                                    <ListItemText primaryTypographyProps={{
                                                        classes:{
                                                            root:classes.nestedLink
                                                        }
                                                    }}>Deconnexion</ListItemText>
                                                </ListItem>
                                            </List>
                                        </Paper>
                                    </div>
                                </Grid>
                                */}
                            </Grid>
                        }
                    </Grid>
                    {
                        isMb && showMenu
                        &&
                        <>
                            <SmMenu/>
                        </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export const LogoText=({children, ...props})=>{
    const classes=useHeaderStyles()
    return (
        <Typography variant={"h5"} className={classes.logo} {...props}>
            <span className={"text-primary"}>Je</span><span className={"text-secondary"}>Loue</span>
        </Typography>
    )
}

const SmMenu=()=>{
    const classes=useHeaderStyles()
    const [open, setOpen]=React.useState(false)
    const handleOpen=()=>{
        setOpen(prev=>!prev);
    }
    const route=useRouter()
    return(
        <>
            <IconButton onClick={handleOpen}>
                <MdMenu width={25}/>
            </IconButton>
            <SwipeableDrawer anchor={"left"} onClose={handleOpen} onOpen={handleOpen} open={open} PaperProps={{
                className:classes.drawer
            }}>
                <Link href={"/"}>
                    <a>
                        <Typography variant={"h6"} className={cc(style, ['px-5', "py-2", "bordered", "bt-0", 'br-0', 'bl-0'])}>
                            <span className={style['text-primary']}>Je</span>
                            <span className={style['text-secondary']}>Loue</span>
                        </Typography>
                    </a>
                </Link>
                <List>
                    <ListItem  button className={cc(style,['py-1', 'pl-11',"pr-2"])}>
                        <ListItemText>
                            <Link href={"/catalogue"}>
                                <a>Catalogue</a>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem  button className={cc(style,['py-1', 'pl-11',"pr-2"])}>
                        <ListItemText>Comment ça marche ?</ListItemText>
                    </ListItem>
                    <ListItem  button className={cc(style,['py-1', 'pl-4',"pr-2", "bg-secondary", "text-white", "shadowed-1", "r-1"])}>
                        <ListItemIcon style={{minWidth:30}}><FiUser width={25} className={"text-white"}/> </ListItemIcon>
                        <ListItemText>S'inscrire/Se Connecter</ListItemText>
                    </ListItem>
                    {/*
                    <SmNestedMenu topButtonLeftIcon={<FiUser width={25}/>} topButtonTitle={"Mon Compte"}>
                        <ListItem  button className={cc(style,['py-1', "pl-8"])}>
                            <ListItemIcon style={{minWidth:30}}><FiHome width={25}/> </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItem>
                        <ListItem  button className={cc(style,['py-1', "pl-8"])}>
                            <ListItemIcon style={{minWidth:30}}><FiHeart width={25}/> </ListItemIcon>
                            <ListItemText>Mes Favoris</ListItemText>
                        </ListItem>
                        <ListItem  button className={cc(style,['py-1', "pl-8"])}>
                            <ListItemIcon style={{minWidth:30}}><FiLogOut width={25}/> </ListItemIcon>
                            <ListItemText>Deconnexion</ListItemText>
                        </ListItem>
                    </SmNestedMenu>
                    */}
                    
                </List>
            </SwipeableDrawer>
        </>
    )
}

const SmNestedMenu=({topButtonTitle, topButtonLeftIcon,children})=>{
    const [open, setOpen]=React.useState(false)
    const handleOpen=()=>{
        setOpen(prev=>!prev);
    }
    return(
        <div>
            <ListItem  button className={cc(style,['py-1', "pl-4", 'nested-menu-sm-btn'])+" "+(open ? style['open']: "") } onClick={handleOpen}>
                <ListItemIcon style={{minWidth:30}}>{topButtonLeftIcon} </ListItemIcon>
                <ListItemText>{topButtonTitle}</ListItemText>
                <ListItemIcon style={{minWidth:30}} ><FiChevronDown width={25} className={style['icon-right']}/> </ListItemIcon>
            </ListItem>
            <Collapse in={open}>
                <List className={cc(style,['ml-5', 'bordered', "br-0", "bt-0", 'bb-0'])}>
                    {children}
                </List>
            </Collapse>
        </div>
    )
}