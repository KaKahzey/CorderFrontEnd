import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';

@Component({
  selector: 'app-photo-validation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photo-validation.component.html',
  styleUrl: './photo-validation.component.scss'
})
export class PhotoValidationComponent{

  imgUrl : string = ''
  errorMessage : any

  constructor(private _DataFormService : DataFormService) {

  }

  ngOnInit(){
    const reader : FileReader = new FileReader()
    //Définir sur l'évènement onload, que l'image URL devienne le résultat du reader
    reader.onload = ()=>{
      this.imgUrl = reader.result as string
    }

    //Déclencher le onload du reader en fournissant le fichier à lire
    reader.readAsDataURL(this._DataFormService.getFile())
  }
}
