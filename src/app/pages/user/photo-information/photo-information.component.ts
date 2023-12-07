import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataFormService } from '../../../shared/services/data-form.service';

@Component({
  selector: 'app-photo-information',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './photo-information.component.html',
  styleUrl: './photo-information.component.scss'
})
export class PhotoInformationComponent {
  inputValue: string = '';

  constructor(private _dataFormService : DataFormService) {

  }

  chooseProduct(choice : string){
    this._dataFormService.changeProductType(choice);
  }

  onInputChange() {
    console.log('Nouvelle valeur de l\'input:', this.inputValue);
    //Envoyer cette valeur à l'Userdata, peut-être dans le good practice, à voir
  }
}