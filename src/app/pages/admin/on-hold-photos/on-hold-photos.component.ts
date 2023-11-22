import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-on-hold-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-hold-photos.component.html',
  styleUrl: './on-hold-photos.component.scss'
})
export class OnHoldPhotosComponent {
}
