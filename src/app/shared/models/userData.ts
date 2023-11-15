export interface UserData {
    firstName : string,
    LastName : string,
    mail : string,
    address : {
        street : string,
        postalCode : number,
        city : string
    }
    productUsed : string,
    photo : string,
    seed : string
}