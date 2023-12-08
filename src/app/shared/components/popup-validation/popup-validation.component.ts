import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-validation.component.html',
  styleUrl: './popup-validation.component.scss'
})
export class PopupValidationComponent {

  userData : any = {firstName : "John", lastName :"Doe" , street : "rue à gauche",email : "JohnDoe@gmail.com" ,blob : [1,0,1] , postCode : 1422, city : "Braine le Compte", productUsed : "Fongicide", newsletter : true}
  
  closePopUp(){
    const popUp = document.getElementById("popup")
    if(popUp){
        popUp.style.display= "none";
    }
  }
}
