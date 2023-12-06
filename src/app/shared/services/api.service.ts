import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData';
import { ParticipantFullForm } from '../models/participantFullForm';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _urlLogin : string = "http://192.168.200.102:8080/user/login"
  private _urlCreateUser : string = "http://192.168.200.102:8080/participation/create"
  private _urlGetUsers : string = "http://192.168.200.102:8080/participation/all"
  private _urlGetAllParticipantsNoBlob : string = "http://192.168.200.102:8080/participation/allNoBlob"
  private _urlGetUsersValidatedBlob : string = "http://192.168.200.102:8080/participation/allValidated"
  private _urlDeleteUser : string = ""
  private _urlUpdateUser : string = ""

  constructor(private _httpClient : HttpClient) { }

  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }

  createUser(user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.post(this._urlCreateUser, user)
  }

  getAllUsersNoBlob() : Observable<any> {
    return this._httpClient.get(this._urlGetAllParticipantsNoBlob)
  }

  getUsersValidatedBlob() : Observable<any> {
  return this._httpClient.get(this._urlGetUsersValidatedBlob)
  }

  deleteUser(id : number) : Observable<any> {
    return this._httpClient.delete(this._urlDeleteUser + id)
  }
  
  updateUser(id : number, user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.put(this._urlUpdateUser + id, user)
  }

  
}
