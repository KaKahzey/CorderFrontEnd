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


!!!!! Renaud : Enlever le bouton skip dans le formulaire !!!!!
!!!!! Renaud : Enlever le take picture sur desktop Photo Choice !!!!!

gérer province pour composant participants


rectifications avant rendu final

-> lien checkbox rgpd
->ajout 4eme checkbox ok
->rework checkbox 

-> lien quand infoform ok
-> lien envoi commentaire et avis ok

-> !!!! tester les endpoints du form ok
-->     et popup pour le comment ok

-> ptite fleche sur le button Autres
-> nb Caracteres comment

-> !!!! RESPONSIVE

->guard corder : quand pending == valider refuser / cycle : envoyer
SI valide alors bouton valide hidden ET bouton refuser visible
SI refusé alors bouton valide visible ET bouton refuser hidden
SI shipped bouton info envoyé
ENDPOINTS :

cycleenterre

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
