# CorderFrontEnd

TODO
---------------------------------------------
| ° background                              | ok
| ° style centre champs                     | ok
| ° navbar partagee                         | ok
| ° envoi formulaire                        | ok
| ° changer le CSS quand bouton désactivé   | ok
| ° check les conditions du formulaire      | ok
| ° rendre fonctionnelle les checkboxs      | ok
| ° responsive  mi-ok / en cours            | 
| ° agrandir et centrer le h1               | ok
| ° input en inline                         | ok
| ° email                                   | ok
---------------------------------------------
gérer province pour composant participants


rectifications avant rendu final
-> lien checkbox rgpd
->lien quand infoform ok

ENDPOINTS :

Tout le formulaire user - POST
------------------------------
    firstName : string
    lastName : string
    email : string
    pictureName : string
    pictureType : string
    blob : [1,0,1]  // photo
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
    id : number // 3 derniers en attente + 3 derniers validés
    blob : [1,0,1] // 3 derniers en attente + 3 derniers validés
    totalParticipants : number
    dateParticipants : number // get 7 derniers jours je suppose
------------------------------

Popup admin - GET
------------------------------
    id : number
    firstName : string
    lastName : string
    email : string
    blob : [1,0,1]  // photo
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
    totalParticipants : number
    dateInscription : Date 
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

Photos validées - GET (seulement les validated)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : [1,0,1]
------------------------------

Photos rejetées - GET (seulement les !validated)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : [1,0,1]
------------------------------

Photos en attente - GET (seulement les !isSeen)
------------------------------
    id : number
    lastName : string
    firstName : string
    dateInscritpion : Date
    blob : [1,0,1]
------------------------------