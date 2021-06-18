import {generateRoom} from "./formatGenerator"
export const Categories=[
    {
        Category_id: "chambre-simple",
        Category_name:"Chambre Simple",
        Category_slug:"chambre-simple",
        Category_created_at:null
    },
    {
        Category_id: "chambre-sanitaire",
        Category_name:"Chambre Sanitaire",
        Category_slug:"chambre-sanitaire",
        Category_created_at:null
    }
]
//["Electricité", "Eau", "Situation cuisine", "Situation douche", "Peinture", "Avec Meubles"]
//Rules: All keys are lowercase characters. All in-space are replaced by underscore
//All key that include "counts" are treated as advanced meta(nested json)
//DISTINCT RoomMetaDatas value
export const RoomMetasLabelRecap=[
    {
        RoomMetaLabel_key:"electricité",
        RoomMetaLabel_title:"Electricité",
        RoomMetaLabel_slug:"electricité",
        RoomMetaLabel_type:"bool",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"oui",
                RoomMetaData_value:"oui"
            },
            {
                RoomMetaData_slug:"non",
                RoomMetaData_value:"non"
            }
        ]
    },
    {
        RoomMetaLabel_key:"eau",
        RoomMetaLabel_title:"eau",
        RoomMetaLabel_slug:"eau",
        RoomMetaLabel_type:"bool",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"oui",
                RoomMetaData_value:"oui"
            },
            {
                RoomMetaData_slug:"non",
                RoomMetaData_value:"non"
            }
        ]
    },
    {
        RoomMetaLabel_key:"avec_meubles",
        RoomMetaLabel_title:"avec meubles",
        RoomMetaLabel_slug:"avec_meubles",
        RoomMetaLabel_type:"bool",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"oui",
                RoomMetaData_value:"oui"
            },
            {
                RoomMetaData_slug:"non",
                RoomMetaData_value:"non"
            }
        ]
    },
    {
        RoomMetaLabel_key:"situation_cuisine",
        RoomMetaLabel_title:"situation cuisine",
        RoomMetaLabel_slug:"situation_cuisine",
        RoomMetaLabel_type:"text",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"externe",
                RoomMetaData_value:"externe"
            },
            {
                RoomMetaData_slug:"interne",
                RoomMetaData_value:"interne"
            }
        ]
    },
    {
        RoomMetaLabel_key:"situation_douche",
        RoomMetaLabel_title:"situation douche",
        RoomMetaLabel_slug:"situation_douche",
        RoomMetaLabel_type:"text",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"externe",
                RoomMetaData_value:"externe"
            },
            {
                RoomMetaData_slug:"interne",
                RoomMetaData_value:"interne"
            }
        ]
    },
    {
        RoomMetaLabel_key:"couverture_des_carreaux",
        RoomMetaLabel_title:"couverture_des_carreaux",
        RoomMetaLabel_slug:"couverture_des_carreaux",
        RoomMetaLabel_type:"text",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"complète",
                RoomMetaData_value:"complète"
            },
            {
                RoomMetaData_slug:"à_50%",
                RoomMetaData_value:"à_50%"
            },
            {
                RoomMetaData_slug:"moins_de_50%",
                RoomMetaData_value:"moins_de_50%"
            },
            {
                RoomMetaData_slug:"plus_de_50%",
                RoomMetaData_value:"plus_de_50%"
            },
            {
                RoomMetaData_slug:"à_100%",
                RoomMetaData_value:"à_100%"
            }
        ]
    },
    {
        RoomMetaLabel_key:"chambre_à_coucher",
        RoomMetaLabel_title:"chambre_à_coucher",
        RoomMetaLabel_slug:"chambre_à_coucher",
        RoomMetaLabel_type:"num",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"100",
                RoomMetaData_value:"100"
            },
            {
                RoomMetaData_slug:"5",
                RoomMetaData_value:"5"
            },
            {
                RoomMetaData_slug:"25",
                RoomMetaData_value:"25"
            },
            {
                RoomMetaData_slug:"60",
                RoomMetaData_value:"60"
            },
            {
                RoomMetaData_slug:"75",
                RoomMetaData_value:"75"
            },
        ]
    },
    {
        RoomMetaLabel_key:"salon_à_coucher",
        RoomMetaLabel_title:"salon_à_coucher",
        RoomMetaLabel_slug:"salon_à_coucher",
        RoomMetaLabel_type:"num",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"100",
                RoomMetaData_value:"100"
            },
            {
                RoomMetaData_slug:"5",
                RoomMetaData_value:"5"
            },
            {
                RoomMetaData_slug:"25",
                RoomMetaData_value:"25"
            },
            {
                RoomMetaData_slug:"60",
                RoomMetaData_value:"60"
            },
            {
                RoomMetaData_slug:"75",
                RoomMetaData_value:"75"
            },
        ]
    },
    {
        RoomMetaLabel_key:"douche",
        RoomMetaLabel_title:"douche",
        RoomMetaLabel_slug:"douche",
        RoomMetaLabel_type:"num",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"100",
                RoomMetaData_value:"100"
            },
            {
                RoomMetaData_slug:"5",
                RoomMetaData_value:"5"
            },
            {
                RoomMetaData_slug:"25",
                RoomMetaData_value:"25"
            },
            {
                RoomMetaData_slug:"60",
                RoomMetaData_value:"60"
            },
            {
                RoomMetaData_slug:"75",
                RoomMetaData_value:"75"
            },
        ]
    },
    {
        RoomMetaLabel_key:"cuisine",
        RoomMetaLabel_title:"cuisine",
        RoomMetaLabel_slug:"cuisine",
        RoomMetaLabel_type:"num",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"100",
                RoomMetaData_value:"100"
            },
            {
                RoomMetaData_slug:"5",
                RoomMetaData_value:"5"
            },
            {
                RoomMetaData_slug:"25",
                RoomMetaData_value:"25"
            },
            {
                RoomMetaData_slug:"60",
                RoomMetaData_value:"60"
            },
            {
                RoomMetaData_slug:"75",
                RoomMetaData_value:"75"
            },
        ]
    },
    {
        RoomMetaLabel_key:"caution_electricite",
        RoomMetaLabel_title:"caution_electricite",
        RoomMetaLabel_slug:"caution_electricite",
        RoomMetaLabel_type:"json",
        RoomMetaDatas:[
            {
                RoomMetaData_slug:"cautions",
                RoomMetaData_value: [
                    {
                        caution_label:"Electricité",
                        caution_price: "50000"
                    },
                    {
                        caution_label:"Eau",
                        caution_price: "25000"
                    },
                    {
                        caution_label:"Poubelle",
                        caution_price: "30000"
                    }
                ]
            },
            {
                RoomMetaData_slug:"cautions",
                RoomMetaData_value: [
                    {
                        caution_label:"Electricité",
                        caution_price: "60000"
                    },
                    {
                        caution_label:"Eau",
                        caution_price: "75000"
                    },
                    {
                        caution_label:"Poubelle",
                        caution_price: "90000"
                    }
                ]
            },
            {
                RoomMetaData_slug:"cautions",
                RoomMetaData_value: [
                    {
                        caution_label:"Electricité",
                        caution_price: "15000"
                    },
                    {
                        caution_label:"Eau",
                        caution_price: "45000"
                    },
                    {
                        caution_label:"Poubelle",
                        caution_price: "10000"
                    }
                ]
            }
        ]
    }
]
//MIN MAX
export const priceRecap={
    min:1000,
    max:90000
}

export const Rooms=generateRoom(100)