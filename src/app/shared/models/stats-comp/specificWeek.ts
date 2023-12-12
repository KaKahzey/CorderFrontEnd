export interface SpecificWeek {
    // COUNT par jour (CTRL+C countParticipationsPreceeding7Days)
    // mais changer pour n'avoir qu'un array stockant les COUNT.
    // pouvoir mettre en paramètre de la requête la date du [0]
    // en dd-MM-YYYY
    days : number[]
}