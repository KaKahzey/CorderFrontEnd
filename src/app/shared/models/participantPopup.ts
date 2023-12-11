export interface ParticipantPopup {
    id : number,
    participantFirstName : string,
    participantLastName : string,
    participantEmail : string,
    participantAddress : {
        street : string,
        city : string,
        postCode : number
    },
    status : string,
    productType : string,
    acceptNewsletter : boolean
}