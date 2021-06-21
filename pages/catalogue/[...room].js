import React from "react";
import {BaseLayout, MainContainer, PageHeader, AccordionSection, AlertCard, Carrousel, LocationCard, RelatedRoom} from "../../rsc/components";
import {useRoomStyle} from "../../styles/pages"
import Image from "next/image";
import {Card, Typography, Container, Grid, Divider, IconButton, Table, TableRow, TableBody, TableCell, TableHead} from "@material-ui/core";
import useResize from "../../rsc/hooks/useResize";
import {MdImage, MdLocationOn, MdSchool, MdChevronLeft, MdChevronRight, MdDescription, MdPinDrop, MdClose, MdCheck} from "react-icons/md"
import {FaMapMarkedAlt} from "react-icons/fa"
import {Swiper,SwiperSlide} from "swiper/react";
import {Rooms} from '../../rsc/store/@fakedb/';
import {formatText, formatPrice, litteralDayFormat} from "../../rsc/utils/utilsFunction";
import {API_BASE_UPLOADS_BASE, API_BASE} from "../_app"
import Link from "next/link"

export default function Room({room}){
    const [dimensions, setDimensions]=React.useState({
        firstImage: null
    });
    const firstImageBoxRef=React.useRef()
    const secondImageBoxRef=React.useRef()
    const width=useResize("width")
    React.useEffect(()=>{
        /*const getFreePixelSize=(size)=>{
            return Number(size.slice(0, size.indexOf('px')))
        }*/
        setDimensions(prev=>({
            ...prev,
            firstImage: {
                width: firstImageBoxRef.current.getBoundingClientRect().width,
                height:firstImageBoxRef.current.getBoundingClientRect().height
            },
            secondImage:{
                width: secondImageBoxRef.current.getBoundingClientRect().width,
                height:secondImageBoxRef.current.getBoundingClientRect().height
            }
        }))
    },[width])
    const classes=useRoomStyle()
    const cautions=room.metas.find(meta=>meta.attribute.slug.includes('caution')) ?? []
    return (
        <BaseLayout pageTitle={"Chambre"} className={"mb-5"}>
            <PageHeader title={"Chambre à coucher avec douche interne"}/>
            <MainContainer>
                <Container>
                    <Card className={"d-flex r-3 p-1 "+classes.imgCard} elevation={2}>
                        <div className={classes.firstImageBox+" m-1 r-3"} style={{overflow:"hidden"}} ref={firstImageBoxRef}>
                            {
                                room.medias[0] && dimensions.firstImage &&
                                <Image
                                    src={API_BASE_UPLOADS_BASE+"/"+room.medias[0].filename}
                                    width={dimensions.firstImage.width}
                                    height={dimensions.firstImage.height}
                                    className={classes.img+" r-3"}
                                />
                            }
                        </div>
                        <div className={classes.secondImageBox+" m-1"} style={{overflow:"hidden"}}>
                            <div style={{height:"49%", overflow:"hidden"}} ref={secondImageBoxRef} className={"r-3 mb-3"}>
                                {
                                    room.medias[1] && dimensions.secondImage &&
                                    <Image
                                        src={API_BASE_UPLOADS_BASE+"/"+room.medias[1].filename}
                                        width={dimensions.secondImage.width}
                                        height={dimensions.secondImage.height}
                                        className={classes.img+" rl-3"}
                                    />
                                }
                            </div>
                            <div style={{height:"49%", overflow:"hidden"}} className={"r-3 mt-1"}>
                                {
                                    room.medias[2] && dimensions.secondImage &&
                                    <Image
                                        src={API_BASE_UPLOADS_BASE+"/"+room.medias[2].filename}
                                        width={dimensions.secondImage.width }
                                        height={dimensions.secondImage.height}
                                        className={classes.img+" rl-3"}
                                    />
                                }
                            </div>
                        </div>
                        <div className={classes.badge+" r-2 shadowed"}>
                            <MdImage/><Typography component={"span"} variant={"subtitle2"} className={"bolded"}>9</Typography>
                        </div>
                    </Card>
                    <div className={""}>
                        <div className={classes.leftSide}>
                            <Grid container justify={"space-between"} className={classes.roomPriceContainer}>
                                <Grid item md={8} xs={12} className={"d-flex"} style={{alignContent:"center"}}>
                                    <Typography variant={"subtitle1"} color={"secondary"}>
                                        <MdLocationOn/>
                                        {`${formatText(room.adress.adressName+", "+room.adress.town+", "+room.adress.department, formatText.FIRST_LETTERS_CAP)}`}
                                    </Typography>
                                </Grid>
                                <Grid item md={4} xs={12} className={"d-flex justify-end"} className={classes.roomPriceItem}>
                                    <Typography variant={"h5"} className={"r-2 shadowed-1 p-2 bolded-900"} style={{display: "inline"}}>
                                        {`${formatPrice(room.price)} CFA / ${litteralDayFormat(room.rentEcheanceJour)}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant={"caption"} component={"span"}  className={"px-2 py-1 bg-primary text-white bolded r-1 shadowed "}>{room.category.name.toUpperCase()}</Typography>
                            <Typography variant={'h5'} className={"bolded my-5"}>
                                {formatText(room.title, formatText.FIRST_LETTERS_CAP)}
                            </Typography>
                            <div className={"mt-10 mb-8"}>
                                <div className={"mt-4"}>
                                    <RoomDetailTitle icon={<MdDescription style={{marginBottom:"-5px"}} fontSize={"1.5rem"}/>}>Description</RoomDetailTitle>
                                    <Typography className={"mt-5"}>
                                        {room.description}
                                    </Typography>
                                </div>
                            </div>
                            {
                                cautions.length ? 
                                <AlertCard CardProps={{elevation:0}} className={classes.cautionCard+" mb-10"}> 
                                    <div className={"pb-5 pt-2"}>
                                        <Typography className={"bolded-900 "+classes.cautionTitle} variant={"subtitle1"}>Caution de Location</Typography>
                                        <div className={"d-flex justify-space-around mt-1 "+classes.cautionsContainer}>
                                             {

                                                cautions.map((caution, i)=>(
                                                    <div className={classes.cautionItem+" text-center caution-item"+(i===cautions.length - 1 ? '' : ' bordered bt-0 bl-0 bb-0')} key={i} style={{width: `calc(100% / ${cautions.length})`}}>
                                                        <Typography variant={"subtitle1"} className={"bolded"} component={"h6"}>
                                                            {caution.caution_label}
                                                        </Typography>
                                                        <Typography component={"p"} variant={"h5"} className={"bolded-900"}>
                                                            {formatPrice(Number(caution.caution_price))} CFA
                                                        </Typography>
                                                    </div>
                                                ))
                                             }
                                        </div>
                                    </div>
                                </AlertCard>
                                :
                                ""
                            }

                            <div className={"my-2"}>
                                <RoomDetailTitle icon={<MdPinDrop style={{marginBottom:"-5px"}} fontSize={"1.5rem"}/>}>Non Loin De</RoomDetailTitle>
                                <div className={"my-2 mt-5"}>
                                    <Carrousel
                                        SwiperOptions={{
                                            slidesPerView:5,
                                            breakpoints:{0:{slidesPerView:1},350:{slidesPerView:2},520:{slidesPerView:3},740:{slidesPerView:4},940:{slidesPerView:5}}
                                        }}
                                        id={"room-details-carrousel"}
                                        >
                                        {
                                            room.nearEmplacements.map((e, i)=>(
                                                <LocationCard key={i} distance={e.distance+"m"} className={"m-auto my-2"} locationName={e.name}/>
                                            ))
                                        }
                                    </Carrousel>
                                </div>
                            </div>
                            <div className={"mt-5"}>
                                <RoomDetailTitle className={"mt-2"}>Caractéristiques</RoomDetailTitle>
                                <RoomDetailsTable datas={room.metas}/>
                            </div>
                        </div>
                        <div className={""}></div>
                    </div>
                </Container>
            </MainContainer>
        </BaseLayout>
    )
}

export const RoomDetailTitle=({children, icon})=>{
    return(
        <>
            <Typography className={"bolded"} variant={"h6"} color={"primary"}>{icon}{children}</Typography>
            <Divider/>
        </>
    )
}

export const RoomDetailsTable=({className, datas, headers=['Désignation', 'Caractérique', 'Description']})=>{
    return(
            <Table className={className}>
                <TableHead>
                    <TableRow>
                        {
                            headers.map((h, i)=><TableCell><Typography key={i} className={"bolded-900"} variant={"subtitle1"}>{formatText(h, formatText.FIRST_LETTERS_CAP)}</Typography></TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        datas.filter(d=>['num', "text", 'bool'].includes(d.attribute.type.toLowerCase())).map((d,i)=>(
                            <TableRow key={i}>
                                <TableCell><Typography>{
                                    d.type==="num" ? "Nombre de"+d.attribute.name.toLowerCase() : formatText(d.attribute.name, formatText.FIRST_LETTERS_CAP)
                                }</Typography></TableCell>
                                <TableCell>
                                {
                                    typeof d.value==="boolean" ?
                                        (
                                            d.value ?
                                            <Typography> <MdCheck fontSize={"1.5rem"} style={{marginBottom:-6, color: "#00b71d"}}/>Disponible</Typography> 
                                            :
                                            <Typography><MdClose fontSize={"1.5rem"} style={{marginBottom:-6, color: "#e30000"}}/>Non disponible</Typography>
                                        )
                                        :
                                        <Typography>{formatText(String(d.value), formatText.FIRST_LETTERS_CAP)}</Typography>
                                }</TableCell>
                                <TableCell><Typography>{d.description ?? ""}</Typography></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
    )
}

export const getServerSideProps=async (context)=>{
    if(context.params.room.length===2){
        const properties=await fetch(`${API_BASE}/properties?category.slug=${context.params.room[0]}&id=${context.params.room[context.params.room.length - 1]}&fields=*,medias.*,medias.mediaType.*,category.*,adress.*,metas.*,metas.attribute.*,nearEmplacements.*, nearEmplacements.emplacementType.*`).then(r=>r.json())
        if(properties[0]){
            return{
                props:{
                    room:properties[0]
                }
            }
        }
    }
    return{
        notFound:true
    }
}

