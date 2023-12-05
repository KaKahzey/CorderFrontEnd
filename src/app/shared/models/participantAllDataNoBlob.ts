export interface ParticipantAllDataNoBlob {
    id : number,
    participantFirstName : string,
    participantLastName : string,
    participantEmail : string,
    productType : string,
    participantAddress : {
        street : string,
        city : string,
        postCode : string
    }
    acceptNewsletter : boolean,
    participationDate : string,
    status : string
}