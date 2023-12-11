import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ParticipantPopup } from '../../models/participantPopup';
import { AuthService } from '../../services/auth.service';
import { ShowPopupService } from '../../services/show-popup.service';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';

@Component({
  selector: 'app-popup-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-validation.component.html',
  styleUrl: './popup-validation.component.scss'
})
export class PopupValidationComponent {
  [x: string]: any;

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
  
  @ViewChild('myModal', { static: false }) modal: ElementRef<HTMLElement> | null = null;
  
  urlPhoto: any;
  admin : string | any = "corder";

  private renderer: Renderer2;
  
  constructor(private rendererFactory: ɵDomRendererFactory2, private _apiService : ApiService, private _authService : AuthService, private _showPopup : ShowPopupService) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  ngOnInit() : void {
    const reader : FileReader = new FileReader()
    //Définir sur l'évènement onload, que l'image URL devienne le résultat du reader
    reader.onload = ()=>{
      this.urlPhoto = reader.result as string
    }

      this.admin = this._authService.getUser()
      console.log(this.admin);
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

  closeModal(event : any) {
    console.log(event.target);
    
    console.log("CloseModal called");
    if (this.modal && event.target.classList.contains("containe")) {
      console.log("Modal found, changing style");
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'none');
    }
  }
}
