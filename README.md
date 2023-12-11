# CorderFrontEnd


popup qui suit quand on scroll
bien dimensionner la photo
decaler les txt right a droite
css boutons
newsletter oui /non


ENDPOINTS :

cycleenterre
VALIDATED-> SHIPPED
seulement acces bouton envoyer et envoyé

Tout le formulaire user - POST
------------------------------
    firstName : string
    lastName : string
    email : string
    pictureName : string
    pictureType : string
    blob : string  // photo
    street : string
    city : string
    postCode : string
    newsletter : boolean
    productUsed : string
    rating : number
    comment : string
------------------------------

Login - POST
------------------------------
    login : string
    password : string
------------------------------

Modifier login - UPDATE
------------------------------
    login : string
    password : string
------------------------------

Dashboard - GET
------------------------------
    [ {id : number, blob : string} * 3] // 3  derniers en attente where !isSeen
    [ {id : number, blob : string} * 3] // 3 derniers validés where isValidated
    totalParticipants : number
    dateParticipants : number // get 7 derniers jours je suppose
------------------------------

Popup admin - GET
------------------------------
    id : number
    firstName : string
    lastName : string
    email : string
    blob : string  // photo
    street : string
    city : string
    postCode : string
    newsletter : boolean
    productUsed : string
------------------------------

Popup admin - UPDATE
------------------------------
    id : number
    validated : boolean
------------------------------

Stats (oh boy) - GET
------------------------------
    [{totalParticipants : number, dateIncription : Date}] //tous les jours
    city : string 
    productUsed : string
    rating : number
    comment : string
------------------------------

Liste participants - GET
------------------------------
    id : number
    lastName : string
    firstName : string
    street : string
    city : string
    postCode : string
    productUsed : string
    isSeen : boolean
    isValidated : boolean
    isShipped : boolean
    dateInscription : Date
------------------------------

Photos validées - GET (where validated)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : string
------------------------------

Photos rejetées - GET (where !validated)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : string
------------------------------

Photos en attente - GET (where !isSeen)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : string
------------------------------
