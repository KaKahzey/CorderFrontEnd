import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DataFormService } from '../../../shared/services/data-form.service';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  infoForm : FormGroup;
  router = inject(Router);
  newsletter : boolean = false;
  
  constructor(private _fb : FormBuilder,private _dataFormService : DataFormService, private _apiService : ApiService){
    this.infoForm = this._fb.group({
      
      firstName : [null, [Validators.required,Validators.minLength(2)]],
      lastName : [null, [Validators.required]],
      email : [null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      street : [null,Validators.required],
      postCode : [null,Validators.required],
      city : [null,Validators.required],
      conditionJeu : [null, Validators.required],
      rgpd : [null, Validators.required],
      newsletter: [this.newsletter]
    })
  }

  onCheckBoxChange(){
    this.newsletter = !this.newsletter;
    // Mettre à jour la valeur du bool dans le formulaire
    this.newsletter = this.infoForm.get('newsletter')?.value;
    console.log(this.infoForm.get('newsletter')?.value);
  }
  getForm(){
      if(this.infoForm.valid){
        console.log("formulaire valide");
        this._dataFormService.addForm(this.infoForm.value)
        this._apiService.createUser(this._dataFormService.mergeData()).subscribe({
          next : (resp) => {
            this._dataFormService.getId(resp.id)
            this.router.navigateByUrl("/thanks");
            
          },
          error : (error) => {
            console.log("probleme",error);
          }
        })
      }
      else{
        this.infoForm.markAllAsTouched();
        console.log("formulaire pas valide");
      }
  }
}