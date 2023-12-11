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

  setUser(user : string, token : string) : void {
    localStorage.setItem('role', user.toString())
    localStorage.setItem('token', token.toString())
  }
  
  getUser() : string | null {
    return localStorage.getItem('role')
  }

  logout() : void {
    localStorage.clear()
    this._router.navigateByUrl("/login")
    
  }
}
