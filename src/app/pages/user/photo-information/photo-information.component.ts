import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesticideChoiceService } from '../../../shared/services/pesticide-choice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-information',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photo-information.component.html',
  styleUrl: './photo-information.component.scss'
})
export class PhotoInformationComponent {
  constructor(private pesticideService: PesticideChoiceService) {}

  choisir(choix: string) {
    this.pesticideService.informerChoix(choix);
  }
}
