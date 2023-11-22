import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-validated-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validated-photos.component.html',
  styleUrl: './validated-photos.component.scss'
})
export class ValidatedPhotosComponent {
  constructor(private _navbarService : NavbarService){
    console.log(this._navbarService.getNavbarState());
    
  }
}
