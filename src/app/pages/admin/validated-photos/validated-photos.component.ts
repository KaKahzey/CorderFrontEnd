import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';

@Component({
  selector: 'app-validated-photos',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './validated-photos.component.html',
  styleUrl: './validated-photos.component.scss'
})
export class ValidatedPhotosComponent {

  
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}]
  
  currentSettingsPage : any = {status : "validated", sort : "date", page : 0  }

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService){}

  ngOnInit() : void {
    this.showValidated()
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  updateButtonColor(status : string) {
    const buttonValidated = document.getElementById("validated")
    const buttonShipped = document.getElementById("shipped")
    if(buttonValidated && buttonShipped) {
      if(status === "validated"){
          buttonValidated.style.backgroundColor = "#4D9C18"
          buttonShipped.style.backgroundColor = "white"
          buttonShipped.style.color = "black"
        }
        else if(status === "shipped"){
          buttonShipped.style.backgroundColor = "#4D9C18"
          buttonValidated.style.backgroundColor = "white"
          buttonValidated.style.color = "black"
        }
    }
  }

  sortDate() {
    this.currentSettingsPage.sort = "date"
    this.currentSettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }
  
  sortDateDecreasing() {
    this.currentSettingsPage.sort = "date"
    this.currentSettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  sortName() {
    this.currentSettingsPage.sort = "name"
    this.currentSettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  showValidated() {
    this.currentSettingsPage.status = "validated"
    this.currentSettingsPage.sort = "date"
    this.currentSettingsPage.page = 0
    this.updateButtonColor("validated")
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  showShipped() {
    this.currentSettingsPage.status = "shipped"
    this.currentSettingsPage.sort = "date"
    this.currentSettingsPage.page = 0
    this.updateButtonColor("shipped")
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  showNext() {
    this.currentSettingsPage.page += 1
    this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
      this.listParticipants = data.content
      
    })
  }

  showPrevious() {
    if(this.currentSettingsPage.page >= 1){
      this.currentSettingsPage.page -= 1
      this._apiService.getPageByStatus(this.currentSettingsPage.status, this.currentSettingsPage.sort, this.currentSettingsPage).subscribe(data => {
        this.listParticipants = data.content
        
      })
    }
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
