import {BaseLayout, MainContainer, LoginForm} from "../../rsc/components";

export default function Connexion(){
	return (
		<BaseLayout pageTitle={"Connexion"} className={"mb-5"} headerProps={{showMenu:false}}>
        	<MainContainer>
        		<LoginForm/>
        	</MainContainer>
        	<style jsx global>{`
		    	@media screen and (min-width:996px){
		    		#__next{
						background: url("/assets/images/bg-1.svg");
						background-repeat: no-repeat;

					}
		    	}
		    `}</style>
        </BaseLayout>
	)
}

export const getServerSideProps=async (context)=>{
	return {
		props:{

		}
	}
}