import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';
import { ShowPopupService } from '../../../shared/services/show-popup.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, PopupValidationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //todo les mois apparaissent en Anglais top right
  totalParticipants : number = 1297
  weekParticipants : number = 19
  days : any = {monday : 5, tuesday : 10, wednesday : 3, thursday : 4, friday : 1, saturday : 5, sunday : 8}
  timeLeft : number = this.displayTimeLeft("2024-06-20")
  currentDate : string = this._datePipe.transform(new Date(), 
  'yyyy-MM-dd')!
  lastThreeValidated : any[] = [] 
  lastThreePending : any[] = [] 
  

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _apiService : ApiService, private _datePipe : DatePipe, private _showPopupService : ShowPopupService) {}

  ngOnInit() : void {
    //#region set total participants
    this._apiService.getCountParticipants().subscribe(data => {
      this.totalParticipants = data
    })
    //#endregion
    //#region set days and total week
    this._apiService.getCountLast7Days(this.currentDate).subscribe(data => {
      this.days = data
      this.setHeight(this.days.monday, "monday")
      this.setHeight(this.days.tuesday, "tuesday")
      this.setHeight(this.days.wednesday, "wednesday")
      this.setHeight(this.days.thursday, "thursday")
      this.setHeight(this.days.friday, "friday")
      this.setHeight(this.days.saturday, "saturday")
      this.setHeight(this.days.sunday, "sunday")
      this.weekParticipants = this.countTotal7Days()
    })
    //#endregion
    //#region get last 3 validated/pending
    this._apiService.getLastThreeValidated().subscribe(data => {
      this.lastThreeValidated = data
    })
    this._apiService.getLastThreePending().subscribe(data => {
      this.lastThreePending = data
    })
    //#endregion
  }

  //set la taille de chaque baguette dans le graphique
  setHeight(height: number, day: string): void {
    const valuesArray: number[] = Object.values(this.days)
    const highestNumber: number = Math.max(...valuesArray)
    const selectedDay = this._elementRef.nativeElement.querySelector(`.${day}`)
    this._renderer.setStyle(selectedDay, 'height', `${(height / highestNumber * 100) -5}%`)
  }

  //return le total de participants des 7 derniers jours
  countTotal7Days() : number {
    const valuesArray: number[] = Object.values(this.days)
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
