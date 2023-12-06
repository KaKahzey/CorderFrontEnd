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
      login : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }
  loginFormisValid = false;
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginFormisValid = true;
    }
  }

  login() : void{ 
    console.log("test")
    // if (this.loginForm.valid){
      
    //   const loginInfo = {
    //   login : this.loginForm.get("name")?.value,
    //   password : this.loginForm.get("password")?.value
    //   }

    //   this._apiService.login(loginInfo).subscribe({

    //     next : (response) => {
    //       console.log("User logged in : ", response)
    //       this._authService.setUser(loginInfo.login, response.token)
    //       this._router.navigateByUrl("/admin/dashboard")
    //     },

    //     error : (error) => {
    //       console.log("error : ", error)
    //     }
    //   })
    // }
  }
}
