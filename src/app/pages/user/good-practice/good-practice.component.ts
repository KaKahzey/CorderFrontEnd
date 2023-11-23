import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PesticideChoiceService } from '../../../shared/services/pesticide-choice.service';

@Component({
  selector: 'app-good-practice',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './good-practice.component.html',
  styleUrl: './good-practice.component.scss'
})
export class GoodPracticeComponent{

  choix : string = '';
  texte : string = '';

  constructor(private _pesticideService : PesticideChoiceService){
    this.choix = this._pesticideService.afficherChoix();
  }

  ngOnInit(){
    switch(this.choix){
      case 'A': {
        this.texte = 'Si votre allée de garage est directement reliée à la voirie, pour protéger les ressources en eaux, vous ne pouvez pas y utiliser d\'herbicide. Tournez-vous vers les alternatives manuelles !';
        break;
      }
      case 'B': {
        this.texte = 'Les maladies se développent plus facilement dans des conditions qui leur sont favorables, comme les environnements humides et chauds. Éviter les plantations trop denses et tailler régulièrement permet de limiter les maladies et donc, l\'utilisation de fongicide. Pensez-y !';
        break;
      }
      case 'C': {
        this.texte = 'Les insecticides peuvent être risqués pour les insectes utiles (abeilles, coccinelles...) également. Pensez à scrupuleusement lire les conditions d\'utilisation lorsque vous en utilisez.';
        break;
      }
      case'D': {
        this.texte = 'Texte pour le choix C';
        break;
      }
      default:
        this.texte = 'Texte par défaut';
        break;
    }
  }
}
