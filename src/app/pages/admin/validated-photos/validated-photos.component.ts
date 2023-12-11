import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-validated-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validated-photos.component.html',
  styleUrl: './validated-photos.component.scss'
})
export class ValidatedPhotosComponent {

  
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}, {id : 0, src : "/assets/img/placeholder.svg"}]

  constructor(private _apiService : ApiService){}
  ngOnInit() {
    this._apiService.getCountProvince().subscribe(data => {
      console.log(data);
      
    })
  }
  sortName() {
    //requête api 
  }

  sortDate() {
    //requête api
  }

  sortState() {
    //requête api
  }

  sortProduct() {
    //requête api
  }
  showNext() {
    
  }
}
