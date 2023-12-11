import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ParticipantAllDataNoBlob } from '../../../shared/models/participantAllDataNoBlob';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {

  participantsList : ParticipantAllDataNoBlob[] = []
 

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService) {
  }

  ngOnInit(): void {
    this._apiService.getAllUsersNoBlob().subscribe(data => {
      
      this.participantsList = data
    })
  }

  sortName() : void {
    this.participantsList.sort((p1, p2) => {
      if(p1.participantLastName.toLowerCase() === p2.participantLastName.toLowerCase()) {
        if (p1.participantFirstName.toLowerCase() < p2.participantFirstName.toLowerCase()) {
          return -1
      } else if (p1.participantFirstName.toLowerCase() > p2.participantFirstName.toLowerCase()) {
          return 1
      } else {
          return 0
      }
      }
      if (p1.participantLastName.toLowerCase() < p2.participantLastName.toLowerCase()) {
          return -1
      } else if (p1.participantLastName.toLowerCase() > p2.participantLastName.toLowerCase()) {
          return 1
      } else {
          return 0
      }
  })
  }

  sortDate() : void {
    this.participantsList.sort((p1, p2) => {
      const date1 = new Date(p1.participationDate)
      const date2 = new Date(p2.participationDate)
      return date1.getTime() - date2.getTime()
  })
  this.participantsList.forEach(p => {
      console.log(p.participationDate);
      
  });
  }

  sortState() : void {
    this.participantsList.sort((p1, p2) => {
      if (p1.status < p2.status) {
          return -1
      } else if (p1.status > p2.status) {
          return 1
      } else {
          return 0
      }
  })
  }

  sortProduct() : void {
    this.participantsList.sort((p1, p2) => {
      if (p1.productType < p2.productType) {
          return -1
      } else if (p1.productType > p2.productType) {
          return 1
      } else {
          return 0
      }
  })
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
