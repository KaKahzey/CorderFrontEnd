import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';
import { ApiService } from '../../../shared/services/api.service';

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

  constructor(private _DataFormService : DataFormService, private _ApiService : ApiService) {

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

  sendPhoto(){
    const file = this._DataFormService.getFile()
    const formPicture = new FormData()

    formPicture.append("file", file, file.name)
    this._ApiService.addPicture(108, formPicture).subscribe({
      // next : (value)=>{
      //   this.errorMessage = value
      // },
      // error : (err) => {
      //   this.errorMessage = err
      // }
    })
  }
}
