import {Container, Typography} from "@material-ui/core"
import {SwiperSlide, Swiper} from "swiper/react"
import {useBannerStyle} from "./banner.style"
import SwiperCore, {Navigation, Pagination} from "swiper";
import Image from "next/image";
import useResize from "../../hooks/useResize";

SwiperCore.use([Navigation, Pagination])

export const Banner=()=>{
	const size=useResize()
	const classes=useBannerStyle()
	return (
			<>
				{
					size && size.width && size.height &&
					<div className={classes.banner}>
						<Container style={{position:"relative", height:"100%"}}>
							<div className={classes.bannerImg}>
								<Image
									src={"/assets/images/banner-1.png"}
									height={400}
									width={340}
								/>
							</div>
							<div className={classes.bannerTextContainer}>
								<Typography className={classes.bannerTextTitle} variant={"h6"} style={{color:"#fff"}}>
									{/*Obtenez<br/>Votre logement <br/><span className={"text-secondary"} style={{}}>En un clic !</span>*/}
									Obtenez Votre Logement<br/> En Un clic !
								</Typography>
							</div>
						</Container>
					</div>
				}
			</>
	)
}