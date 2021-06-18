import {createMuiTheme} from "@material-ui/core/styles";
import {useIsViewportMb} from "./useIsViewportMb";

export const useCustomTheme=()=>{
    const isMobile= useIsViewportMb()
    const theme = createMuiTheme({
        typography:{
            fontFamily:[
                "Lato-Regular",
                "OpenSans-Regular",
                "Roboto-Regular",
                "Helvetica",
                "sans-serif"
            ].join(","),
            htmlFontSize: 16
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

    return theme;
}