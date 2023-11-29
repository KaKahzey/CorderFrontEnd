import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {

  participantsList : any[] = [
    {id : 0, lastName :"Doe", firstName : "John", street : "rue à gauche", postcode : "1422", city : "Braine le Compte", productUsed : "Fongicide", date : "2023-12-22", validated : true, shipped : false},
    {id : 1, lastName :"Pitt", firstName : "John", street : "rue à gauche", postcode : "1422", city : "Tilly", productUsed : "Herbicide", date : "2024-10-22", validated : false, shipped : false},
    {id : 2, lastName :"Doe", firstName : "Eliott", street : "rue à gauche", postcode : "1422", city : "Tilly", productUsed : "Insecticide", date : "2023-12-12", validated : true, shipped : true} 
  ]

  sortName() : void {
    this.participantsList.sort((p1, p2) => {
      if(p1.lastName === p2.lastName) {
        if (p1.firstName < p2.firstName) {
          return -1
      } else if (p1.firstName > p2.firstName) {
          return 1
      } else {
          return 0
      }
      }
      if (p1.lastName < p2.lastName) {
          return -1
      } else if (p1.lastName > p2.lastName) {
          return 1
      } else {
          return 0
      }
  })
  }

  sortDate() : void {
    this.participantsList.sort((p1, p2) => {
      const date1 = new Date(p1.date)
      const date2 = new Date(p2.date)
      return date1.getTime() - date2.getTime()
  })
  }

  sortState() : void {
    this.participantsList.sort((p1, p2) => {
      if (p1.validated === p2.validated) {
        return p1.shipped - p2.shipped
      } 
      else {
        return p1.validated ? -1 : 1
      }
    })
  }

  sortProduct() : void {
    this.participantsList.sort((p1, p2) => {
      if (p1.productUsed < p2.productUsed) {
          return -1
      } else if (p1.productUsed > p2.productUsed) {
          return 1
      } else {
          return 0
      }
  })
  }
}
