import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';
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

  constructor(private _dataFormService : DataFormService){
    this.choix = this._dataFormService.displayProductType();
  }

  ngOnInit(){
    switch(this.choix){
      case 'Herbicide': {
        this.texte = 'Si votre allée de garage est directement reliée à la voirie, pour protéger les ressources en eaux, vous ne pouvez pas y utiliser d\'herbicide. Tournez-vous vers les alternatives manuelles !';
        break;
      }
      case 'Fongicide': {
        this.texte = 'Les maladies se développent plus facilement dans des conditions qui leur sont favorables, comme les environnements humides et chauds. Éviter les plantations trop denses et tailler régulièrement permet de limiter les maladies et donc, l\'utilisation de fongicide. Pensez-y !';
        break;
      }
      case 'Insecticide': {
        this.texte = 'Les insecticides peuvent être risqués pour les insectes utiles (abeilles, coccinelles...) également. Pensez à scrupuleusement lire les conditions d\'utilisation lorsque vous en utilisez.';
        break;
      }
      // Si la case "Autre" a été remplie
      case'D': {
        this.texte = 'Les plantes indigènes (de chez nous) sont plus résistantes aux insectes ravageurs et maladies. N\’hésitez pas à demander conseil dans votre pépinière afin de vous orienter vers des espèces et variétés adaptées à votre jardin !';
        break;
      }
      // On rentre ici si il y'a eu un problème de chargement OU que l'user a rien choisi du tout
      default:
        this.texte = 'Les pesticides représentent une menace sérieuse pour la biodiversité, en provoquant la disparition d\'insectes pollinisateurs essentiels à la reproduction des plantes, compromettant ainsi l\'équilibre écologique.';
        break;
    }
  }
}
