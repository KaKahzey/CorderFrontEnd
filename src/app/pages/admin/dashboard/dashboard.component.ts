import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { AllButSpecificWeek } from '../../../shared/models/stats-comp/allButSpecificWeek';
import { Dashboard } from '../../../shared/models/dashboard-comp/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, PopupValidationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //todo les mois apparaissent en Anglais top right
  timeLeft : number = this.displayTimeLeft("2024-06-20")
  currentDate : string = this._datePipe.transform(new Date(), 
  'yyyy-MM-dd')!
  weekParticipants : number = 19

  dashboard : Dashboard = {
    countParticipants : 0,
    days : {
      MONDAY : 0,
      TUESDAY : 0,
      WEDNESDAY : 0,
      THURSDAY : 0,
      FRIDAY : 0,
      SATURDAY : 0,
      SUNDAY : 0,
    },
    lastThreePending : [],
    lastThreeValidated : []
  }
  lastThreePending : any[] = ["", "", ""] 
  lastThreeValidated : any[] = ["", "", ""]  
 

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _apiService : ApiService, private _datePipe : DatePipe, private _showPopupService : ShowPopupService) {}

  ngOnInit() : void {
    this.setAllDays()
    this._apiService.getDashboard().subscribe({
      next : (resp) => {
        this.dashboard = resp
        this.dashboard.lastThreePending.forEach((p, i) => {
          this._apiService.getPhoto(p).subscribe({
            next : (photo) => {
              const reader: FileReader = new FileReader()
              reader.onload = () => {
                this.lastThreePending[i] = reader.result as string
              }
              reader.readAsDataURL(photo)
            },
            error : (error) => {
              console.log("erreur : ", error)
              
            }
          })
        })
        this.dashboard.lastThreeValidated.forEach((p, i) => {
          this._apiService.getPhoto(p).subscribe({
            next : (photo) => {
              const reader: FileReader = new FileReader()
              reader.onload = () => {
                this.lastThreeValidated[i] = reader.result as string
              }
              reader.readAsDataURL(photo)
            },
            error : (error) => {
              console.log("erreur : ", error)
              
            }
          })
        })
      },
      error : (error) => {
        console.log("erreur : ", error)
      }
    })
  }

  setAllDays() : void {
      this.setHeight(this.dashboard.days.MONDAY, "monday")
      this.setHeight(this.dashboard.days.TUESDAY, "tuesday")
      this.setHeight(this.dashboard.days.WEDNESDAY, "wednesday")
      this.setHeight(this.dashboard.days.THURSDAY, "thursday")
      this.setHeight(this.dashboard.days.FRIDAY, "friday")
      this.setHeight(this.dashboard.days.SATURDAY, "saturday")
      this.setHeight(this.dashboard.days.SUNDAY, "sunday")
      this.weekParticipants = this.countTotal7Days()
  }

  //set la taille de chaque baguette dans le graphique
  setHeight(height: number, day: string): void {
    const valuesArray: number[] = Object.values(this.dashboard.days)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedDay = this._elementRef.nativeElement.querySelector(`.${day}`)
    this._renderer.setStyle(selectedDay, 'height', `${(height / highestNumber * 100) -5}%`)
  }

  //return le total de participants des 7 derniers jours
  countTotal7Days() : number {
    const valuesArray: number[] = Object.values(this.dashboard.days)
    const total: number = valuesArray.reduce((acc, currentValue) => acc + currentValue, 0)
    return total
  }

  //return le nombre de jours avant la fin de l'évènement
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

  //return la date du jour (mois en Anglais)
  getCurrentDate(): string {
    const today = new Date();
    const formattedDate = this._datePipe.transform(today, 'd MMMM yyyy');
    return formattedDate || '';
  }

  setId(id : number) : void {
    this._showPopupService.setId(id)    
  }
  
  displayPopup() : void {
    this._showPopupService.togglePopup()
  }

  getstate() : boolean {
    return this._showPopupService.getState()
  }
}
