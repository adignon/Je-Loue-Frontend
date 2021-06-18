import React from "react";
import {Card, CardMedia, Grid, IconButton, Typography, Button, CardActions} from "@material-ui/core";
import Image from "next/image";
import {SwiperSlide, Swiper} from "swiper/react"
import SwiperCore, {Navigation, Pagination} from "swiper";
import {IoMdHeart} from "react-icons/io";
import {MdPlace} from 'react-icons/md';
import useResize from "../../hooks/useResize";
import {formatPrice, formatText, litteralDayFormat} from "../../utils/utilsFunction";
import {usePropertyWidgetStyle} from "./propertyWidget.style";
import {API_BASE_UPLOADS_BASE} from "../../../pages/_app"
import Link from "next/link"


SwiperCore.use([Navigation, Pagination])

export const PropertyWidget=({property, className, props})=>{

    const width=useResize("width")
    const classes=usePropertyWidgetStyle()
    const cardRef=React.useRef()
    const [imageWidth, setImageWidth]=React.useState(0);
    React.useEffect(()=>{
        setImageWidth(cardRef.current.getBoundingClientRect().width)
    },[width])
    return(
        <Card 
            classes={{
            root: classes.card
            }} 
            className={"shadowed-1"+(className ? ' '+className :className)}
            {...props}
        >
            <CardMedia className={classes.cardMedia+" r-2"} ref={cardRef}>
                <Swiper
                    navigation
                    pagination={{clickable:true}}
                    slidesPerView={1}
                >
                    {
                        property.medias.filter(media=>media.mediaType.mimeType.includes("image") || media.mediaType.mimeType.includes("img")).map((media, i)=>(
                            <SwiperSlide key={i}>
                                <div style={{minWidth:300, width: imageWidth}} className={"r-2"}>
                                    <Image
                                        src={`${API_BASE_UPLOADS_BASE}/${media.title}`}
                                        width={imageWidth}
                                        height={200}
                                        className={classes.cardImg+" r-1"}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CardMedia>
            <div className={classes.cardDetails}>
                <IconButton className={classes.cardLike}>
                    <IoMdHeart width={25}/>
                </IconButton>
                <div className={"p-2"}>
                    <div>
                        <Typography className={"bolded-900 r-2 shadowed p-1 px-2 "+classes.cardPrice}>
                            {`${property.price} CFA / Mois`}
                        </Typography>
                    </div>
                    <Typography className={"bolded-900 m-1"} color={"primary"} variant={"caption"}>
                        Categorie: {property.category.name}
                    </Typography>
                    <Typography className={"m-1 bolded-900 "}>
                        {property.title}
                    </Typography>
                    <Typography className={"m-1"}>
                        <MdPlace className={classes.placeIcon}/>
                        {property.adress.adressName}, {property.adress.district} {property.adress.town}
                    </Typography>
                </div>
            </div>
            <CardActions className={"pt-0"}>
                <Button color={"secondary"} className={"bolded p-0"} variant={"outlined"} style={{width: "100%"}}>
                    <Link href={`${property.category.slug}/${property.id}`} >
                        <a style={{width: "100%"}}>Voir la disponibilité</a>
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}