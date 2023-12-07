import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';

@Component({
  selector: 'app-photo-capture-choice',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './photo-capture-choice.component.html',
  styleUrl: './photo-capture-choice.component.scss'
})
export class PhotoCaptureChoiceComponent {

  constructor(private _DataFormService : DataFormService, private _Router : Router) {
    
  }

  setupFileService(event : any){
    const inputFile : HTMLInputElement = event.target;

    if(inputFile != null){
      const fileList : FileList | null = (event.target as HTMLInputElement).files;

      if(fileList != null){
        const file : File = fileList[0];
        this._DataFormService.changeFile(file);
        this._Router.navigateByUrl("/photo-validation");
      }
    }
  }
}
