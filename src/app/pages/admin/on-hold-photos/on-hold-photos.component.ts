import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';
import { ShowPopupService } from '../../../shared/services/show-popup.service';

@Component({
  selector: 'app-on-hold-photos',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './on-hold-photos.component.html',
  styleUrl: './on-hold-photos.component.scss'
})
export class OnHoldPhotosComponent {
  
  listParticipants : any[] = []
  photosParticipants : any[] = []
  currentsettingsPage : any = {status : "PENDING", sort : "DATEASC", page : 0  }

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService){}

  ngOnInit() : void {
    this._apiService.getAllUsersNoBlob().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].status == "PENDING"){
          this.listParticipants.push(data[i])
      }
      for (let i = 0; i < this.listParticipants.length; i++) {
          this.photosParticipants[i] = {id : data[i].id, photo : ""}
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
    this.currentsettingsPage.sort = "DATEASC"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
      this.listParticipants = data.content
    })
  }
  
  sortDateDecreasing() {
    this.currentsettingsPage.sort = "DATEDESC"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  sortName() {
    this.currentsettingsPage.sort = "NAME"
    this.currentsettingsPage.page = 0
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
      this.listParticipants = data.content
    })
  }

  showNext() {
    this.currentsettingsPage.page += 1
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
      this.listParticipants = data.content
      
    })
  }

  showPrevious() {
    if(this.currentsettingsPage.page >= 1){
      this.currentsettingsPage.page -= 1
      this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
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
