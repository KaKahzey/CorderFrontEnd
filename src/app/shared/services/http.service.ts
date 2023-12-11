import { HttpBackend, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokenInterceptor } from '../interceptors/auth-token.interceptor';

@Injectable()
export class MyHttpBackend implements HttpBackend {
  constructor(private _authTokenInterceptor : AuthTokenInterceptor) { }
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this._authTokenInterceptor.intercept(req, {handle: () => new Observable<HttpEvent<any>>()});
  }
}

export function createHttpClient() {
  const myBackend = new MyHttpBackend(new AuthTokenInterceptor());
  const httpClient = new HttpClient(myBackend);

  return httpClient;
}
