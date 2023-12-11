import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //On tente de récupérer le token dans le localStorage
    console.log("nickel");
    
    let token = localStorage.getItem('token');
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

