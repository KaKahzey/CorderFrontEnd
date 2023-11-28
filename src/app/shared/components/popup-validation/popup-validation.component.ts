import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../models/userData';

@Component({
  selector: 'app-popup-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-validation.component.html',
  styleUrl: './popup-validation.component.scss'
})
export class PopupValidationComponent {

  // userData : UserData = {firstName : "John", LastName :"Doe" , street : "rue à gauche", postCode : 1422, city : "Braine le Compte", productUsed : "Fongicide",pictureName : " ",pictureType : " "}
}
