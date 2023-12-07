import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


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
  }
}
