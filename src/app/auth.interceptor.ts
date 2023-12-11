import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor2: HttpInterceptorFn = (req: HttpRequest<any>, next:
  HttpHandlerFn) => {
    console.log("Interceptor fqzefezqf")
    return next(req);
  };
