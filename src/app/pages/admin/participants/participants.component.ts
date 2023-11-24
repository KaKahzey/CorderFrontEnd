import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss'
})
export class ParticipantsComponent {

  participantsList : any[] = [{id : 0, lastName :"Doe", firstName : "John", street : "rue à gauche", postcode : "1422", city : "Tilly", productUsed : "Fongicide", validated : true, shipped : false},
  {id : 0, lastName :"Doe", firstName : "John", street : "rue à gauche", postcode : "1422", city : "Tilly", productUsed : "Fongicide", validated : true, shipped : false} ]

  constructor(private _navbarService : NavbarService){
    this._navbarService.showNavbar()
  }
}
