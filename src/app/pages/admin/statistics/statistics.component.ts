import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  //todo mettre toutes les fonctions set dans les subscribes
  //todo mettre boules dans graphes
  totalParticipants : number = 197
  weekParticipants : number = 19
  monthParticipants : number = 39
  showMonths : boolean = false
  graphDisplayStyle: { [key: string]: string } = { display: 'block' }
  timeLeft : number = this.displayTimeLeft("2024-06-20")
  fiveLastMonths : string[] = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY"]
  days : any = {
    monday : 5,
    tuesday : 10,
    wednesday : 3,
    thursday : 4,
    friday : 1,
    saturday : 5,
    sunday : 8
  }
  months : any = {
    february : 6,
    march : 16,
    april : 10,
    may : 5,
    june : 2
  }
  currentDate : string = this._datePipe.transform(new Date(), 
  'yyyy-MM-dd')!
  sevenDaysAgo : string = "yyyy-MM-dd"
  countRegions : any = {
    "Hainaut": 15,
    "Luxembourg": 9,
    "Brabant wallon": 24,
    "Liège": 5,
    "Namur": 12
  }
  productsUsed : any = {
    insecticide : 6,
    herbicide : 3,
    fongicide : 10,
    autre : 15
  }
  otherComments : any[] = [{satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"},
  {satisfactionComment : "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr"}]
  countNote : any = {
    happy : 22,
    neutral : 5,
    sad : 7
  }
  listSatisfactionComments : string[] = [
    "J'ai utilment long haha quelle longue phrase je me marre mdr", 
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    "J'ai utilisé un très long pesticide, en parler serait long, tout le procédé serait péniblement long haha quelle longue phrase je me marre mdr",
    ]
  countSatisfactionComments : any = {
    'C\'était trop long' : 6,
    'C\'était trop court' : 3,
    'L\'appareil ne fonctionnait pas' : 8,
    'Informations pas claires' : 4,
    Autre : this.listSatisfactionComments.length
  }
  
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _apiService : ApiService, private _datePipe : DatePipe) {}

  ngOnInit() : void {   
    this.getSevenDaysAgo()
    //#region set total participants
    this._apiService.getCountParticipants().subscribe(data => {
      this.totalParticipants = data
    })
    //#endregion
    //#region set days and total last week
    this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
      this.days = data
    })    
    this.setAllDays()
    //#endregion
    //#region set months and total last month
    this._apiService.getLastMonths().subscribe(data => {
      this.months = data
    })
    this.setAllMonths()
    //#endregion
    this._apiService.getCountProvince().subscribe(data => {
      this.countRegions = data
      this.setAllRegions()
    })
    //#region set all products ONE REQUEST AT A TIME
    this._apiService.getCountInsecticide().subscribe(data => {
      this.productsUsed.insecticide = data
    })
    this._apiService.getCountInsecticide().subscribe(data => {
      this.productsUsed.herbicide = data
    })
    this._apiService.getCountInsecticide().subscribe(data => {
      this.productsUsed.fongicide = data
    })
    this._apiService.getCountInsecticide().subscribe(data => {
      this.productsUsed.autre = data
      this.setAllProducts()
    })
    //#region set notes
    this._apiService.getCountNote(1).subscribe(data => {
      this.countNote.happy = data
    })
    this._apiService.getCountNote(2).subscribe(data => {
      this.countNote.neutral = data
    })
    this._apiService.getCountNote(3).subscribe(data => {
      this.countNote.sad = data
    })
    //#endregion
    //#region set satisfaction comments
    //trop long
    this._apiService.getCountSatisfactionComment(this.countSatisfactionComments[0]).subscribe(data => {
      this.countSatisfactionComments[0] = data
    })
    //trop court
    this._apiService.getCountSatisfactionComment(this.countSatisfactionComments[1]).subscribe(data => {
      this.countSatisfactionComments[1] = data
    })
    //fonctionne pas
    this._apiService.getCountSatisfactionComment(this.countSatisfactionComments[2]).subscribe(data => {
      this.countSatisfactionComments[2] = data
    })
    //pas clair
    this._apiService.getCountSatisfactionComment(this.countSatisfactionComments[3]).subscribe(data => {
      this.countSatisfactionComments[3] = data
    })
    //une liste de tous les autres commentaires
    this._apiService.getSatisfactionCommments().subscribe(data => {
      this.listSatisfactionComments = data
    })
    //#endregion
  }

  getSevenDaysAgo() : void {
    const pastDate: Date = new Date(this.currentDate)
    pastDate.setDate(pastDate.getDate() - 7)
    this.sevenDaysAgo = this._datePipe.transform(pastDate, "yyyy-MM-dd")!
    
  }

  //return le nom de l'index de la clé en paramètre
  getKey(object : any, key : number): string {
    return Object.keys(object)[key]
  }

  //return total participants des 7 derniers jours
  countTotal7Days() : number {
    const valuesArray: number[] = Object.values(this.days)
    const total: number = valuesArray.reduce((acc, currentValue) => acc + currentValue, 0)
    return total
  }

  //set graph all days
  setAllDays() : void {
    this.setHeightDays(this.days.monday, "monday")
    this.setHeightDays(this.days.tuesday, "tuesday")
    this.setHeightDays(this.days.wednesday, "wednesday")
    this.setHeightDays(this.days.thursday, "thursday")
    this.setHeightDays(this.days.friday, "friday")
    this.setHeightDays(this.days.saturday, "saturday")
    this.setHeightDays(this.days.sunday, "sunday")
    this.weekParticipants = this.countTotal7Days()
  }
  
  //set graph all months
  setAllMonths() : void {
    this.setHeightMonths(this.months[this.getKey(this.months, 4)], "fifth-month")
    this.setHeightMonths(this.months[this.getKey(this.months, 3)], "fourth-month")
    this.setHeightMonths(this.months[this.getKey(this.months, 2)], "third-month")
    this.setHeightMonths(this.months[this.getKey(this.months, 1)], "second-month")
    this.setHeightMonths(this.months[this.getKey(this.months, 0)], "first-month")
    this.monthParticipants = this.countTotalLastMonth()
  }

  //set graph all regions
  setAllRegions() : void {
    this.setHeightRegions(this.countRegions.Hainaut, "hainaut")
    this.setHeightRegions(this.countRegions.Luxembourg, "luxembourg")
    this.setHeightRegions(this.countRegions["Brabant wallon"], "brabant")
    this.setHeightRegions(this.countRegions.Liège, "liege")
    this.setHeightRegions(this.countRegions.Namur, "namur")
  }

  //set graph all products
  setAllProducts() : void {
    this.setWidthProducts(this.productsUsed.fongicide, "fongicide")
    this.setWidthProducts(this.productsUsed.herbicide, "herbicide")
    this.setWidthProducts(this.productsUsed.insecticide, "insecticide")
    this.setWidthProducts(this.productsUsed.autre, "autre")
  }

  //fait grandir les baguettes pour les jours
  setHeightDays(height: number, day: string): void {
    const valuesArray: number[] = Object.values(this.days)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedDay = this._elementRef.nativeElement.querySelector(`.${day}`)
    this._renderer.setStyle(selectedDay, 'height', `${(height / highestNumber * 100) -5}%`)
  }

  //fait grandir les baguettes pour les mois
  setHeightMonths(height: number, month: string): void {
    const valuesArray: number[] = Object.values(this.months)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedMonth = this._elementRef.nativeElement.querySelector(`.${month}`)
    if (selectedMonth) {
      this._renderer.setStyle(selectedMonth, 'height', `${(height / highestNumber * 100) -5}%`)
    }
  }

  setHeightRegions(height: number, region: string): void {
    const valuesArray: number[] = Object.values(this.countRegions)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedRegion = this._elementRef.nativeElement.querySelector(`.${region}`)
    if (selectedRegion) {      
      this._renderer.setStyle(selectedRegion, 'height', `${(height / highestNumber * 100) -5}%`)
    }
  }

  //set baguettes graphique produits utilisés
  setWidthProducts(width: number, product: string): void {
    const valuesArray: number[] = Object.values(this.months)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedProduct = this._elementRef.nativeElement.querySelector(`.${product}`)
    if (selectedProduct) {
      this._renderer.setStyle(selectedProduct, 'width', `${(width / highestNumber * 100) -5}%`)
    }
  }

  //fonction pour switch entre les graphiques semaines/mois,
  //si on est sur les mois et qu'on revient sur les jours,
  //ça remet la date et la semaine du jour actuel
  changeGraphic(choice : string) : void {
    if (choice === 'weeks' && this.showMonths) {
      this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
        this.days = data
      })    
      this.setAllDays()
      this.showMonths = false
    }
    if (choice === 'months') {
      this.showMonths = true
    }
  }

  //return la valeur du dernier mot reçu
  countTotalLastMonth() : number {
    const valuesArray: number[] = Object.values(this.months)
    return valuesArray[valuesArray.length-1]
  }

  //on recoit les mois en anglais, on les traduit ici
  translateMonth(month : string) : string {
    switch(month.toLowerCase()){
      case "january" :
        return "Janvier"
      case "february" :
        return "Février"
      case "march" :
        return "Mars"
      case "april" :
        return "Avril"
      case "may" :
        return "Mai"
      case "june" :
        return "Juin"
      case "july" :
        return "Juillet"
      case "august" :
        return "Août"
      case "september" :
        return "Septembre"
      case "october" : 
        return "Octobre"
      case "november" :
        return "Novembre"
      case "december" :
        return "Décembre"
      default :
        return "Erreur"
    }
  }

  //return nbre jours avant la fin de l'évènement
  displayTimeLeft( deadline : string) : number {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const timeLeft = deadlineDate.getTime() - today.getTime()
    if (timeLeft <= 0) {
      return 0
    }
    const days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) + 1)
    return days
  }

  //montre la semaine suivante à condition que le jour actuel soit
  //plus petit  qu'ajd
  showNext() {
    const today = this._datePipe.transform(new Date(), 'yyyy-MM-dd')!
    const noFuture = this._datePipe.transform(new Date(), this.currentDate)!
    if(today > noFuture) {
      const futureDate: Date = new Date(this.currentDate)
      futureDate.setDate(futureDate.getDate() + 7)
      this.currentDate = this._datePipe.transform(futureDate, "yyyy-MM-dd")!
      this.getSevenDaysAgo() 
      
      this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
        this.days = data
      }) 
    }
  }

  //montre la semaine précédente
  showPrevious() {
    const pastDate: Date = new Date(this.currentDate)
    pastDate.setDate(pastDate.getDate() - 7)
    this.currentDate = this._datePipe.transform(pastDate, "yyyy-MM-dd")!
    this.getSevenDaysAgo()
    this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
      this.days = data
    }) 
    }

    //remove nowrap du comment
    removeNoWrap(index : number) : void {
      const commentArea = document.getElementById(`commentArea${index}`)
      const btn = document.getElementById(`btn-comment-hide${index}`)
      if (commentArea) {
        this._renderer.setStyle(commentArea, 'white-space', 'normal')
        this._renderer.setStyle(btn, 'display', 'none')
      }
    }

    //remove nowrap du comment de la note
    removeNoWrapNote(index : number) : void {
      const commentArea = document.getElementById(`noteCommentArea${index}`)
      const btn = document.getElementById(`btn-note-comment-hide${index}`)
      if (commentArea) {
        this._renderer.setStyle(commentArea, 'white-space', 'normal')
        this._renderer.setStyle(btn, 'display', 'none')
      }
    }
  }
