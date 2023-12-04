import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-capture-choice',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './photo-capture-choice.component.html',
  styleUrl: './photo-capture-choice.component.scss'
})
export class PhotoCaptureChoiceComponent {

}
