import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../models/admin/loginData';
import { ParticipantFullForm } from '../models/user/participantFullForm';
import { Opinion } from '../models/user/opinion';
import { AuthService } from './auth.service';
import { modifyAccount } from '../models/admin/modifyAccount';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Faut mettre manuellement le token dans chaque requête
  header : any = {
    headers: new HttpHeaders()
      .set('Authorization',  `${this._AuthService.getToken()!}`)
  }

  //------------------------------------------------

  //192.168.200.102 (Technobel)
  static readonly URL: string = 'localhost';
  static readonly PORT: string = '8080';

  //#region admin account requests - model folder : admin
  // Model : loginData
  private _urlLogin : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/user/login"
  // Model : modifyAccount
  private _urlChangePassword : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/user/changePassword"
  //#endregion

  //#region creation participant - model folder : user
  // Model : participantFullForm (ajout "acceptExposure")
  private _urlCreateUser : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/"
  // Model : onlyBlob (dossier models/shared)
  private _urlSetPicture : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/photo/"
  // Model : opinion (changé Satisfaction -> Rating)
  private _urlRating : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/rating"
  //#endregion

  //#region dashboard - model folder : dashboard-comp
  // Model : dashboard
  private _urlDashboard : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/dashboard"
  //#endregion

  //#region participants - model folder : participants-comp
  // Model : participantMostData
  private _urlAllParticipants : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/"
  //#endregion

  //#region stats - model folder : stats-comp
  // Model : allButSpecificWeek
  private _urlStatsGetAll : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/stats"
  // Model : specificWeek
  private _urlStatsGetWeek : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/getWeek?firstDay="
  //#endregion

  //#region popup-validation - model folder : popup-comp
  // Model : participantPopup
  private _urlGetById : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/"
  // Model : onlyBlob (same model as post)
  private _urlGetPhoto : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/photo?id="
  // Patch id sera dans l'url
  private _urlValidate : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/validate?id="
  // Patch id sera dans l'url (changé le verbe denied -> deny)
  private _urlDeny : string ="http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/deny?id="
  // Patch id sera dans l'url
  private _urlShip : string = "http://" + ApiService.URL + ":" + ApiService.PORT + "/participation/ship?id="
  //#endregion

  //------------------------------------------------

  constructor(private _httpClient : HttpClient, private _AuthService : AuthService ) { }

  //#region admin account
  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }
  changePassword(userData : modifyAccount) : Observable<any> {
    const header : any = {
      headers: new HttpHeaders()
        .set('Authorization',  `${this._AuthService.getToken()!}`),
      responseType : "text"
    }
    return this._httpClient.patch(this._urlChangePassword, userData, header)
  }
  //#endregion

  //#region user
  createUser(user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.post(this._urlCreateUser, user)
  }

  addPicture(id : number, picture : FormData) {
    this.header = {
      headers: new HttpHeaders()
        .set('Content-Type',  `multipart/form-data`)
    }
    return this._httpClient.post(this._urlSetPicture + id, picture)
  }

  sendOpinion(opinion : Opinion) : Observable<any> {
    return this._httpClient.post(this._urlRating, opinion)
  }
  //#endregion

  //#region dashboard
  getDashboard() : Observable<any> {
    return this._httpClient.get(this._urlDashboard, this.header)
  }

  getPhoto(id : number) : Observable<any> {
    const header = {
      headers: new HttpHeaders()
      .set('Authorization',  `${this._AuthService.getToken()!}`),
      responseType : "blob" as "json"
    }
    return this._httpClient.get(this._urlGetPhoto + id, header)
  }
  //#endregion

  //#region participants
  getAllParticipants() : Observable<any> {
    return this._httpClient.get(this._urlAllParticipants, this.header)
  }
  //#endregion

  //#region stats
  getAllStats() : Observable<any> {
    return this._httpClient.get(this._urlStatsGetAll, this.header)
  }

  getSpecificWeek(day : string) : Observable<any> {
    return this._httpClient.get(this._urlStatsGetWeek + day, this.header)
  }
  //#endregion

  //#region popup-validation
  getById(id : number) : Observable<any> {
    return this._httpClient.get(this._urlGetById + id, this.header)
  }

  validate(id : number) : Observable<any> {
    return this._httpClient.patch(this._urlValidate + id, this.header)
  }

  deny(id : number) : Observable<any> {
    return this._httpClient.patch(this._urlDeny + id, this.header)
  }

  ship(id : number) : Observable<any> {
    return this._httpClient.patch(this._urlShip + id, this.header)
  }
  //#endregion


}
