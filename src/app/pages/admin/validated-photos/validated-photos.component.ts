import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validated-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validated-photos.component.html',
  styleUrl: './validated-photos.component.scss'
})
export class ValidatedPhotosComponent {
  listParticipants : Object[] = [{id : 0, src : "/assets/img/placeholder.svg"}, {id : 0, src : "/assets/img/placeholder.svg"}]

}
