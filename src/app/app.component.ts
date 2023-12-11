import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PasswordModule } from 'primeng/password';
import { PopupValidationComponent } from './shared/components/popup-validation/popup-validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, HttpClientModule, NavbarComponent, RouterModule, PasswordModule, PopupValidationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService, DatePipe]
  //{provide : HTTP_INTERCEPTORS, useClass : AuthTokenInterceptor, multi : true},
  
})
export class AppComponent {
  title = 'CorderFrontEnd';

  isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
        this.isAdmin = this.router.url.includes('admin');
    });
  }
}
