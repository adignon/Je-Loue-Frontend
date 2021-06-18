export interface CategoryInterface{
    Category_id: string,
    Category_name: string,
    Category_slug: string,
    Category_created_at	: string,
    Category_created_by_User: string,
    Category_parent	: string | null,
    Category_children?:Array<CategoryInterface>
}

/*export interface PriceRangeInterface{
    min:number,
    max:number
}*/

export interface  PropertyMetaLabelInterface{
    PropertyMetaLabel_id: string,
    PropertyMetaLabel_title	: string,
    PropertyMetaLabel_slug: string,
    PropertyMetaLabel_type: string,
    PropertyMetaLabel_is_default: number,
    PropertyMetaLabel_created_by_User: string,
    PropertyMetaLabel_Category : string,
    PropertyMetaLabel_Datas?:Array<PropertyMetaDataInterface>
}

export interface PropertyMetaDataInterface{
    PropertyMetaData_Label: string,
    PropertyMetaData_slug: string,
    PropertyMetaData_value: string,
}

export interface PropertyAdressInterface{
    PropertyAdress_id: string,
    PropertyAdress_name: string,
    PropertyAdress_town: string,
    PropertyAdress_departement: string,
    PropertyAdress_home_details: string,
    PropertyAdress_description: string,
    PropertyAdress_created_by_User: string,
}

export interface UserInterface{
    UserAccount_id: string,
    UserAccount_firstname: string,
    UserAccount_lastname: string,
    UserAccount_profile_image: string | null,
    UserAccount_password_hash: string,
    UserAccount_created_at: string,
    UserAccount_password_last_update_at	: string,
    UserAccount_profile: string,
    UserAccount_admin_profil: string | null,
    UserAccount_anouncer_profil: string | null,
}

export interface Property{
    Property_id: string,
    Property_title: string,
    Property_description: string,
    Property_status: string,
    Property_price: number,
    Property_created_at: string,
    Property_medias	: string,
    Property_echeance_payement_jour	: number,
    Property_Category: CategoryInterface,
    Property_Adress	:PropertyAdressInterface,
    Property_created_by_User: UserInterface,
    Property_payment_type:	string,
    Property_Subscription: null | string,
    Property_MetaDatas: Array<PropertyMetaDataInterface>
}