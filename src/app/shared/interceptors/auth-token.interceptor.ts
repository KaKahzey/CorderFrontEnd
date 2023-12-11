import { Injectable } from '@angular/core';
import {
  HttpInterceptorFn
} from '@angular/common/http';

// @Injectable()
// export class AuthTokenInterceptor implements HttpInterceptor {

//   constructor() {}

  export const authInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('auth interceptor...');
    return next(req);
  };

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   //On tente de récupérer le token dans le localStorage
  //   let token = localStorage.getItem('token');
  //   //Si y'en a un, on clone la requête et on ajoute le token dans les headers et on next
  //   if(token && token !== '') {
  //     let requestClone = request.clone( {setHeaders : {
  //       'Authorization' : `Bearer ${token}`
  //     }} );
  //     return next.handle(requestClone);
  //   }
  //   //Sinon, on next juste
    
  //   return next.handle(request);
  // }
//}
