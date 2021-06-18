import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	typography:{
		fontFamily:[
			"Lato-Regular",
			"OpenSans-Regular",
			"Roboto-Regular",
			"Helvetica",
			"sans-serif"
		].join(",")
	},
  	palette: {
    	primary: {
      		main: "#036c9f",
    	},
    	secondary: {
      		main: "#f47300",
    	},
		text:{
    		primary:"#4d4d4d"
		}
  	},
});

