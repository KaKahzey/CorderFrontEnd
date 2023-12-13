import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ApiService } from '../../../shared/services/api.service';
import { modifyAccount } from '../../../shared/models/admin/modifyAccount';

@Component({
  selector: 'app-modify-account',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,PasswordModule],
  templateUrl: './modify-account.component.html',
  styleUrl: './modify-account.component.scss'
})
export class ModifyAccountComponent {

  userData : modifyAccount = {
    user : "",
    oldPassword : "",
    newPassword : ""
  }

  modifyForm : FormGroup

  constructor(private _apiService : ApiService, private _router : Router, private _fb : FormBuilder, private _authservice : AuthService){
    this.modifyForm = this._fb.group({
      oldPassword : [null, [Validators.required]],
      newPassword : [null, [Validators.required]],
      newPasswordRepeat: [null,[Validators.required]]
    })
  }

  modifyPassword() : void{
    if (this.modifyForm.valid) {
      if (this.modifyForm.get("newPassword")?.value === this.modifyForm.get("newPasswordRepeat")?.value) {
        this.userData = {
          user : this._authservice.getUser()!,
          oldPassword : this.modifyForm.get("oldPassword")?.value,
          newPassword : this.modifyForm.get("newPassword")?.value
        }
        this._apiService.changePassword(this.userData).subscribe({
          next : ()=>{
            this._router.navigateByUrl("/admin/dashboard");
          },
          error : () => {
            console.log("mauvais mdp")
          }
        })
      }
    }
    
  }
}
