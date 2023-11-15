import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData';
import { UserData } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _urlLogin : string = ""
  private _urlCreateUser : string = ""
  private _urlGetUsers : string = ""
  private _urlDeleteUser : string = ""
  private _urlUpdateUser : string = ""
  private _urlSendRating : string = ""

  constructor(private _httpClient : HttpClient) { }

  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }

  createUser(user : UserData) : Observable<any> {
    return this._httpClient.post(this._urlCreateUser, user)
  }

  getUsers() : Observable<any> {
    return this._httpClient.get(this._urlGetUsers)
  }

  deleteUser(id : number) : Observable<any> {
    return this._httpClient.delete(this._urlDeleteUser + id)
  }
  
  updateUser(id : number, user : UserData) : Observable<any> {
    return this._httpClient.put(this._urlUpdateUser + id, user)
  }
  sendRating(rating : number) : Observable<any> {
    return this._httpClient.post(this._urlSendRating, rating)
  }
}
