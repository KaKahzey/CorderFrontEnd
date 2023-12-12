import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ParticipantAllDataNoBlob } from '../../../shared/models/participantAllDataNoBlob';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {

  participantsList : ParticipantAllDataNoBlob[] = []
  lastSortedProperty: string = '';
  lastSortingOrder: boolean | undefined;
  sortedArray: any[] = [];

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService, private _authService : AuthService) {
  }

  ngOnInit(): void {
    this._apiService.getAllUsersNoBlob().subscribe(data => {
      
      this.participantsList = data
    })
  }

  sortArray(sortBy: string): void {
    if (sortBy === this.lastSortedProperty) {
      // Toggle sorting order for the same property
      this.lastSortingOrder = !this.lastSortingOrder;
    } else {
      // Set default sorting order for a new property
      this.lastSortingOrder = undefined;
    }

    this.lastSortedProperty = sortBy;
    this.sortedArray = this.customSort([...this.participantsList], sortBy, this.lastSortingOrder);
  }

  private customSort(array: any[], sortBy: string, descending: boolean | undefined): any[] {
    array.sort((a, b) => {
      const compareResult = descending ? -1 : 1;

      switch (sortBy) {
        case 'id':
          return (a.id - b.id) * compareResult;
        case 'dateCreation':
          return (a.dateCreation.getTime() - b.dateCreation.getTime()) * compareResult;
        case 'lastName':
          if (a.lastName === b.lastName) {
            // If last names are the same, compare by firstName
            return a.firstName.localeCompare(b.firstName) * compareResult;
          }
          return a.lastName.localeCompare(b.lastName) * compareResult;
        case 'product':
          return a.product.localeCompare(b.product) * compareResult;
        case 'state':
          return a.state.localeCompare(b.state) * compareResult;
        default:
          return 0; // Default case, no sorting
      }
    });

    return array;
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
  getRole() : string | null {
    return this._authService.getUser()
  }
  
  displayPopup() : void {
    this._showPopupService.togglePopup()
  }

  getstate() : boolean {
    return this._showPopupService.getState()
  }
}
