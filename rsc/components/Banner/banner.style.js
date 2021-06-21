import {makeStyles} from "@material-ui/core"

export const useBannerStyle=makeStyles(theme=>({
	banner:{
		background:theme.palette.primary.main,
		height:450
	},
	bannerImg:{
		position:"absolute",
		right:50,
		bottom:-5,
	},
	bannerTextTitle:{
		fontFamily: "OpenSans-Bold",
		fontSize: "1.8rem",
		lineHeight: 1.4,
		textAlign: "center"
	},
	bannerTextContainer:{
		position: "absolute",
		width: "100%",
		top: "30%",
	}
}))