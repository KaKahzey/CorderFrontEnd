import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PesticideChoiceService } from '../../../shared/services/pesticide-choice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-information',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './photo-information.component.html',
  styleUrl: './photo-information.component.scss'
})
export class PhotoInformationComponent {
  inputValue: string = '';

  constructor(private _pesticideService : PesticideChoiceService) {

  }

  choisir(choix : string){
    this._pesticideService.changerChoix(choix);
  }

  onInputChange() {
    console.log('Nouvelle valeur de l\'input:', this.inputValue);
    //Envoyer cette valeur à l'Userdata, peut-être dans le good practice, à voir
  }
}