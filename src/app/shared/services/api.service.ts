import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData';
import { ParticipantFullForm } from '../models/participantFullForm';
import { Opinion } from '../models/opinion';
// import {createHttpClient} from "../interceptorResolution/http.service";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _urlLogin : string = "http://192.168.200.102:8080/user/login"
  private _urlCreateUser : string = "http://192.168.200.102:8080/participation/create"
  private _urlGetAllParticipantsNoBlob : string = "http://192.168.200.102:8080/participation/allNoBlob"
  //#region dashboard
  private _urlCountParticipants : string = "http://192.168.200.102:8080/participation/nbrparticipations"
  private _urlCountLast7Days : string = "http://192.168.200.102:8080/participation/countParticipationsPreceeding7Days?date="
  //#endregion
  //#region stats
  private _urlCountProvince : string = "http://192.168.200.102:8080/participation/countByProvince"
  private _urlLastMonths : string = "http://192.168.200.102:8080/participation/countParticipationsFor5LastMonths"
  //#endregion
  //#region popup-validation
  private _urlGetById : string = "http://192.168.200.102:8080/participation/findById/"
  private _urlGetPhoto : string = "http://192.168.200.102:8080/participation/getPhoto?id="
  private _urlValidate : string = "http://192.168.200.102:8080/participation/validate/"
  private _urlDeny : string ="http://192.168.200.102:8080/participation/denied/"
  private _urlShip : string = "http://192.168.200.102:8080/participation/ship/"
  //#endregion
  private _urlUpdateUser : string = ""
  private _urlSetPicture : string = "http://192.168.200.102:8080/participation/addPhoto?id="
  private _urlRating : string = "http://192.168.200.102:8080/participation/createSatisfaction"
  private _urlPageByStatus : string = "http://192.168.200.102:8080/participation/PageByStatus?status="
  // private httpclient2;

  constructor(private _httpClient : HttpClient) {
    // this.httpclient2 = createHttpClient();
  }

  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }

  createUser(user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.post(this._urlCreateUser, user)
  }

  //#region dashboard
  getCountParticipants() : Observable<any> {
    return this._httpClient.get(this._urlCountParticipants)
  }

  getCountLast7Days(date : string) : Observable<any> {
    return this._httpClient.get(this._urlCountLast7Days + date)
  }
  //#endregion
  //#region stats
  getLastMonths() : Observable<any> {
    return this._httpClient.get(this._urlLastMonths)
  }
  getCountProvince() : Observable<any> {
    return this._httpClient.get(this._urlCountProvince)
  }
  //#endregion
  getAllUsersNoBlob() : Observable<any> {
    return this._httpClient.get(this._urlGetAllParticipantsNoBlob)
  }
  //#region popup-validation
  getById(id : number) : Observable<any> {
    return this._httpClient.get(this._urlGetById + id)
  }
  getPhoto(id : number) : Observable<any> {
    return this._httpClient.get(this._urlGetPhoto + id)
  }
  Validate(id : number) : Observable<any> {
    return this._httpClient.get(this._urlValidate + id)
  }
  Deny(id : number) : Observable<any> {
    return this._httpClient.get(this._urlDeny + id)
  }
  Ship(id : number) : Observable<any> {
    return this._httpClient.get(this._urlShip + id)
  }
  //#endregion

  updateUser(id : number, user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.put(this._urlUpdateUser + id, user)
  }

  addPicture(id : number, picture : FormData) : Observable<any> {
    return this._httpClient.post(this._urlSetPicture + id, picture)
  }

  sendOpinion(opinion : Opinion) : Observable<any> {
    return this._httpClient.post(this._urlRating, opinion)
  }
  getPageByStatus(status : string, sort : string, nbPage : number) : Observable<any> {
    return this._httpClient.get(`${this._urlPageByStatus}${status.toUpperCase()}&sort=${sort}&page=${nbPage}&size=15`)
  }
}
