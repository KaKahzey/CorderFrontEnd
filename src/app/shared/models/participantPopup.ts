export interface ParticipantPopup {
    participantFirstName : string,
    participantLastName : string,
    participantEmail : string,
    participantAddress : {
        street : string,
        city : string,
        postCode : number
    },
    status : string,
    acceptNewsletter : boolean
}