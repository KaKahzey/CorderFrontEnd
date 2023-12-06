import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';
import { ParticipantStateBlob } from '../../../shared/models/participantStateBlob';

@Component({
  selector: 'app-validated-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validated-photos.component.html',
  styleUrl: './validated-photos.component.scss'
})
export class ValidatedPhotosComponent {

  listParticipants : ParticipantStateBlob[] = []
  tempList : number[] = []
  constructor(private _apiService : ApiService){}

  ngOnInit() : void {
    this._apiService.getUsersValidatedBlob().subscribe(data => {
      this.listParticipants = data
    })
    for(let i = 0; i < 15; i ++){
      this.tempList.push(1)
    }
  }
}
