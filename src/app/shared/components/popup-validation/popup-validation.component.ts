import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ParticipantPopup } from '../../models/participantPopup';
import { AuthService } from '../../services/auth.service';
import { ShowPopupService } from '../../services/show-popup.service';

@Component({
  selector: 'app-popup-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-validation.component.html',
  styleUrl: './popup-validation.component.scss'
})
export class PopupValidationComponent {

  userData : ParticipantPopup = {
    id : 1,
    participantFirstName : "Jean",
    participantLastName : "Michel",
    participantEmail : "jeanmichel@exemple.be",
    participantAddress : {
      street : "Rue de la louvière, 2",
      city : "Wavre",
      postCode : 1301
    },
    productType : "fongicide",
    status : "PENDING",
    acceptNewsletter : false
  }
  
  urlPhoto: any;
  admin : string | any = "";
  showPopup = false;

  constructor(private _apiService : ApiService, private _authService : AuthService, private _showPopup : ShowPopupService) {
      this._showPopup.popupState$.subscribe((state) => {
      this.showPopup = state;
    })
  }

  ngOnInit() : void {

      this.admin = this._authService.getUser()
        
     this._apiService.getById(1).subscribe(data => {
      this.userData = data
      })
      this.urlPhoto =this._apiService.getPhoto(this.userData.id)
  }

  closePopUp(){
    const popUp = document.getElementById("popup")
    if(popUp){
        popUp.style.display= "none";
    }
  }

  userDenied(){
    //faire l'appel à l'api
    this._apiService.deny(this.userData.id);
    this.closePopUp();
  }

  userValidated(){
    //faire l'appel à l'api
    this._apiService.validate(this.userData.id);
    this.closePopUp();
  }

  userShipped(){
    //faire l'appel à l'api
    this._apiService.ship(this.userData.id);
    this.closePopUp();
  }
}
