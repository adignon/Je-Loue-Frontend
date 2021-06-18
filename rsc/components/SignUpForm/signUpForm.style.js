import {makeStyles} from "@material-ui/core"

export const useSignUpFormStyle=makeStyles(theme=>({
	input:{
		width:"100%"
	},
	card:{
		top:100,
		left:"50%",
		position:"absolute",
		transform: "translateX(-50%)"

	}
}))