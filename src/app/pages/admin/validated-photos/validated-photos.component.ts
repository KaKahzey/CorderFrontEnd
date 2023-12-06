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
<<<<<<< HEAD
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}, {id : 0, src : "/assets/img/placeholder.svg"}]

=======

  
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}, {id : 0, src : "/assets/img/placeholder.svg"}]

  constructor(private _apiService : ApiService){}

>>>>>>> admin-validated
}
