export const UserAccountFormat=()=>({
	UserAccount_id:{
		type:"UUID"
	},
	UserAccount_firstname:{
		type:"string",
		len:255,
	},
	UserAccount_lastname:{
		type:"string",
		len:255,
	},
	UserAccount_profile_image:{
		type:"string",
		len:255,
	},
	UserAccount_created_at:{
		type:"datetime"
	},
	UserAccount_profile:{
		type:"string",
		len:255,
		values:['ADMIN', "ANNONCEUR", "CLIENT"]
	},
	UserAccount_admin_profil:{
		type:"string",
		len:255,
		values:["ADMIN_PRIMAIRE", "ADMIN_SECONDAIRE"]
	},
	UserAccount_anouncer_profil:{
		type:"string",
		len:255,
		values:["AMBASSADEUR", "PROPRIETAIRE"]
	}

})

export const CategoryFormat=()=>({
	Category_id: {
		type:"UUID"
	},
	Category_name:{
		type:"string",
		len:255,
		values:['Chambre Simple', "Chambre Sanitaire"]
	},
	Category_slug:{
		type:"string",
		len:255,
	},
	Category_created_at:{
		type:"datetime"
	}
})

export const RoomFormat=()=>({
	Room_id:{
		type:"UUID"
	},
	Room_title:{
		type:"string",
		len:255,
	},
	Room_description:{
		type:"string",
		len:1000,
	},
	Room_status:{
		type:"string",
		len:255,
		values:["PUBLISHED", "UNPUBLISHED","DESACTIVED"]
	},
	Room_echeance_jour:{
		type:"integer"
	}
})

export const RoomAttributeValueFormat=()=>({
	RoomAttributeValue_id:{
		type:"UUID"
	},
	RoomAttributeValue_title:{
		type:"string",
		len:255,
		values:[
			'{Electricité}:Oui',
			'{Electricité}:Non',
			'{Eau}:Oui', '{Eau}:Non',
			'{Situation cuisine}:Interne',
			'{Situation cuisine}:Externe',
			'{Situation douche}:Externe',
			'{Situation douche}:Interne',
			"{Peinture}:Oui",
			"{Peinture}:Non",
			"{Couverture des carreaux}:Complète",
			"{Couverture des carreaux}:À 50%",
			"{Couverture des carreaux}:Moins de 50%",
			"{Couverture des carreaux}:Plus de 50%",
			"{Couverture des carreaux}:A 100%",
			"{Avec Meubles}:Oui",
			"{Avec Meubles}:Non"
		]
	},
	RoomAttributeValue_slug:{
		type:"string",
		len:255,
	},
	RoomAttributeValue_Attribute:{
		type:"relation",
		targetFormat:RoomAttributeFormat
	}
})

export const RoomAttributeFormat=()=>{
	return {
		RoomAttribute_id:{
			type:"UUID"
		},
		RoomAttribute_title:{
			type:"string",
			len:255,
			values:["Electricité", "Eau", "Situation cuisine", "Situation douche", "Peinture", "Avec Meubles"]
		},
		RoomAttribute_slug:{
			type:"string",
			len:255,
		},
		_:{
			relation:{
				relationName:"RoomAttribute_Values",
				relationFormat: RoomAttributeValueFormat
			}
		}
	}
}

export const RoomMeta=()=>({
	RoomMeta_id:{
		type: "UUID"
	},
	RoomMeta_key:{
		type:"string",
		len:255,
	},
	RoomMeta_value:{
		type:"string",
		len:255,
	},
	RoomMeta_description:{
		type:"string",
		len:1000,
	},
	RoomMeta_Room:{
		type:"relation",
		targetFormat:RoomAttributeValueFormat
	}
})

const RoomAdressForm=()=>({
	RoomAdress_id:{
		type: "UUID"
	},
	RoomAdress_name:{
		type:"string",
		len:255,
	},
	RoomAdress_town:{
		type:"string",
		len:255,
	},
	RoomAdress_home_details:{
		type:"string",
		len:255,
	},
	RoomAdress_description:{
		type:"string",
		len:255,
	}
})

const Wishlist=()=>({
	Wishlist_id:{
		type:"UUID"
	},
	Wishlist_User:{
		type:"relation",
		targetFormat:UserAccountFormat
	},
	Wishlist_Room:{
		type:"relation",
		targetFormat:RoomFormat
	}
})
