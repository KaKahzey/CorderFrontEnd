import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {

  loginForm : FormGroup

  constructor(private _authService : AuthService,private _apiService : ApiService, private _router : Router, private _fb : FormBuilder){
    this.loginForm = this._fb.group({
      name : [[null], [Validators.required]],
      password : [[null], [Validators.required]]
    })
  }
  login() : void{
    const loginInfo = {
      name : this.loginForm.get("name")?.value,
      password : this.loginForm.get("password")?.value
    }
    // this._apiService.login(loginInfo) 
  }
}
