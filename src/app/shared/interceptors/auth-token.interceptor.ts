import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("Test interceptor");
    //On tente de récupérer le token dans le localStorage
    let token = localStorage.getItem('token');
    //Si y'en a un, on clone la requête et on ajoute le token dans les headers et on next
    if(token && token !== '') {
      let requestClone = request.clone( {setHeaders : {
        'Authorization' : `Bearer ${token}`
      }} );
      return next.handle(requestClone);
    }
    //Sinon, on next juste

    return next.handle(request);
  }
}
