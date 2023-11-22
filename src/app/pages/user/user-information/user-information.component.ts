import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  infoForm : FormGroup;

  constructor(private _fb : FormBuilder,private createService : ApiService){
    this.infoForm = this._fb.group({
      
      firstName : [null, [Validators.required,Validators.minLength(2)]],
      lastName : [null, [Validators.required]],
      email : [null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      street : [null,Validators.required],
      postCode : [null,Validators.required],
      city : [null,Validators.required]
    })
  }

getForm(){
    if(this.infoForm.valid){
      console.log("formulaire valide");

       this.createService.createUser(this.infoForm.value).subscribe({
         next : (resp) => {
           console.log("ok",resp);

         },
         error : (error) => {
           console.log("probleme",error)
         }
       })
    }
    else{
      this.infoForm.markAllAsTouched();
      console.log("formulaire pas valide");
    }
  }
}
