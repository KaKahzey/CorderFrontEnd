import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-rejected-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejected-photos.component.html',
  styleUrl: './rejected-photos.component.scss'
})
export class RejectedPhotosComponent {
  constructor(private _navbarService : NavbarService){
    this._navbarService.showNavbar()
  }
}
