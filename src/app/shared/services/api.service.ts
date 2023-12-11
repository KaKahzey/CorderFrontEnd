import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData';
import { ParticipantFullForm } from '../models/participantFullForm';
import { Opinion } from '../models/opinion';
import { createHttpClient } from './http.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  header : any = {
    headers: new HttpHeaders()
      .set('Authorization',  `${this._AuthService.getToken()!}`)
  }

  private _urlLogin : string = "http://192.168.200.102:8080/user/login"
  private _urlCreateUser : string = "http://192.168.200.102:8080/participation/create"
  private _urlGetAllParticipantsNoBlob : string = "http://192.168.200.102:8080/participation/allNoBlob"
  //#region dashboard
  private _urlCountParticipants : string = "http://192.168.200.102:8080/participation/nbrparticipations"
  private _urlCountLast7Days : string = "http://192.168.200.102:8080/participation/countParticipationsPreceeding7Days?date="
  private _urlLastThreeValidated : string = "http://192.168.200.102:8080/participation/getLasts3Validated"
  private _urlLastThreePending : string = "http://192.168.200.102:8080/participation/getLasts3NonValidated"
  //#endregion
  //#region stats
  private _urlCountProvince : string = "http://192.168.200.102:8080/participation/countByProvince"
  private _urlLastMonths : string = "http://192.168.200.102:8080/participation/countParticipationsFor5LastMonths"
  private _urlGetCountInsecticide : string = "http://192.168.200.102:8080/participation/countInsecticide"
  private _urlGetCountHerbicide : string = "http://192.168.200.102:8080/participation/countHerbicide"
  private _urlGetCountFongicide : string = "http://192.168.200.102:8080/participation/countFongicide"
  private _urlGetCountOtherProducts : string = "http://192.168.200.102:8080/participation/countAllOtherProductType"
  private _urlGetComments : string = "http://192.168.200.102:8080/participation/getComments"
  private _urlGetCountSatisfactionComment : string = "http://192.168.200.102:8080/participation/countBySatisfactionComment?satisfactionComment="
  private _urlGetSatisfactionComments : string = "http://192.168.200.102:8080/participation/allOthersSatisfactionComment"
  //#endregion
  //#region popup-validation
  private _urlGetById : string = "http://192.168.200.102:8080/participation/findById/"
  private _urlGetPhoto : string = "http://192.168.200.102:8080/participation/getPhoto?id="
  private _urlValidate : string = "http://192.168.200.102:8080/participation/validate/"
  private _urlDeny : string ="http://192.168.200.102:8080/participation/denied/"
  private _urlShip : string = "http://192.168.200.102:8080/participation/ship/"
  private _urlCountNote : string = "http://192.168.200.102:8080/participation/countNote?note="
  //#endregion
  private _urlSetPicture : string = "http://192.168.200.102:8080/participation/addPhoto?id="
  private _urlRating : string = "http://192.168.200.102:8080/participation/createSatisfaction"
  private _urlPageByStatus : string = "http://192.168.200.102:8080/participation/PageByStatus?status="


  constructor(private _httpClient : HttpClient, private _AuthService : AuthService ) { }

  login(user : LoginData) : Observable<any> {
    return this._httpClient.post(this._urlLogin, user)
  }

  createUser(user : ParticipantFullForm) : Observable<any> {
    return this._httpClient.post(this._urlCreateUser, user)
  }

  //#region dashboard
  getCountParticipants() : Observable<any> {
    return this._httpClient.get(this._urlCountParticipants, this.header)
  }

  getCountLast7Days(date : string) : Observable<any> {
    return this._httpClient.get(this._urlCountLast7Days + date, this.header)
  }
  getLastThreeValidated() : Observable<any> {
    return this._httpClient.get(this._urlLastThreeValidated, this.header)
  }
  getLastThreePending() : Observable<any> {
    return this._httpClient.get(this._urlLastThreePending, this.header)
  }
  //#endregion
  //#region stats
  getLastMonths() : Observable<any> {
    return this._httpClient.get(this._urlLastMonths, this.header)
  }
  getCountProvince() : Observable<any> {
    return this._httpClient.get(this._urlCountProvince, this.header)
  }
  getCountInsecticide() : Observable<any> {
    return this._httpClient.get(this._urlGetCountInsecticide, this.header)
  }
  getCountHerbicide() : Observable<any> {
    return this._httpClient.get(this._urlGetCountHerbicide, this.header)
  }
  getCountFongicide() : Observable<any> {
    return this._httpClient.get(this._urlGetCountFongicide, this.header)
  }
  getCountOtherProducts() : Observable<any> {
    return this._httpClient.get(this._urlGetCountOtherProducts, this.header)
  }
  getProductComments() : Observable<any> {
    return this._httpClient.get(this._urlGetComments, this.header)
  }
  getCountNote(note : number) : Observable<any> {
    return this._httpClient.get(this._urlCountNote + note, this.header)
  }
  getCountSatisfactionComment(comment : string) : Observable<any> {
    return this._httpClient.get(this._urlGetCountSatisfactionComment + comment, this.header)
  }
  getSatisfactionCommments() : Observable<any> {
    return this._httpClient.get(this._urlGetSatisfactionComments, this.header)
  }
  //#endregion
  getAllUsersNoBlob() : Observable<any> {
    return this._httpClient.get(this._urlGetAllParticipantsNoBlob, this.header)
  }
  //#region popup-validation
  getById(id : number) : Observable<any> {
    return this._httpClient.get(this._urlGetById + id, this.header)
  }
  getPhoto(id : number) : Observable<any> {
    return this._httpClient.get(this._urlGetPhoto + id, this.header)
  }
  validate(id : number) : Observable<any> {
    return this._httpClient.get(this._urlValidate + id, this.header)
  }
  deny(id : number) : Observable<any> {
    return this._httpClient.get(this._urlDeny + id, this.header)
  }
  ship(id : number) : Observable<any> {
    return this._httpClient.get(this._urlShip + id, this.header)
  }
  //#endregion

  addPicture(id : number, picture : FormData) : Observable<any> {
    return this._httpClient.post(this._urlSetPicture + id, picture)
  }

  sendOpinion(opinion : Opinion) : Observable<any> {
    return this._httpClient.post(this._urlRating, opinion)
  }
  getPageByStatus(status : string, sort : string, nbPage : number) : Observable<any> {
    return this._httpClient.get(`${this._urlPageByStatus}${status.toUpperCase()}&sort=${sort}&page=${nbPage}&size=15`, this.header)
  }
}
