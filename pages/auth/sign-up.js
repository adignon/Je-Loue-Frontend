import React from "react"
import {BaseLayout, MainContainer, SignUpForm} from "../../rsc/components";
import style from "../../styles/pages/signUp.module.scss";

export default function SignUp(){
	return(
		<React.Fragment>
			<BaseLayout pageTitle={"Inscription"} className={"mb-5"}>
	            <MainContainer>
	            	<SignUpForm/>
	            </MainContainer>
	        </BaseLayout>
		    <style jsx global>{`
		    	@media screen and (min-width:996px){
		    		#__next{
						background: url("/assets/images/bg-1.svg");
						background-repeat: no-repeat;

					}
		    	}
		    `}</style>
		</React.Fragment>
	)

}

export const getServerSideProps=()=>{
	return {
		props:{

		}
	}
}