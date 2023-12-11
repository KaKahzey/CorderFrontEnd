import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { authInterceptor2 } from './app/auth.interceptor';

bootstrapApplication(AppComponent,{
  providers: [
    // routes
    provideRouter(routes), 
    // http client
    provideHttpClient(
      // registering interceptors
      withInterceptors([authInterceptor2]) 
    )
]
}).catch((err) => console.error(err));
