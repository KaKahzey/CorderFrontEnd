export interface ParticipantMostData {
    //la requête renvoie un array d'objets ParticipantMostData
    id : number,
    participantLastName : string,
    participantFirstName : string,
    //string format "yyyy-MM-dd", conversion en front
    participationDate : Date,
    participantAddress : {
        street : string,
        city : string,
        postCode : string
    },
    // en lowerCase
    productType : string,
    //PENDING, VALIDATED, DENIED ou SHIPPED (en majuscule)
    status : string
}