import React from "react";
import {Swiper} from "swiper";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {makeStyles, IconButton} from "@material-ui/core";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

let swiperProps={
    navigation:true,
    pagination:{
        clickable:true,
        slidesPerView:1
    }
}

let useStyle=makeStyles(theme=>({
    carrousel:{
        "& .swiper-slide":{
            width:'calc()'
        }
    }
}))

export const Carrousel=({children,SwiperOptions={}, className, ControlButtons={}})=>{
    const ref=React.useRef()
    const {prevButton, nextButton}=ControlButtons
    React.useEffect(()=>{
        const swiper=new Swiper(ref.current,SwiperOptions)
    })

    const hanldePrevCarrousel=()=>{
        ref.current.swiper.slidePrev()
    }

    const hanldeNextCarrousel=()=>{
        ref.current.swiper.slideNext()
    }

    return(
        <div className={"swiper-container"+(className ? " "+className: "")} ref={ref}>
            <div className={"swiper-wrapper"}>
                {
                    children.map((child, i)=>(
                        <div className={"swiper-slide"} key={i}>
                            {child}
                        </div>
                    ))
                }
            </div>
            {
                prevButton ? 
                {
                    ...prevButton, 
                    props:{
                        ...prevButton.props, 
                        onClick: prevButton.props.onClick instanceof Function ? 
                        (e)=>{
                            prevButton.props.onClick(e); 
                            hanldePrevCarrousel(e);
                        }   
                        : 
                        hanldePrevCarrousel
                    }
                }
                :
                <div className={"swiper-button-prev"} onClick={hanldePrevCarrousel}></div>
            }
            {
                nextButton ? 
                {
                    ...nextButton, 
                    props:{
                        ...nextButton.props, 
                        onClick: nextButton.props.onClick instanceof Function ? 
                        (e)=>{
                            nextButton.props.onClick(e); 
                            hanldeNextCarrousel(e);
                        }   
                        : 
                        hanldeNextCarrousel
                    }
                }
                :
                <div className={"swiper-button-next"} onClick={hanldeNextCarrousel}></div>
            }
            
        </div>
    )
}