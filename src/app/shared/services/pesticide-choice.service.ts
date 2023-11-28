import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PesticideChoiceService {
    choix : string = '';

    changerChoix(entreeChoix : string){
      this.choix = entreeChoix;
    }

    afficherChoix() : string{
      return this.choix;
    }
  }