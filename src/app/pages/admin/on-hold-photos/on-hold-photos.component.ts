import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-on-hold-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-hold-photos.component.html',
  styleUrl: './on-hold-photos.component.scss'
})
export class OnHoldPhotosComponent {
  
  listParticipants : any[] = [{id : 204, src : "/assets/img/placeholder.svg"}]
  imagesParticipants : any[] = []
  currentsettingsPage : any = {status : "PENDING", sort : "DATEASC", page : 0  }

  constructor(private _apiService : ApiService){}

  ngOnInit() : void {
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage.page).subscribe(data => {
      this.listParticipants = data.content
      this.getPhotos()
    })
    
  }

  getPhotos() : void {
    this.listParticipants.forEach(p => {
      this._apiService.getPhoto(p.id).subscribe(data => {
        this.imagesParticipants.push(data)          
      })
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
}
