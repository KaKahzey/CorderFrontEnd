import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { AllButSpecificWeek } from '../../../shared/models/stats-comp/allButSpecificWeek';
import { SpecificWeek } from '../../../shared/models/stats-comp/specificWeek';

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
  weekParticipants : number = 19
  showMonths : boolean = false
  graphDisplayStyle: { [key: string]: string } = { display: 'block' }
  timeLeft : number = this.displayTimeLeft("2024-06-20")
  currentDate : string = this._datePipe.transform(new Date(), 
  'yyyy-MM-dd')!
  currentDateFull : Date = new Date()
  sevenDaysAgo : string = "yyyy-MM-dd"
  allStats : AllButSpecificWeek = {
    countParticipants : 1,
    countParticipantsEachLast5Months : [1, 2, 3, 4, 5],
    countByProvince : {
      "Hainaut": 15,
      "Luxembourg": 7,
      "Brabant wallon": 10,
      "Liège": 4,
      "Namur": 2
    },
    productsUsed : {
      insecticide : 5,
      herbicide : 2,
      fongicide : 6,
      autre : 1
    },
    otherProductsUsed : [],
    countNotes : [1, 2, 3],
    countSatisfactionComments : {
      "C'était trop long" : 1,
      "C'était trop court" : 2,
      "L'appareil ne fonctionnait pas" : 3,
      "Informations pas claires" : 4,
    },
    allOthersSatisfactionComment : []
  }
  countLast7Days : SpecificWeek = {days : [1, 2, 3, 4, 5, 6, 7]}
  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _apiService : ApiService, private _datePipe : DatePipe) {
  }

  // On initialise en remplissant la variable allStats avec le get
  // On fait de même avec countLast7Days mais on appelle une fonction
  // qui sera aussi utilisé ailleurs
  ngOnInit() : void {   
    this.getSevenDaysAgo()
    this.setAllDays()
    this.setAllMonths()
    this.setAllProducts()
    this.setAllRegions()
    this._apiService.getAllStats().subscribe({
      next : (resp) => {
        this.allStats = resp
      },
      error : (error) => {
        console.log("erreur : ", error);
        
      }
    })
    
    this._apiService.getSpecificWeek(this.currentDate).subscribe({
      next : (resp) => {
        this.countLast7Days = resp
      },
      error : (error) => {
        console.log("erreur : ", error);
        
      }
    })

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
    const valuesArray: number[] = Object.values(this.countLast7Days.days)
    const total: number = valuesArray.reduce((acc, currentValue) => acc + currentValue, 0)
    return total
  }

  //set graph all days
  setAllDays() : void {
    this.setHeightDays(this.countLast7Days.days[6], "monday")
      this.setHeightDays(this.countLast7Days.days[5], "tuesday")
      this.setHeightDays(this.countLast7Days.days[4], "wednesday")
      this.setHeightDays(this.countLast7Days.days[3], "thursday")
      this.setHeightDays(this.countLast7Days.days[2], "friday")
      this.setHeightDays(this.countLast7Days.days[1], "saturday")
      this.setHeightDays(this.countLast7Days.days[0], "sunday")
      this.weekParticipants = this.countTotal7Days()
  }
  
  //set graph all months
  setAllMonths() : void {
    this.setHeightMonths(this.allStats.countParticipantsEachLast5Months[4], "fifth-month")
    this.setHeightMonths(this.allStats.countParticipantsEachLast5Months[3], "fourth-month")
    this.setHeightMonths(this.allStats.countParticipantsEachLast5Months[2], "third-month")
    this.setHeightMonths(this.allStats.countParticipantsEachLast5Months[1], "second-month")
    this.setHeightMonths(this.allStats.countParticipantsEachLast5Months[0], "first-month")
  }

  //set graph all regions
  setAllRegions() : void {
    this.setHeightRegions(this.allStats.countByProvince["Hainaut"], "hainaut")
    this.setHeightRegions(this.allStats.countByProvince["Luxembourg"], "luxembourg")
    this.setHeightRegions(this.allStats.countByProvince["Brabant wallon"], "brabant")
    this.setHeightRegions(this.allStats.countByProvince["Liège"], "liege")
    this.setHeightRegions(this.allStats.countByProvince["Namur"], "namur")
  }

  //set graph all products
  setAllProducts() : void {
    this.setWidthProducts(this.allStats.productsUsed.fongicide, "fongicide")
    this.setWidthProducts(this.allStats.productsUsed.herbicide, "herbicide")
    this.setWidthProducts(this.allStats.productsUsed.insecticide, "insecticide")
    this.setWidthProducts(this.allStats.productsUsed.autre, "autre")
  }

  //fait grandir les baguettes pour les jours
  setHeightDays(height: number, day: string): void {
    const valuesArray: number[] = Object.values(this.countLast7Days.days)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedDay = this._elementRef.nativeElement.querySelector(`.${day}`)
    this._renderer.setStyle(selectedDay, 'height', `${(height / highestNumber * 90)}%`)
      this._renderer.setStyle(selectedDay, 'min-height', `52px`)
  }

  //fait grandir les baguettes pour les mois
  setHeightMonths(height: number, month: string): void {
    const valuesArray: number[] = Object.values(this.allStats.countParticipantsEachLast5Months)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedMonth = this._elementRef.nativeElement.querySelector(`.${month}`)
    if (selectedMonth) {
      this._renderer.setStyle(selectedMonth, 'height', `${(height / highestNumber * 90)}%`)
      this._renderer.setStyle(selectedMonth, 'min-height', `52px`)
    }
  }

  setHeightRegions(height: number, region: string): void {
    const valuesArray: number[] = Object.values(this.allStats.countByProvince)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedRegion = this._elementRef.nativeElement.querySelector(`.${region}`)
    if (selectedRegion) {      
      this._renderer.setStyle(selectedRegion, 'height', `${(height / highestNumber * 90)}%`)
      this._renderer.setStyle(selectedRegion, 'min-height', `52px`)
    }
  }

  //set baguettes graphique produits utilisés
  setWidthProducts(width: number, product: string): void {
    const valuesArray: number[] = Object.values(this.allStats.productsUsed)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedProduct = this._elementRef.nativeElement.querySelector(`.${product}`)
    if (selectedProduct) {
      this._renderer.setStyle(selectedProduct, 'width', `${(width / highestNumber * 100) -5}%`)
      this._renderer.setStyle(selectedProduct, 'min-width', `72px`)
      
    }
  }

  //fonction pour switch entre les graphiques semaines/mois,
  //si on est sur les mois et qu'on revient sur les jours,
  //ça remet la date et la semaine du jour actuel
  changeGraphic(choice : string) : void {
    if (choice === 'weeks' && this.showMonths) {
      this._apiService.getCountLast7Days(this.currentDate).subscribe({
        next : (resp) => {
        this.countLast7Days.days = resp
        this.setAllDays()
        this.showMonths = false
        },
        error : (error) => {
          console.log("erreur : ", error);
          
        }
      })    
    }
    if (choice === 'months') {
      this.showMonths = true
    }
  }

  //return la valeur du dernier mois reçu
  countTotalLastMonth() : number {
    const valuesArray: number[] = Object.values(this.allStats.countParticipantsEachLast5Months)    
    return valuesArray[0]
  }

  getMonthFromDateAndSubtract(inputDate : Date, monthsToSubtract : number) : string {
    const date = new Date(inputDate)
    date.setMonth(date.getMonth() - monthsToSubtract)
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const subtractedMonth = monthNames[date.getMonth()]
    return subtractedMonth
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
      this._apiService.getCountLast7Days(this.currentDate).subscribe({
        next : (resp) => {
          this.countLast7Days.days = resp
          this.setAllDays()
        },
        error : (error) => {
          console.log("error : ", error);
          
        }
      })   
    }
  }

  //montre la semaine précédente
  showPrevious() {
    const pastDate: Date = new Date(this.currentDate)
    pastDate.setDate(pastDate.getDate() - 7)
    this.currentDate = this._datePipe.transform(pastDate, "yyyy-MM-dd")!
    this.getSevenDaysAgo()
    this._apiService.getCountLast7Days(this.currentDate).subscribe({
      next : (resp) => {
        this.countLast7Days.days = resp
        this.setAllDays()
      },
      error : (error) => {
        console.log("error : ", error);
        
      }
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
