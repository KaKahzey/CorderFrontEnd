import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../../pages/admin/dashboard/dashboard.component';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  username : string = "Admin " + this.displayUser()

  constructor(private _AuthService : AuthService ){
    
  }

  //affiche le menu "déroulant" pour se déconnecter
  toggleMenu() {
    const menu = document.getElementById('menu')!;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  //return le nom du user
  displayUser() : string {
    if(this._AuthService.getUser() === "cycleenterre") {
      return "Cycle en Terre"
    }
    else {
      return "Corder"
    }
  }

  //vide le cache
  logout() : void {
    this._AuthService.logout()    
  }
}
