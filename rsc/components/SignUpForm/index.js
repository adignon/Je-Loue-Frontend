import React from "react"
import {TextField, Grid, Card, Button, Checkbox, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core"
import {useSignUpFormStyle} from "./signUpForm.style"
import {useForm} from "../../hooks/useForm"
import {useIsViewportMb} from "../../hooks/useIsViewportMb"
import {API_BASE_UPLOADS_BASE, API_BASE} from "../../../pages/_app"
import {MdDone} from "react-icons/md";
import {BsExclamationCircle} from "react-icons/bs"
import {LogoText} from "../"

export const SignUpForm=({profile=""})=>{
	const [form, handleForm]=useForm({
		firstname:null,
		lastname:null,
		email:null,
		password:null,
		repeatedPassword:null,
		acceptConditions:null
	})
	const passwordRules={
		len: 12,
		format:/./
	}
	const [errors, setErrors]=React.useState({})

	const isMb=useIsViewportMb()

	const rules={
			len:{

				message:"Le mot de passe doit contenir au minimun 8 caractères.",
				test:(value)=>String(value).length >=8,
				validated:null
			},
			format:{
				message:`Le mot de passe ne doit contenir que des caractères alphanumériques avec au moins une lettre et un chiffre.`,
				test:(value)=>/(?=.*[A-Za-z])(?=.*\d)/.test(value),
				validated:null
			},
			specChar:{
				message:`Le mot de passe doit contenir un caractères spécial (@$!%*#.?&)`,
				test:(value)=>/(?=.*[@$!%*#.?&])[A-Za-z\d@$!%*#.?&]/.test(value),
				validated:null
			}
		}

	const validateDatas=(type, key, value)=>{
		switch(type){
			case "name":
				if((!/^[A-Za-z ]+$/.test(value))){
					setErrors({...errors,[key]: "Le champ doit contenir des caractère alphabétiques."})
				}else{
					if(errors[key]){
						setErrors(prev=>{
							delete prev[key]
							return prev;
						})
					}
				}
				break;
			case "email":
				if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))){
					setErrors({...errors,[key]: "Email non valide."})
				}else{
					if(errors[key]){
						setErrors(prev=>{
							delete prev.email
							return prev;
						})
					}
				}
				break;
			case "password":
				Object.keys(rules).forEach(rule=>{
					if(!rules[rule].test(value)){
						if(!errors.password || !errors.password.includes(rules[rule].message)){
							setErrors(prev=>({...prev, password:[...(prev.password ? prev.password : []), rules[rule].message]}))
						}
					}else{
						if(errors.password.includes(rules[rule].message)){
							setErrors(prev=>{
								prev.password[errors.password.indexOf(rules[rule].message)]=undefined
								prev.password=prev.password.filter(p=>p);
								if(!prev.password.length){
									delete prev.password
								}
								return prev;
							})
						}
					}
				})
				break; 
			case "repeatedPassword":
				if(!(form.password===value)){
					setErrors({...errors,[key]: "Mot de passe non concordante."})
				}else{
					if(errors[key]){
						setErrors(prev=>{
							delete prev[key]
							return prev;
						})
					}
				}
				break;
		}
	}

	const classes=useSignUpFormStyle()
	const handleValidation=(e)=>{
		const {name, value}=e.target
		console.log(name, value)
		if(value!==null){
			if(name.includes('name')){
				validateDatas("name", name, value);
			}else if(name.includes('password')){
				console.log("here")
				validateDatas('password', name, value)
			}else if(["email", "repeatedPassword"].includes(name)){
				validateDatas(name, name, value)
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
					Créer un compte
				</Typography>
				<Grid container spacing={2} className={"mt-4"}>
					<Grid item xs={isMb ? 12: 6} >
						<TextField
							variant="outlined" 
							id="firstname" 
							color={"primary"} 
							name={"firstname"} 
							label={"Prénoms"} 
							value={form.firstname===null ? "": form.firstname} 
							onChange={e=>{handleValidation(e); handleForm(e)}} 
							className={classes.input} 
							helperText={errors.firstname}
							placeholder={"Entrez vos prénoms"}
							error={Boolean(errors.firstname && errors.firstname.length)}
						/>
					</Grid>
					<Grid item xs={isMb ? 12: 6} >
						<TextField
							variant="outlined" 
							id="lastname" 
							color={"primary"} 
							label={"Nom"} 
							name="lastname" 
							name={"lastname"} 
							value={form.lastname===null ? "": form.lastname} 
							onChange={e=>{handleValidation(e); handleForm(e)}} 
							className={classes.input}
							helperText={errors.lastname}
							error={Boolean(errors.lastname && errors.lastname.length)}

						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined" 
							id="email" 
							color={"primary"} 
							label={"Email"} 
							value={form.email===null ? "": form.email} 
							name={"email"}  
							type="email"
							onChange={e=>{handleValidation(e); handleForm(e)}} 
							className={classes.input}
							helperText={errors.email}
							error={Boolean(errors.email && errors.email.length)}
						/>
					</Grid>
					<Grid item xs={12}  className={form.password!==null ? "pb-0": ""}>
						<TextField
							variant="outlined" 
							id="password" 
							label="Mot de passe" 
							color="primary" 
							value={form.password===null ? "": form.password}  
							name={"password"} 
							onChange={e=>{handleValidation(e); handleForm(e)}} 
							className={classes.input}
							error={Boolean(errors.password && errors.password.length)}
						/>
						{
							form.password!==null && (
								<List className={"py-0"}>
									{
										 Object.values(rules).map((rule, i)=>(
											<React.Fragment key={i}>
												<div className={"d-flex"} style={{alignItems:"center", color:errors.password && errors.password.includes(rule.message) ? "var(--danger)" : "var(--success-dark)"}}>
													<ListItemIcon style={{minWidth:30, fontSize:"0.8rem", color:"inherit", height:13}} >{errors.password && errors.password.includes(rule.message) ? <BsExclamationCircle color={"primary"}/> : <MdDone color={"primary"}/>}</ListItemIcon>
												 	<ListItemText style={{lineHeight:1}} primary={<Typography variant={"caption"} >{rule.message}</Typography>} className={"m-0 "+Object.values(rules).length - 1 === i ? "pb-0" : ""}/>
												</div>
											</React.Fragment>
												
										))
									}
								</List>
							)
						}
							
					</Grid>
					<Grid item xs={12} className={form.password!==null ? "pt-0": ""}>
						<TextField
							variant="outlined" 
							id="repeatedPassword" 
							color={"primary"} 
							label={"Répéter le mot de passe"} 
							name={"repeatedPassword"} 
							value={form.repeatedPassword===null ? "" : form.repeatedPassword} 
							onChange={e=>{handleValidation(e); handleForm(e)}} 
							className={classes.input}
							helperText={errors.repeatedPassword}
							error={Boolean(errors.repeatedPassword && errors.repeatedPassword.length)}
						/>
					</Grid>
				</Grid>
				<FormControlLabel control={<Checkbox name="acceptConditions" checked={form.acceptConditions} onChange={handleForm} />} label={"J'accepte les conditions."}  className={"mt-4"} />
				<div className={"d-flex justify-right"}>
					<Button 
						variant={"contained"} 
						color={"secondary"} 
						className={"text-white mt-6"} 
						disabled={(!Boolean(Object.keys(errors).length) && Array.from(new Set(Object.values(form))).includes(null)) ||  (Boolean(Object.keys(errors).length))}>
						{"S'inscrire"}
					</Button>
				</div>
			</div>
		)
	}
	return (
		<div style={{position:"relative", height:"100vh"}}>
			{
				!isMb &&
				<Card style={{maxWidth:"600px", minWidth:400}} className={"p-10 bordered b-1 r-2 "+classes.card}>
					{getForm()}
				</Card>
			}
			{
				isMb &&
				getForm()
			}
		</div>
	)
}