import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navbarState : boolean = false
  
  showNavbar() : void {
    this.navbarState = true
  }

  hideNavbar() : void {
    this.navbarState = false
  }
  getNavbarState() : boolean {
    return this.navbarState
  }
}
