import React from "react"
import {ErrorDialog} from "../"
import {TextField, Grid, Card, Button, Checkbox, FormControlLabel, Typography, CircularProgress, Grow} from "@material-ui/core"
import {useLoginFormStyle} from "./loginForm.style"
import {useForm} from "../../hooks/useForm"
import {API_BASE_UPLOADS_BASE, API_BASE} from "../../../pages/_app"
import {useIsViewportMb} from "../../hooks/useIsViewportMb"
import {LogoText} from "../"
import Link from "next/link"

export const LoginForm=({checkEmail})=>{
	const [form, handleForm]= useForm(false)
	const [valids, setValids]=React.useState({email:null, password:null})
	const isMb=useIsViewportMb()
	const [loading, setLoading]=React.useState(false)
	const [networkError, setNetworkError]=React.useState(false)
	const handleValidation=async ()=>{
		if(form.email.length){
			if(!valids.email){
				const verifyUserURL=`${API_BASE}/users?email=${form.email}`
				let user;
				try{
					setLoading(true)
					user=await fetch(verifyUserURL).then(r=>r.json())
					setLoading(false)
					if(user && user.length){
						console.log(user)
						setValids(prev=>({...prev, email:true, }));
					}else{
						setValids(prev=>({...prev, email:false, }));
					}
				}catch(e){
					setLoading(false)
					setNetworkError(true)
				}
				
			}else{
				//Login
				if(form.email.length && form.password.length){
					const loginURL=`${API_BASE}/auth/login`
					let result;
					try{
						setLoading(true)
						result=await fetch(loginURL, {
									    method: 'POST', // *GET, POST, PUT, DELETE, etc.
									    mode: 'cors', // no-cors, *cors, same-origin
									    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
									    headers: {
									      'Content-Type': 'application/json'
									    },
									    body: JSON.stringify({email:form.email,password:form.password}) // body data type must match "Content-Type" header
								  }).then(r=>r.json())
						setLoading(false)
						if(Number(result.statusCode)===200){

						}else{
							setValids(prev=>({...prev, password:false }));
						}
						
					}catch(e){
						setLoading(false)
						setNetworkError(true)
					}
					
				}
			}
			
		}
	}

	const getForm=()=>{
		return (
			<div className={isMb ? "px-1 py-5" : ""}>
				{
					!isMb && <LogoText style={{fontSize:"1rem"}}/>
				}
				<Typography variant={isMb ? "h6" : "h5"}>
					Se Connecter
				</Typography>
				<Grid container spacing={2} className={"mt-4"} >
					<Grid item xs={12} >
						<TextField 
							id="email"  	
							color={"primary"} 
							name={"email"} 
							label={"Email"} 
							variant={"outlined"}
							value={form.email}
							onChange={handleForm}
							style={{width: "100%"}} 
							helperText={valids.email===false && "Compte inexistant."}
							error={valids.email===false}
						/>
						{
							!valids.email &&
							<Typography color={"primary"} variant={"caption"} className={"my-2"}>
								{"Vous n'avez pas encore un compte ?"}
								<Link href={"/auth/sign-up"}>
	                                <a  className={"ml-2 text-secondary"}>
	                                	Créer un compte.
	                                </a>
	                            </Link>
							</Typography>
						}
					</Grid>
					{
						valids.email &&
						<Grid item xs={12} >
							<Grow in={valids.email}>
								<React.Fragment>
									<TextField 
										id="email" 
										variant="outlined"
										color={"primary"} 
										name={"password"} 
										label={"Mot de passe"} 
										value={form.password} 
										onChange={handleForm}
										style={{width: "100%"}} 
										helperText={valids.password===false && "Email ou mot de passe non valide."}
										error={valids.password===false}
									/>
									<Typography color={"primary"} variant={"caption"} className={"my-2"}>
										<Link href={"/comment-ca-marche"}>
			                                <a  className={""}>
			                                	{"Mot de passe oublié ? "}
			                                </a>
			                            </Link>
									</Typography>
								</React.Fragment>
							</Grow>
						</Grid>
					}
					<div className={"d-flex justify-right w-full mx-2"}>
						<Button 
							variant={"contained"} 
							color={"secondary"} 
							className={"text-white mt-6"} 
							onClick={handleValidation}
							disabled={loading}
						>
							{
								loading ?
								<CircularProgress color={"secondary"} style={{width: 25, height:25}}/>
								:
								(
									valids.email ? "Se Connecter" : "Suivant"
								)
							}
						</Button>
					</div>
				</Grid>
			</div>
		)
	}

	const classes= useLoginFormStyle()
	return(
		<div style={{position:"relative", height:"100vh"}}>
			{
				!isMb &&
				<Card style={{maxWidth:"600px", width:400}} className={"p-10 bordered b-1 r-2 "+classes.card}>
					{getForm()}
				</Card>
			}
			{
				isMb &&
				getForm()
			}
				<ErrorDialog open={networkError} onClose={()=>setNetworkError(false)}/>
		</div>
	)
}