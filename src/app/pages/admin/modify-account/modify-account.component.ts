import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-modify-account',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modify-account.component.html',
  styleUrl: './modify-account.component.scss'
})
export class ModifyAccountComponent {

  modifyForm : FormGroup

  constructor(private _authService : AuthService,private _apiService : ApiService, private _router : Router, private _fb : FormBuilder){
    this.modifyForm = this._fb.group({
      oldPassword : [null, [Validators.required]],
      newPassword : [null, [Validators.required]],
      newPasswordRepeat: [null,[Validators.required]]
    })
  }
  modifyPassword(){
    
  }
}
