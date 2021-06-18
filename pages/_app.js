import {ThemeProvider} from "@material-ui/core/styles"
import {Provider} from "react-redux";
import {useStore} from "../rsc/store";
import {useCustomTheme} from "../rsc/hooks/useCustomTheme";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import '../styles/globals.scss'

export const API_BASE_URL=`http://localhost:4000`
export const API_BASE=API_BASE_URL+`/v1/api`
export const API_BASE_UPLOADS_BASE=API_BASE_URL+`/uploads`

function MyApp({ Component, pageProps }) {
	const store=useStore(pageProps.initialStore)
  	return (
  		<Provider store={store}>
			<ThemeProvider theme={useCustomTheme()}>
				<Component {...pageProps}/>
			</ThemeProvider>
		</Provider>
  	)
}

export default MyApp
