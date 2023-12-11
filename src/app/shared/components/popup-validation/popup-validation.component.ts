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

  constructor(private _apiService : ApiService, private _authService : AuthService, private _showPopup : ShowPopupService) { }

  ngOnInit() : void {
    const reader : FileReader = new FileReader()
    //Définir sur l'évènement onload, que l'image URL devienne le résultat du reader
    reader.onload = ()=>{
      this.urlPhoto = reader.result as string
    }

      this.admin = this._authService.getUser()
        
     this._apiService.getById(this._showPopup.getId()).subscribe(data => {
      this.userData = data
      this._apiService.getPhoto(this.userData.id).subscribe({
        next : (photo) => reader.readAsDataURL(photo),
      })
      })
     
  }

  closePopUp(){
    this._showPopup.togglePopup()
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
