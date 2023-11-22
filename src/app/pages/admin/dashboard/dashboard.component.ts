import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(private _navbarService : NavbarService){
    this._navbarService.showNavbar()
  }

}
