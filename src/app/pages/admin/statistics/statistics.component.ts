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
  countProvince : {} = {"Hainaut": 0,
  "Luxembourg": 0,
  "Brabant wallon": 1,
  "Liège": 0,
  "Namur": 0}
  
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _apiService : ApiService, private _datePipe : DatePipe) {}

  ngOnInit() : void {
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
  }

  //return le nom de l'index de la clé en paramètre
  getMonthKey(key : number): string {
    return Object.keys(this.months)[key];
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
    this.setHeightMonths(this.months[this.getMonthKey(4)], "fifth-month")
    this.setHeightMonths(this.months[this.getMonthKey(3)], "fourth-month")
    this.setHeightMonths(this.months[this.getMonthKey(2)], "third-month")
    this.setHeightMonths(this.months[this.getMonthKey(1)], "second-month")
    this.setHeightMonths(this.months[this.getMonthKey(0)], "first-month")
    this.monthParticipants = this.countTotalLastMonth()
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
      console.log("c'est ok");
      
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
    
    this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
      this.days = data
    }) 
    }
  }
