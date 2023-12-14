# CorderFrontEnd

ENPOINTS 
---
  Admin account requests
  ---
  http://192.168.200.102:8080/user/login
  ---
    {
        login : string,
        password : string
    }
  ---
  http://192.168.200.102:8080/user/changePassword/
  ---
    {
        user : string,
        oldPassword : string,
        newPassword : string
    }
  ---
  ---
  Creation participant
  ---
  http://192.168.200.102:8080/participation/create (ajouté "acceptExposure")
  ---
    {
        firstName : string,
        lastName : string,
        email : string,
        status : string,
        productType : string,
        street : string,
        city : string,
        postCode : string,
        acceptNewsletter : boolean,
        acceptExposure : boolean
    }
  ---
  http://192.168.200.102:8080/participation/addPhoto?id=
  ---
    {
        id : number,
        blob : string
    }
  ---
  http://192.168.200.102:8080/participation/createRating
  ---
    {
        id : number,
        satisfaction : number,
        satisfactionComment? : string | null
    }
  ---
  ---
  Dashboard
  ---
  http://192.168.200.102:8080/participation/getDashboard
  ---
    {
        // COUNT total participants
        countParticipants : number,
        // COUNT total jours, (CTRL+C countParticipationsPreceeding7Days)
        days : {
            MONDAY : number,
            TUESDAY : number,
            WEDNESDAY : number,
            THURSDAY : number,
            FRIDAY : number,
            SATURDAY : number,
            SUNDAY : number,
        }
        // Ids des 3 derniers pending, [0] = +récent
        lastThreePending : number[]
        // Ids des 3 derniers validated, [0] = +récent
        lastThreeValidated : number[]
    }
  ---
  ---
  Participants
  ---
  http://192.168.200.102:8080/participation/getAllParticipants
  ---
    {[
     {
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
    ]}
  ---
  ---
  Stats
  ---
  http://192.168.200.102:8080/participation/getAllStats
  ---
    {
        // COUNT total participants
        countParticipants : number,
        // Array, 1 COUNT par cellule, [0] = +récent
        countParticipantsEachLast5Months : number[],
        // COUNT par province -> nom = key (CTRL+C countByProvince)
        countByProvince : {
            "Hainaut": number,
            "Luxembourg": number,
            "Brabant wallon": number,
            "Liège": number,
            "Namur": number
          },
        // COUNT par produit 
        productsUsed : {
            insecticide : number,
            herbicide : number,
            fongicide : number,
            autre : number
        },
        // Array, 1 string par cellule
        otherProductsUsed : string[],
        // Array, 1 COUNT par cellule ([0] = 1, [1] = 2, [2] = 3)
        countNotes : number[],
        // COUNT par message
        countSatisfactionComments : {
            "C'était trop long" : number,
            "C'était trop court" : number,
            "L'appareil ne fonctionnait pas" : number,
            "Informations pas claires" : number,
          }
        // Array, 1 string par cellule
        allOthersSatisfactionComment : string[]
    }
  ---
  http://192.168.200.102:8080/participation/getWeek=
  ---
    {
        // COUNT par jour (CTRL+C countParticipationsPreceeding7Days)
        // mais changer pour n'avoir qu'un array stockant les COUNT.
        // pouvoir mettre en paramètre de la requête la date du [0]
        // en YYYY-MM-dd
        days : number[]
    }
  ---
  ---
  Popup-validation
  ---
  http://192.168.200.102:8080/participation/getById/
  ---
    {
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
        acceptNewsletter : boolean,
        acceptExposure : boolean
    }
  ---
  http://192.168.200.102:8080/participation/getPhoto?id=
  ---
    {
        id : number,
        blob : string
    }
  ---
  Patch status <br>
  http://192.168.200.102:8080/participation/validate/<br>
  http://192.168.200.102:8080/participation/deny/<br>
  http://192.168.200.102:8080/participation/ship/
  ---
---
