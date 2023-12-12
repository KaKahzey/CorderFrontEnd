export interface AllButSpecificWeek {
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