import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ShowPopupService } from '../../../shared/services/show-popup.service';
import { PopupValidationComponent } from '../../../shared/components/popup-validation/popup-validation.component';
import { ParticipantMostData } from '../../../shared/models/participants-comp/participantMostData';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule, PopupValidationComponent],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {

  isNameSorted : boolean = false
  isDateSorted : boolean = false
  isProductSorted : boolean = false
  isStatusSorted : boolean = false
  lastButton : string = ""

  listParticipants : ParticipantMostData[] = [
    /*
    {
      id : 1,
      participantLastName : "jean",
      participantFirstName : "baptou",
      participationDate : new Date("2023-12-14"),
      participantAddress : {
        street : "Rue du Filou 12",
        city : "Marbais",
        postCode : "1495"
      },
      productType : "herbicide",
      status : "SHIPPED"
    },
    {
      id : 2,
      participantLastName : "damien",
      participantFirstName : "dupont",
      participationDate : new Date("2024-12-14"),
      participantAddress : {
        street : "Rue du Filou 12",
        city : "Marbais",
        postCode : "1495"
      },
      productType : "fongicide",
      status : "VALIDATED"
    },
    {
      id : 3,
      participantLastName : "damien",
      participantFirstName : "alberta",
      participationDate : new Date("2022-12-14"),
      participantAddress : {
        street : "Rue du Filou 12",
        city : "Marbais",
        postCode : "1495"
      },
      productType : "fongicide",
      status : "VALIDATED"
    }
     */
  ]

  constructor(private _apiService : ApiService, private _showPopupService : ShowPopupService, private _authService : AuthService) {
  }
  role: string | null | undefined;

  ngOnInit(): void {
    this.role = this._authService.getRole()
    this._apiService.getAllParticipants().subscribe({
      next : (resp) => {
        console.log(this.listParticipants)
        console.log(this._authService.getRole())
        resp.forEach((element : any) => {
          this.listParticipants.push({
            id : element.id,
            participantLastName : element.participantLastName,
            participantFirstName : element.participantFirstName,
            participationDate : new Date(element.participationDate),
            participantAddress : {
              street : element.street,
              city : element.city,
              postCode : element.postCode
            },
            productType : element.productType,
            status : element.status
          })
        })
      },
      error : (error) => {
        console.log("erreur : ", error)

      }
    })
  }

  sortName() : void {
    this.listParticipants.sort((a, b) => {
      const lastNameComparison = a.participantLastName.toLowerCase().localeCompare(b.participantLastName.toLowerCase());

      if (lastNameComparison === 0) {
        return a.participantFirstName.toLowerCase().localeCompare(b.participantFirstName.toLowerCase());
      }
      if (this.isNameSorted) {
        return lastNameComparison * -1;
      }
      return lastNameComparison;
    })
    this.isNameSorted = !this.isNameSorted
    this.lastButton = "name"
  }

  sortDate(): void {
    this.listParticipants.sort((a, b) => {
      const dateA = new Date(a.participationDate).getTime()
      const dateB = new Date(b.participationDate).getTime()

      if (this.isDateSorted) {
        return dateB - dateA
      }
      return dateA - dateB
    })
    this.isDateSorted = !this.isDateSorted
    this.lastButton = "date"
  }

  sortState() : void {
    this.listParticipants.sort((a, b) => {
      if(this.isStatusSorted){
        return b.status.localeCompare(a.status)
      }
      return a.status.localeCompare(b.status)
    })
    this.isStatusSorted = !this.isStatusSorted
    this.lastButton = "status"
  }

  sortProduct() : void {
    this.listParticipants.sort((a, b) => {
      if(this.isProductSorted){
        return b.productType.localeCompare(a.productType)
      }
      return a.productType.localeCompare(b.productType)
    })
    this.isProductSorted = !this.isProductSorted
    this.lastButton = "product"
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

  getUser() : string | null {
    return this._authService.getUser()
  }
}
