import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ParticipantPopup } from '../../models/participantPopup';
import { DataFormService } from '../../services/data-form.service';

@Component({
  selector: 'app-popup-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-validation.component.html',
  styleUrl: './popup-validation.component.scss'
})
export class PopupValidationComponent {

  userData : ParticipantPopup = {
    participantFirstName : "Jean",
    participantLastName : "",
    participantEmail : "",
    participantAddress : {
      street : "",
      city : "",
      postCode : 0
    },
    status : "PENDING",
    acceptNewsletter : false
  }

  constructor(private _apiService : ApiService, private _dataFormService : DataFormService) {}

  ngOnInit() : void {
    
     this._apiService.getById(1).subscribe(data => {
      this.userData = data
      
      
     })
  }

  closePopUp(){
    const popUp = document.getElementById("popup")
    if(popUp){
        popUp.style.display= "none";
    }
  }
}
