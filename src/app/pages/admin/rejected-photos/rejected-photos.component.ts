import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-rejected-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejected-photos.component.html',
  styleUrl: './rejected-photos.component.scss'
})
export class RejectedPhotosComponent {
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}]
  currentsettingsPage : any = {status : "denied", sort : "date", page : 0  }

  constructor(private _apiService : ApiService){}

  ngOnInit() : void {
    this._apiService.getPageByStatus(this.currentsettingsPage.status, this.currentsettingsPage.sort, this.currentsettingsPage).subscribe(data => {
      this.listParticipants = data.content
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
}
