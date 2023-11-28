export interface UserData {
    firstName : string,
    lastName : string,
    email : string,
    pictureName : string,
    pictureType : string,
    blob : [1,0,1], // voir fonction pour convert canal frontend
    street : string,
    city : string,
    postCode : number
    productUsed : string;
    newsletter: boolean
    
}