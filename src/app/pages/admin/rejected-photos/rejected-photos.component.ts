import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';

@Component({
  selector: 'app-rejected-photos',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './rejected-photos.component.html',
  styleUrl: './rejected-photos.component.scss'
})
export class RejectedPhotosComponent {
  listParticipants : any[] = []
  photosParticipants : any[] = []
  currentsettingsPage : any = {status : "denied", sort : "date", page : 0  }

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService){}

  ngOnInit() : void {
    this._apiService.getAllUsersNoBlob().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].status == "DENIED"){
          this.listParticipants.push(data[i])
      }
      for (let i = 0; i < this.listParticipants.length; i++) {
          this.photosParticipants[i] = {id : this.listParticipants[i].id, photo : ""}
          this._apiService.getPhoto(this.photosParticipants[i].id).subscribe({
            next: (photo) => {
              const reader: FileReader = new FileReader()
              reader.onload = () => {
                this.photosParticipants[i].photo = reader.result as string
              }
              reader.readAsDataURL(photo)
            }
          })
        }}
    })
  }
  
  sortDate() {
    this.currentsettingsPage.sort = "date"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }
  
  sortDateDecreasing() {
    this.currentsettingsPage.sort = "date"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  sortName() {
    this.currentsettingsPage.sort = "name"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  showNext() {
    this.currentsettingsPage.page += 1
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
      this.listParticipants = data.content
      
    })
  }

  showPrevious() {
    if(this.currentsettingsPage.page >= 1){
      this.currentsettingsPage.page -= 1
      this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
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
