import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../../pages/admin/dashboard/dashboard.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  username : string = "Admin Corder"


  
}
