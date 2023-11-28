import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PesticideChoiceService } from '../../../shared/services/pesticide-choice.service';

@Component({
  selector: 'app-photo-information',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photo-information.component.html',
  styleUrl: './photo-information.component.scss'
})
export class PhotoInformationComponent {

  constructor(private _pesticideService : PesticideChoiceService) {

  }

  choisir(choix : string){
    this._pesticideService.changerChoix(choix);
  }
}