import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token : string | null = null
  private _user : string | undefined

  getToken(): string | null {
    return this._token
  }

  setUser(user : string, token : string) : void {
    this._user = user
    this._token = token
  }
  
  getUser() : string | undefined {
    return this._user
  }

  logout() : void {
    this._token = null
    this._user = undefined
    localStorage.clear()
  }
}
