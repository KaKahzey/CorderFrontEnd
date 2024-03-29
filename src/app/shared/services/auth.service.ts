import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router : Router){}

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  setUser(user : string, token : string, role : string) : void {
    localStorage.setItem('user', user)
    localStorage.setItem('role', role)
    localStorage.setItem('token', token)
  }

  getUser() : string | null {
    return localStorage.getItem('user')
  }

  getRole() : string | null {
    return localStorage.getItem('role');
  }

  logout() : void {
    localStorage.clear()
    this._router.navigateByUrl("/login")

  }
}
