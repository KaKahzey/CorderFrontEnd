export interface Dashboard {
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